"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

interface EventData {
  title: string;
  house: string;
  startTime: string;
  endTime: string;
  thumbnail?: string;
  description?: string;
}

export default function EventForm() {
  const eventSchema = z.object({
    title: z
      .string()
      .min(4, { message: "must be 4 or more characters long" })
      .max(40, { message: "must be 40 or lower characters long" }),
    house: z.string().uuid({ message: "must be a valid house id" }),
    startTime: z
      .date()
      .min(new Date(), { message: "start time must not be in past" }),
    endTime: z
      .date()
      .min(new Date(), { message: "end time must not be in past" }),
    thumbnail: z.string().url({ message: "must be a valid url" }).optional(),
    description: z
      .string()
      .max(300, { message: "must be 300 or lower characters long" })
      .optional(),
  });

  const createEventForm = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      startTime: new Date(),
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <Form {...createEventForm}>
      <form
        onSubmit={createEventForm.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={createEventForm.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Event Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createEventForm.control}
          name={'house'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>House</FormLabel>
              <FormControl>
                <Input placeholder="house id" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createEventForm.control}
          name={'startTime'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>startTime</FormLabel>
              <FormControl>
              <h1>todo - data time picker</h1>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createEventForm.control}
          name={'endTime'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>endTime</FormLabel>
              <FormControl>
                <h1>todo - data time picker</h1>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createEventForm.control}
          name='thumbnail'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail</FormLabel>
              <FormControl>
                <Input placeholder="thumbnail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createEventForm.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
