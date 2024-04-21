"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AccountForm from "./AccountForm";
import { useState } from "react";

export default function AccountSheet({
  title = "Please include a heading",
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-none md:max-w-md">
        <div className="space-y-6">
          <SheetHeader>
            <SheetTitle className="font-medium">{title}</SheetTitle>
          </SheetHeader>

          <AccountForm closeSheetCallback={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
