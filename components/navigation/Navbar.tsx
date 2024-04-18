import { ThemeToggle } from "../themeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import AvatarMenu from "./avatarMenu";

export default function Navbar() {
  return (
    <div className="container flex h-14 items-center justify-between">
      <div className="select-none text-lg font-medium">Monies</div>
      <div className="flex items-center gap-2">
        <ThemeToggle />

        <AvatarMenu>
          <Button
            variant="ghost"
            size="icon"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-xs">CN</AvatarFallback>
            </Avatar>
          </Button>
        </AvatarMenu>
      </div>
    </div>
  );
}
