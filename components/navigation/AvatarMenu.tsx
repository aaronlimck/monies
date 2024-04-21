import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import Link from "next/link";
import SignOutBtn from "../common/SignOutBtn";

export default function AvatarMenu({
  userProps,
  children,
}: {
  userProps: Session | null;
  children: React.ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-full max-w-[200px]"
        align="end"
        alignOffset={2}
      >
        <div className="px-2 py-1.5 text-sm font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {userProps?.user?.name}
            </p>
            <p className="text-xs leading-none text-neutral-400">
              {userProps?.user?.email}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/overview" className="w-full">
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignOutBtn className="w-full cursor-pointer" label={"Log Out"} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
