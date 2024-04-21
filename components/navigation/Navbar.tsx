import { ThemeToggle } from "../themeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import AvatarMenu from "./AvatarMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const userImage = session?.user?.image;
  const userName = session?.user?.name;
  const userAvatarName = userName?.substring(0, 1);

  return (
    <div className="container flex h-14 items-center justify-between">
      <div className="select-none text-lg font-medium">
        <Link href="/">Moolah</Link>
      </div>

      {!session && (
        <div className="flex items-center gap-4">
          <Link
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "focus-visible:ring-0 focus-visible:ring-offset-0",
            )}
            target="_blank"
            href="https://github.com/aaronlimck/moolah"
          >
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>

          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "px-0 text-primary/80 hover:bg-transparent",
            )}
          >
            Sign In
          </Link>
        </div>
      )}

      {session && (
        <div className="flex items-center gap-2">
          <Link
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "focus-visible:ring-0 focus-visible:ring-offset-0",
            )}
            target="_blank"
            href="https://github.com/aaronlimck/moolah"
          >
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
          <ThemeToggle />
          <AvatarMenu userProps={session}>
            <Button
              variant="ghost"
              size="icon"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Avatar className="flex h-6 w-6 items-center justify-center">
                <AvatarImage src={userImage || undefined} />
                <AvatarFallback className="text-xs">
                  {userAvatarName}
                </AvatarFallback>
              </Avatar>
            </Button>
          </AvatarMenu>
        </div>
      )}
    </div>
  );
}
