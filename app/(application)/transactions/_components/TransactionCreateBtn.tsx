"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import TransactionFormSheet from "./TransactionFormSheet";

export default function TransactionCreateBtn({
  variant = "default",
  disabled = false,
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  disabled?: boolean;
}) {
  const [showSheet, setShowSheet] = useState<boolean>(false);

  return (
    <>
      <Button
        variant={variant}
        className="flex items-center gap-2"
        onClick={() => setShowSheet(true)}
        disabled={disabled}
      >
        <PlusIcon size={16} />
        <span>New Transaction</span>
      </Button>

      <TransactionFormSheet
        title="New Transaction"
        open={showSheet}
        setOpen={setShowSheet}
      />
    </>
  );
}
