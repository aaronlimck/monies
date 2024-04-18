import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import TransactionsTable from "./_components/TransactionsTable";
import TransactionSheet from "./_components/TransactionSheet";
import MainNavTabs from "@/components/navigation/MainNavTabs";

export default function TransactionsPage() {
  return (
    <div>
      <Navbar />
      <div className="flex h-12 items-center border-b">
        <MainNavTabs />
      </div>

      <main className="container space-y-6 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <TransactionSheet title="New Transaction" viewTransaction={false}>
            <Button variant={"secondary"} className="flex items-center gap-2">
              <PlusIcon size={16} />
              <span>New Transaction</span>
            </Button>
          </TransactionSheet>
        </div>

        <TransactionsTable />
      </main>
    </div>
  );
}
