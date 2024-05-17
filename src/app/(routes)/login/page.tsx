"use client";

import Input from "@/app/ui/util/Forms/Input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GitHubLogo from "../../../../public/GithubLogo";
import DiscordLogo from "../../../../public/DiscordLogo";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const loginSchema = z.object({
    usernameOrEmail: z.string(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
      <Form {...form}>
        <FormField
          control={form.control}
          name="usernameOrEmail"
          render={(field) => (
            <FormItem className="w-full">
              <FormLabel>Username or Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username or Email"
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
          control={form.control}
          name="password"
          render={(field) => (
            <FormItem className="w-full">
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
        <Button className="w-full" type="submit">
          Login
        </Button>
      </Form>
      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => router.push("/login/register")}
      >
        Register
      </Button>
      <Button
        variant={"ghost"}
        className="w-full"
        onClick={() => router.push("/login/register")}
      >
        Forgot Password
      </Button>
      <div className="w-full flex flex-row justify-start">
        <h3 className="">or you can...</h3>
      </div>
      <Button className="w-full gap-2">
        Login with GitHub
        <GitHubLogo />
      </Button>
      <a href={process.env.NEXT_PUBLIC_DISCORD_OAUTH2_URL} className="w-full">
        <Button className="w-full gap-2 bg-blurple hover:bg-blue-500 dark:text-white">
          Login with Discord
          <DiscordLogo />
        </Button>
      </a>
    </>
  );
}
