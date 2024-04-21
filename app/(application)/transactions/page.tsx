// USER AUTH
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// COMPONENTS
import { EmptyPlaceholder } from "@/components/common/EmptyPlaceholder";
import MainNavTabs from "@/components/navigation/MainNavTabs";
import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";
import AccountSheet from "../accounts/_components/AccountSheet";
import TransactionCreateBtn from "./_components/TransactionCreateBtn";
import TransactionsTable from "./_components/TransactionsTable";

// API
import { getAllUserAccountsByUserId } from "@/lib/api/accounts";
import { getAllTransactionsByUserId } from "@/lib/api/transactions";

// PACKAGES
import { FileUpIcon } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export default async function TransactionsPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  const [userAccounts, userTransactions] = await Promise.all([
    getAllUserAccountsByUserId(userId),
    getAllTransactionsByUserId(userId),
  ]);
  const numberOfAccounts = userAccounts.length;
  const numberOfTransactions = userTransactions.length;

  return (
    <div>
      <Navbar />
      <div className="flex h-12 items-center border-b">
        <MainNavTabs />
      </div>

      <main className="container space-y-6 overflow-hidden py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Transactions</h1>

          <div className="flex items-center gap-2">
            {/* <Button variant={"secondary"} className="flex items-center gap-2">
              <FileUpIcon size={16} />
              <span>Import</span>
            </Button> */}
            <TransactionCreateBtn
              variant={"secondary"}
              disabled={numberOfAccounts === 0}
            />
          </div>
        </div>

        {/* Show no account message if user has no accounts */}
        {numberOfAccounts === 0 && (
          <EmptyPlaceholder>
            <div className="relative h-[160px] w-[160px]">
              <Image
                src="/pig.png"
                fill
                alt=""
                unoptimized
                quality={75}
                priority={false}
              />
            </div>
            <EmptyPlaceholder.Title>No accounts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Oops! Looks like you have not created an account.
            </EmptyPlaceholder.Description>
            <AccountSheet title="New Account">
              <Button variant={"default"}>Create Account</Button>
            </AccountSheet>
          </EmptyPlaceholder>
        )}

        {/* Show no transaction message if user has accounts but no transactions */}
        {numberOfAccounts > 0 && numberOfTransactions === 0 && (
          <EmptyPlaceholder>
            <div className="relative h-[160px] w-[160px]">
              <Image
                src="/transaction.png"
                fill
                alt=""
                unoptimized
                quality={75}
                priority={false}
              />
            </div>
            <EmptyPlaceholder.Title>
              No transactions found
            </EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Oops! Looks like you have not created any transactions.
            </EmptyPlaceholder.Description>
            <TransactionCreateBtn />
          </EmptyPlaceholder>
        )}

        {/* Show transactions table if user has accounts */}
        {numberOfTransactions > 0 && (
          <Suspense fallback={<TransactionsTable.Skeleton />}>
            <TransactionsTable transactions={userTransactions} />
          </Suspense>
        )}
      </main>
    </div>
  );
}
