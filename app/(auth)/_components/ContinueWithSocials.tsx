"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "./GoogleIcon";

export default function ContinueWithSocials({
  callbackUrl,
}: {
  callbackUrl: string;
}) {
  const handleClick = (provider: "google") => {
    signIn(provider, { callbackUrl: callbackUrl });
  };

  return (
    <Button
      variant={"outline"}
      className="h-11 w-full space-x-2 font-medium"
      onClick={() => handleClick("google")}
    >
      <GoogleIcon className="h-4 w-4" />
      <span>Continue with Google</span>
    </Button>
  );
}
