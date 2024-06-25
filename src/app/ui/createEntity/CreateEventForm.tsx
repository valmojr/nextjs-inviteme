"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Event, $Enums } from "@prisma/client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const createEventSchema = z.object({
  name: z
    .string({
      required_error: "Mandatory Field",
      invalid_type_error: "must be a valid text",
    })
    .min(6, {
      message: "must be larger",
    })
    .max(100, {
      message: "must be shorter",
    }),
  location: z.string().optional(),
  description: z.string().optional(),
  startDate: z.date(),
  startTime: z.string().optional(),
  endDate: z.date().optional(),
  endTime: z.string().optional(),
  thumbnail: z.any(),
  visibility: z
    .string()
    .refine((value) => ["PRIVATE", "UNLISTED", "PUBLIC"].includes(value)),
});

function CreateEventForm({ user, token }: { user: User; token: string }) {
  const { toast } = useToast();

  const createEventForm = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      name: "",
      location: "",
      startDate: new Date(),
      visibility: "PUBLIC",
    },
  });

  async function onSubmit(data: z.infer<typeof createEventSchema>) {
    // TODO - Create Event DTO
    const eventDTO: Partial<Event> = {
      name: data.name,
      location: data.location || null,
      description: data.description || null,
      startDate: new Date(Date.parse(data.startDate as unknown as string)),
      endDate: data.endDate
        ? new Date(Date.parse(data.endDate as unknown as string))
        : null,
      thumbnailId: data.thumbnail || null,
      mainGroupID: null,
      ownerID: user.id,
      visibility:
        (data.visibility as $Enums.Visibility) ||
        ("PUBLIC" as $Enums.Visibility),
    };

    // TODO - Create Event fetch

    const askForEventCreation = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/event`,
      {
        body: JSON.stringify({ event: eventDTO }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    //const eventCreatedOnDatabase = await askForEventCreation.json();

    // TODO - Create Main Group Build

    // TODO - Link Main Group to Created Event

    // TODO - Redirect to created Event

    toast({
      title: `Creating Event: ${data.name}`,
      description: `${JSON.stringify(askForEventCreation.headers)}`,
      action: (
        <ToastAction altText="Confirm event creation">Confirm</ToastAction>
      ),
    });
  }

  return (
    <div className="w-full h-fit">
      <h1 className="text-3xl text-center">Create Event</h1>
      <Separator className="my-4" />
      <Form {...createEventForm}>
        <form
          onSubmit={createEventForm.handleSubmit(onSubmit)}
          className="h-fit"
        >
          <FormField
            control={createEventForm.control}
            name={"name"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title*</FormLabel>
                <FormControl>
                  <Input placeholder="a epic event title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={createEventForm.control}
            name={"location"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="a place, a url, anywhere..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-row flex-nowrap gap-3">
            <FormField
              control={createEventForm.control}
              name={"startDate"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-3">Starting at*</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a Date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-5 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(event) => {
                          field.onChange(event);
                        }}
                        numberOfMonths={1}
                        disabled={(date) =>
                          date <
                            new Date(
                              new Date().setDate(new Date().getDate() - 1)
                            ) || date < new Date("1900-01-01")
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={createEventForm.control}
              name={"startTime"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mt-2"
                      placeholder="00:00"
                      type={"time"}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row flex-nowrap gap-3">
            <FormField
              control={createEventForm.control}
              name={"endDate"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-3">Ending at</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a Date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-5 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(event) => {
                          field.onChange(event);
                        }}
                        numberOfMonths={1}
                        disabled={(date) =>
                          date <
                            new Date(
                              new Date().setDate(new Date().getDate() - 1)
                            ) || date < new Date("1900-01-01")
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={createEventForm.control}
              name={"endTime"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mt-2"
                      placeholder="00:00"
                      type={"time"}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={createEventForm.control}
            name={"thumbnail"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="thumbnail image"
                    type="file"
                    accept="image"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={createEventForm.control}
            name={"description"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[100px]"
                    placeholder="Your event infos"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={createEventForm.control}
            name="visibility"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Visibility</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="PUBLIC" />
                      </FormControl>
                      <FormLabel className="font-normal">Public</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="UNLISTED" />
                      </FormControl>
                      <FormLabel className="font-normal">Unlisted</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="PRIVATE" />
                      </FormControl>
                      <FormLabel className="font-normal">Private</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-5">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateEventForm;
