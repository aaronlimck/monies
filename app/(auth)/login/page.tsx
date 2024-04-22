import { Separator } from "@/components/ui/separator";
import ContinueWithSocials from "../_components/ContinueWithSocials";
import LoginForm from "./loginForm";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const callbackUrl =
    typeof searchParams.callbackUrl === "string"
      ? searchParams.callbackUrl
      : DEFAULT_LOGIN_REDIRECT;

  console.log(callbackUrl);

  return (
    <div className="container flex h-dvh items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="pb-8 text-3xl font-medium">Login to moolah.</h1>
        <div className="space-y-8">
          <LoginForm callbackUrl={callbackUrl as string} />
          <Separator />
          <ContinueWithSocials callbackUrl="" />
        </div>
      </div>
    </div>
  );
}
