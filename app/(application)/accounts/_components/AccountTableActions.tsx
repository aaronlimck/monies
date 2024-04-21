"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteAccountAlertDialog from "./DeleteAccountAlertDialog";
import { useState } from "react";

export default function AccountTableActions({
  children,
  accountId,
}: {
  children: React.ReactNode;
  accountId: string;
}) {
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[160px] tracking-tight text-primary/80"
        >
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer text-destructive focus:text-destructive dark:text-red-500 dark:focus:text-red-500"
            onSelect={() => {
              setShowDeleteAlert(true);
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteAccountAlertDialog
        accountId={accountId}
        open={showDeleteAlert}
        setOpen={setShowDeleteAlert}
      />
    </>
  );
}
