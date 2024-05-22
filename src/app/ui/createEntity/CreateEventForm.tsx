"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Event } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ScrollArea } from "@radix-ui/react-scroll-area";

function CreateEventForm({ user }: { user: User }) {
  const createEventSchema = z.object({
    title: z
      .string()
      .min(8, { message: "must be at least 6 characters long" })
      .max(100, { message: "must be lower than 100 characters" }),
    location: z.string().optional(),
    description: z.string().optional(),
    ownerID: z.string(),
    startDateDate: z.date(),
    startDateTime: z.string(),
    endDateDate: z.date().optional(),
    endDateTime: z.number().min(0, {message: 'must not be negative'}).max(2400, {message: 'must be a valid time'}),
    thumbnail: z.string().optional(),
    public: z.boolean(),
  });

  const createEventForm = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      ownerID: user?.id,
    },
  });

  function onSubmit(data: z.infer<typeof createEventSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
      <Form {...createEventForm}>
        <form
          onSubmit={createEventForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={createEventForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title*</FormLabel>
                <FormControl>
                  <Input placeholder="Your epic event title" {...field} />
                </FormControl>
                <FormDescription>What</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createEventForm.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="GRID 113087" {...field} />
                </FormControl>
                <FormDescription>Where</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createEventForm.control}
            name="startDateDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createEventForm.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="bg-background" />
                    <InputOTPSlot index={1} className="bg-background mr-2" />
                    :
                    <InputOTPSlot index={2} className="bg-background ml-2" />
                    <InputOTPSlot index={3} className="bg-background" />
                  </InputOTPGroup>
                </InputOTP>
                </FormControl>
                <FormDescription>Time</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createEventForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your epic event description"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Why, How, How Much</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
  );
}

export default CreateEventForm;
