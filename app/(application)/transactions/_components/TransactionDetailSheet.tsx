"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { deleteTransactionByTransactionId } from "@/lib/api/transactions";
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "@/lib/categories";
import { customRevalidatePath } from "@/utils/customRevalidatePath";
import { Transaction as PrismaTransaction } from "@prisma/client";
import { format } from "date-fns";
import { EllipsisIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Transaction extends PrismaTransaction {
  accountName: string;
}

interface TransactionSheetProps {
  transaction: Transaction;
  children?: React.ReactNode;
  open?: boolean;
}

export default function TransactionDetailSheet({
  transaction,
  children,
  open = false,
}: TransactionSheetProps) {
  const [showTransactionDetail, setShowTransactionDetail] =
    useState<boolean>(open);

  useEffect(() => {
    setShowTransactionDetail(open);
  }, [open]);

  // Render transaction type badge
  const renderTransactionTypeBadge = (
    type: "expense" | "income",
  ): JSX.Element => {
    const classMap = {
      expense:
        "capitalize me-2 rounded bg-red-100 px-2 py-0.5 text-xs font-normal text-red-800 dark:bg-red-900 dark:text-white",
      income:
        "capitalize me-2 rounded bg-green-100 px-2 py-0.5 text-xs font-normal text-green-800 dark:bg-green-900 dark:text-white",
    };
    return <span className={classMap[type]}>{type}</span>;
  };

  return (
    <Sheet open={showTransactionDetail} onOpenChange={setShowTransactionDetail}>
      {children && <SheetTrigger>{children}</SheetTrigger>}
      <SheetContent className="w-full sm:max-w-none md:max-w-md">
        <div className="space-y-6">
          <div className="mt-4 flex items-center justify-between">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center gap-2">
                <span className="mr-1 font-medium">
                  {transaction.description}
                </span>
                {renderTransactionTypeBadge(transaction.type)}
              </SheetTitle>
            </SheetHeader>

            <TransactionDetailSheet.Action
              transactionId={transaction.id}
              closeSheetCallback={() => setShowTransactionDetail(false)}
            />
          </div>

          <section className="text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Account</span>
                  <span>{transaction.accountName}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span>
                    {format(new Date(transaction.date), "MMMM dd, yyyy")}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span>
                    {transaction.type === "expense" &&
                      EXPENSE_CATEGORIES[transaction.category]}

                    {transaction.type === "income" &&
                      INCOME_CATEGORIES[transaction.category]}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Amount</span>
                  <span>${transaction.amount.toFixed(2)}</span>
                </li>
              </ul>

              <Separator className="my-4" />

              <div>
                <span className="text-muted-foreground">Notes</span>
                <div className="mt-2">{transaction.notes || "No notes"}</div>
              </div>

              <div className="my-4 text-xs text-muted-foreground">
                Created at{" "}
                {format(new Date(transaction.createdAt), "MMMM dd, yyyy")}
              </div>
            </div>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface TransactionDetailSheetActionProps {
  transactionId: string;
  closeSheetCallback: () => void;
}

TransactionDetailSheet.Action = function TransactionDetailSheetAction({
  transactionId,
  closeSheetCallback,
}: TransactionDetailSheetActionProps) {
  const { data: session } = useSession();
  const sessionUserId = session?.user?.id;

  const handleDeleteTransaction = async (
    transactionId: string,
    userId: string,
  ) => {
    const response = await deleteTransactionByTransactionId(
      transactionId,
      userId,
    );
    if (response) {
      toast.success("Transaction deleted successfully");
      closeSheetCallback();
      customRevalidatePath("/transactions");
    } else {
      toast.error("Failed to delete transaction");
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            className="h-fit p-1.5 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <EllipsisIcon size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-destructive focus:text-destructive dark:text-red-500 dark:focus:text-red-500"
            onSelect={() =>
              handleDeleteTransaction(transactionId, sessionUserId)
            }
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
