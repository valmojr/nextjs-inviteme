"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GitHubLogo from "../../../../../public/GithubLogo";
import DiscordLogo from "../../../../../public/DiscordLogo";

export default function Page() {
  const registerSchema = z.object({
    username: z
      .string()
      .min(6, { message: "must be at least 6 characters long" })
      .max(30, { message: "must be 30 characters long limited" }),
    email: z.string().email({ message: "must be a valid email" }),
    password: z
      .string()
      .min(6, { message: "must be a least 6 characters long" })
      .max(40, { message: "password is too large" }),
    confirmPassword: z.string(),
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className="w-full flex flex-col flex-nowrap gap-2">
      <Form {...registerForm}>
        <FormField
          control={registerForm.control}
          name="username"
          render={(field) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  className="w-full h-10 rounded-md p-4"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="email"
          render={(field) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="your@email.com"
                  type="email"
                  {...field}
                  className="w-full h-10 rounded-md p-4"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="password"
          render={(field) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className="w-full h-10 rounded-md p-4"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="confirmPassword"
          render={(field) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
                  {...field}
                  className="w-full h-10 rounded-md p-4"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-3" type="submit">
          Register
        </Button>
      </Form>
      <h1>or you can...</h1>
      <Button className="w-full gap-2">Register with GitHub<GitHubLogo/></Button>
      <Button className="w-full gap-2 bg-blurple dark:text-white hover:bg-blurple">Register with Discord<DiscordLogo/></Button>
    </div>
  );
}
