import { EmptyPlaceholder } from "@/components/common/EmptyPlaceholder";
import MainNavTabs from "@/components/navigation/MainNavTabs";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";

export default function AccountsPage() {
  return (
    <div>
      <Navbar />
      <div className="flex h-12 items-center border-b">
        <MainNavTabs />
      </div>

      <main className="container space-y-6 py-6">
        <h1 className="text-2xl font-semibold">Overview</h1>

        <EmptyPlaceholder>
          <Image
            src="/images/maintenance.png"
            width={160}
            height={160}
            alt="maintenance"
            unoptimized
          />
          <EmptyPlaceholder.Title>Overview Coming Soon</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            This feature is not available yet. Stay tuned!
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      </main>
    </div>
  );
}
