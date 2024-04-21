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
          <span className="bg-gradient-to-r from-stone-500 to-stone-500 bg-clip-text text-transparent dark:from-neutral-300 dark:to-stone-400">
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

      {/* <section className="container w-full pb-8 md:mb-12 lg:mb-20">
        <div className="mx-auto flex max-w-xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20">
          <div className="w-full">
            <h2 className="pb-3 text-4xl font-bold text-primary/80">
              Reduce Alert Noise
            </h2>
            <p className="mb-9 text-muted-foreground">
              Reduce the noise in your Slack workspace by consolidating all your
              event data into one place, filtering alerts by relevance, and
              customizing your alert settings to suit your needs.
            </p>

            <dl className="grid grid-cols-1 gap-5">
              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <HandCoins size={16} />
                  <h3 className="font-medium text-primary/80">
                    Track your expenses
                  </h3>
                </div>
                <p className="text-left text-sm text-muted-foreground">
                  Get all your event data in one place to reduce alert noise
                </p>
              </div>

              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <FileUpIcon size={16} />
                  <h3 className="font-medium text-primary/80">
                    Import Transactions
                  </h3>
                </div>
                <p className="text-left text-sm text-muted-foreground">
                  Get all your event data in one place to reduce alert noise
                </p>
              </div>

              <div>
                <div className="mb-1 flex items-center space-x-2">
                  <SirenIcon size={16} />
                  <h3 className="font-medium text-primary/80">
                    Track your expenses
                  </h3>
                </div>
                <p className="text-left text-sm text-muted-foreground">
                  Get all your event data in one place to reduce alert noise
                </p>
              </div>
            </dl>
          </div>

          <div className="w-full">
            <div className="h-[600px] rounded-xl border border-white/10"></div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
