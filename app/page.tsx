import Navbar from "@/components/navigation/Navbar";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FileUpIcon, HandCoins, SirenIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      <Navbar />

      <section className="flex w-full flex-col items-center gap-4 px-4 py-8 md:mb-8 md:py-12 lg:py-24 lg:pb-20">
        <Link target="_blank" href="https://www.aaronlimck.com/">
          <span className="group flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 py-1 pl-3.5 pr-3 text-xs font-medium text-muted-foreground/80 dark:border-gray-500 dark:bg-accent">
            <span>made by Aaron</span>
            <ArrowRightIcon className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </span>
        </Link>

        <h1 className="max-w-2xl text-balance text-center text-[55px] font-bold leading-[60px] tracking-tight transition-all sm:text-6xl">
          <span className="text-primary dark:bg-gradient-to-r  dark:from-neutral-300 dark:to-stone-400 dark:bg-clip-text dark:text-transparent">
            Manage your finance with ease
          </span>
        </h1>

        <p className="max-w-xl text-balance text-center text-muted-foreground">
          Moolah provides you with the tools to manage your finance with ease.
          It&apos;s simple, fast, and secure.
        </p>

        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Button variant="outline" className="font-normal">
            Join Waitlist
          </Button>
        </div>
      </section>

      <section className="container relative w-full pb-8 md:mb-12 lg:mb-32">
        <div className="flex flex-col-reverse overflow-hidden lg:flex-row">
          <div className="w-full">
            <h2 className="pb-3 text-4xl font-bold text-primary">
              Enough is enough
            </h2>
            <p className="mb-9 text-muted-foreground">
              With Moolah, we equip you with the tools to effortlessly
              consolidate all your transactions. Gain detailed insights into
              your spending habits and receive alerts for any unusual
              transactions.
            </p>

            <dl className="grid grid-cols-1 gap-5">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <HandCoins size={16} />
                  <h3 className="font-medium text-primary/80">
                    Track your expenses and income
                  </h3>
                </div>
                <p className="text-left text-sm text-muted-foreground">
                  Simply add transactions with ease, whether it&apos;s a
                  purchase or income received.
                </p>
              </div>

              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <FileUpIcon size={16} />
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-primary/80">
                      Import Transactions
                    </h3>
                    <span className="h-fit rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <p className="text-left text-sm text-muted-foreground">
                  Effortlessly import CSV transactions to your account with just
                  a few clicks.
                </p>
              </div>

              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <SirenIcon size={16} />
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-primary/80">
                      Alert for Unusual Transactions
                    </h3>
                    <span className="h-fit rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <p className="text-left text-sm text-muted-foreground">
                  Get alerts for any suspicious or unusual transactions.
                </p>
              </div>
            </dl>
          </div>

          <div className="mb-12 w-full lg:mb-0 lg:ml-16">
            <Image
              className="top-0 mx-auto rounded-xl border dark:border-white/10 lg:absolute"
              src="/images/transactions_screenshot.png"
              width={800}
              height={600}
              alt=""
            />
            {/* <div className="rounded-xl border border-white/10"></div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
