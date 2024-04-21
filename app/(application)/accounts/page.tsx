import MainNavTabs from "@/components/navigation/MainNavTabs";
import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AccountSheet from "./_components/AccountSheet";
import AccountsTable from "./_components/AccountTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAllUserAccountsByUserId } from "@/lib/api/accounts";
import Image from "next/image";
import { EmptyPlaceholder } from "@/components/common/EmptyPlaceholder";
import { Suspense } from "react";
import AccountCreateBtn from "./_components/AccountCreateBtn";

export default async function AccountsPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  const userAccounts = await getAllUserAccountsByUserId(userId!);
  const numberOfAccounts = userAccounts.length;

  return (
    <div>
      <Navbar />
      <div className="flex h-12 items-center border-b">
        <MainNavTabs />
      </div>

      <main className="container space-y-6 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Accounts</h1>
          <AccountCreateBtn variant="secondary" />
        </div>

        {/* Show no accounts message if user has no accounts */}
        {numberOfAccounts === 0 && (
          <EmptyPlaceholder>
            <Image src="/pig.png" width={160} height={160} alt="" />
            <EmptyPlaceholder.Title>No accounts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              Oops! Looks like you have not created an account.
            </EmptyPlaceholder.Description>
            <AccountCreateBtn variant="default" />
          </EmptyPlaceholder>
        )}

        {
          // Show accounts table if user has accounts
          numberOfAccounts > 0 && (
            <Suspense fallback={<AccountsTable.Skeleton />}>
              <AccountsTable accounts={userAccounts} />
            </Suspense>
          )
        }
      </main>
    </div>
  );
}
