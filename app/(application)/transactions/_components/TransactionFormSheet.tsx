"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import TransactionForm from "./TransactionForm";
import { Transaction } from "@prisma/client";

interface TransactionSheetProps {
  title: string;
  initialData?: Transaction | undefined;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function TransactionFormSheet({
  title = "Please include a heading",
  initialData,
  open,
  setOpen,
}: TransactionSheetProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-none md:max-w-md">
        <div className="space-y-6">
          <SheetHeader className="text-left">
            <SheetTitle className="font-medium">{title}</SheetTitle>
          </SheetHeader>

          <TransactionForm
            initialData={initialData}
            closeSheetCallback={() => setOpen(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
