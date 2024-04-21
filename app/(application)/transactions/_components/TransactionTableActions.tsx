"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteTransactionByTransactionId } from "@/lib/api/transactions";
import { customRevalidatePath } from "@/utils/customRevalidatePath";
import { Transaction as PrismaTransaction } from "@prisma/client";
import { EllipsisIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import TransactionFormSheet from "./TransactionFormSheet";
import TransactionDetailSheet from "./TransactionDetailSheet";

interface Transaction extends PrismaTransaction {
  accountName: string;
}

export default function TransactionTableActions({
  transaction,
}: {
  transaction: Transaction;
}) {
  const { data: session } = useSession();
  const userId = session?.user?.id;

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
      customRevalidatePath("/transactions");
    } else {
      toast.error("Failed to delete transaction");
    }
  };

  const [showTransactionDetail, setShowTransactionDetail] =
    useState<boolean>(false);
  const [showTransactionForm, setShowTransactionForm] =
    useState<boolean>(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="mr-4 flex items-center justify-end">
            <Button variant={"ghost"} className="h-fit p-1.5">
              <EllipsisIcon size={16} />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[160px] tracking-tight text-primary/80"
        >
          <DropdownMenuItem
            className="w-full cursor-pointer"
            onSelect={() => setShowTransactionDetail(true)}
          >
            View
          </DropdownMenuItem>
          <DropdownMenuItem
            className="w-full cursor-pointer"
            onSelect={() => setShowTransactionForm(true)}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="w-full cursor-pointer text-destructive focus:text-destructive dark:text-red-500 dark:focus:text-red-500"
            onSelect={() => handleDeleteTransaction(transaction.id, userId)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {showTransactionDetail && (
        <TransactionDetailSheet
          transaction={transaction}
          open={showTransactionDetail}
        />
      )}

      {showTransactionForm && (
        <TransactionFormSheet
          title="New Transaction"
          initialData={transaction}
          open={showTransactionForm}
          setOpen={setShowTransactionForm}
        />
      )}
    </>
  );
}
