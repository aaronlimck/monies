import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { EllipsisIcon } from "lucide-react";
import AccountTableActions from "./AccountTableActions";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAccount } from "@prisma/client";

export default function AccountsTable({
  accounts,
}: {
  accounts: UserAccount[];
}) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="w-[100px]">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {accounts.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="py-6 text-center">
                No accounts found.
              </TableCell>
            </TableRow>
          )}

          {accounts.length > 0 &&
            accounts.map((account: any) => (
              <TableRow key={account.id}>
                <TableCell className="pl-4">
                  <div>
                    <span>{account.name}</span>
                    {account.isDefault && (
                      <span className="ml-2 text-nowrap rounded-full bg-secondary px-2.5 py-1 text-xs text-primary/50">
                        Default
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="capitalize">
                  {account.accountType}
                </TableCell>
                <TableCell>
                  {format(new Date(account.createdAt), " MMMM dd, yyyy")}
                </TableCell>
                <TableCell className="w-[100px]">
                  <AccountTableActions accountId={account.id}>
                    <div className="mr-4 flex items-center justify-end">
                      <Button variant="ghost" className="h-fit p-1.5">
                        <EllipsisIcon size={16} />
                      </Button>
                    </div>
                  </AccountTableActions>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

AccountsTable.Skeleton = function TransactionsTableSkeleton() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-4">Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="w-[100px]">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 6 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="pl-4">
                <Skeleton className="h-4 w-36" />
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
