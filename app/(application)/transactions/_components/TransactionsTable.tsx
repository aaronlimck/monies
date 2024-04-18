import { Button } from "@/components/ui/button";
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
import { EllipsisIcon } from "lucide-react";
import TransactionSheet from "./TransactionSheet";

const mockTransactions = [
  {
    id: "1",
    type: "expense",
    date: "April 18, 2024",
    description: "Netflix",
    category: "Entertainment",
    amount: "$9.90",
  },
  {
    id: "2",
    type: "expense",
    date: "April 18, 2024",
    description: "Telecom Bill",
    category: "Utilities",
    amount: "$18.00",
  },
  {
    id: "3",
    type: "expense",
    date: "April 18, 2024",
    description: "McDonalds",
    category: "Food & Drinks",
    amount: "$10.90",
  },
  {
    id: "4",
    type: "expense",
    date: "April 18, 2024",
    description: "Transfer to Savings",
    category: "Transfer",
    amount: "$250.00",
  },
  {
    id: "5",
    type: "income",
    date: "April 18, 2024",
    description: "Salary",
    category: "Income",
    amount: "$1,500.00",
  },
];

export default function TransactionsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-3 md:w-[200px]">Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="sr-only">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {mockTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="pl-3 md:w-[200px]">
                {transaction.date}
              </TableCell>
              <TableCell>
                <div className="flex items-center">
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
                        {transaction.type === "income" ? "Income" : "Expense"}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TransactionSheet
                    title={transaction.description}
                    viewTransaction={true}
                  >
                    <span className="cursor-pointer hover:underline hover:underline-offset-2">
                      {transaction.description}
                    </span>
                  </TransactionSheet>
                </div>
              </TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <Button variant={"ghost"} className="h-fit p-1.5">
                  <EllipsisIcon size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
