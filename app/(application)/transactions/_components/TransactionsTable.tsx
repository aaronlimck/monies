// COMPONENTS
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TransactionTableActions from "./TransactionTableActions";
import TransactionDetailSheet from "./TransactionDetailSheet";

// LIBRARY
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "@/lib/categories";
import { format } from "date-fns";
import { Transaction as PrismaTransaction } from "@prisma/client";

interface Transaction extends PrismaTransaction {
  accountName: string;
}

export default function TransactionsTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4 md:w-[200px]">Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="w-[100px]">
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.map((transaction: Transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="truncate pl-4 md:w-[200px]">
                  {format(new Date(transaction.date), "MMMM dd, yyyy")}
                </TableCell>
                <TableCell>
                  <div className="flex h-fit items-center">
                    <TooltipProvider>
                      <Tooltip delayDuration={150}>
                        <TooltipTrigger>
                          {transaction.type === "expense" && (
                            <span className="me-3 flex h-2 w-2 rounded-full bg-red-500" />
                          )}

                          {transaction.type === "income" && (
                            <span className="me-3 flex h-2 w-2 rounded-full bg-green-500" />
                          )}
                        </TooltipTrigger>
                        <TooltipContent>
                          {transaction.type === "income" && "Income"}
                          {transaction.type === "expense" && "Expense"}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TransactionDetailSheet transaction={transaction}>
                      <span className="cursor-pointer truncate hover:underline hover:underline-offset-2">
                        {transaction.description}
                      </span>
                    </TransactionDetailSheet>
                  </div>
                </TableCell>
                <TableCell>
                  {transaction.type === "expense" &&
                    EXPENSE_CATEGORIES[transaction.category]}

                  {transaction.type === "income" &&
                    INCOME_CATEGORIES[transaction.category]}
                </TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell className="w-[100px]">
                  <TransactionTableActions transaction={transaction} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

TransactionsTable.Skeleton = function TransactionsTableSkeleton() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4 md:w-[200px]">Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="w-[100px]">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            // Show 6 skeleton rows
            Array.from({ length: 6 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="pl-4 md:w-[200px]">
                  <Skeleton className="h-4 w-36" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-48" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-36" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-36" />
                </TableCell>
                <TableCell className="w-[100px]">
                  <Skeleton className="h-4 w-20" />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
};
