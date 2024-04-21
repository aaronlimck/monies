import { Button } from "@/components/ui/button";
import AccountSheet from "./AccountSheet";
import { PlusIcon } from "lucide-react";

export default function AccountCreateBtn({
  variant = "default",
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}) {
  return (
    <AccountSheet title="New Account">
      <Button variant={variant} className="flex items-center gap-2">
        <PlusIcon size={16} />
        <span>Add Account</span>
      </Button>
    </AccountSheet>
  );
}
