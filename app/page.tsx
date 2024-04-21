import Navbar from "@/components/navigation/Navbar";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex h-dvh flex-col overflow-hidden">
      <Navbar />
      <div className="pb-16 pt-32 md:pb-32 md:pt-52">
        <section className="flex w-full flex-col items-center gap-4 px-4">
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
        </section>
      </div>
    </main>
  );
}
