import ContinueWithSocials from "../_components/ContinueWithSocials";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="container flex h-dvh items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="pb-4 text-3xl font-medium">Login to moolah.</h1>
        <p className="pb-1 text-2xl font-medium text-[#878787]">
          Automate financial tasks, <br /> stay organized, and make
          <br />
          informed decisions
          <br /> effortlessly.
        </p>
        <div className="my-6">
          <ContinueWithSocials callbackUrl="" />
        </div>
      </div>
    </div>
  );
}
