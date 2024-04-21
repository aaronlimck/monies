"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

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
      className="w-full space-x-2 font-medium"
      onClick={() => handleClick("google")}
    >
      <span>Continue with Google</span>
    </Button>
  );
}
