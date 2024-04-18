import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TransactionForm from "./TransactionForm";

export default function TransactionSheet({
  title = "Please include a heading",
  children,
  viewTransaction = true,
}: {
  title: string;
  children: React.ReactNode;
  viewTransaction: boolean;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-none md:max-w-md">
        <div className="space-y-6">
          <SheetHeader>
            <SheetTitle className="font-medium">{title}</SheetTitle>
          </SheetHeader>
          {!viewTransaction && <TransactionForm />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
