"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// FORM COMPONENTS
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { createAccount } from "@/lib/api/accounts";
import { useSession } from "next-auth/react";
import { customRevalidatePath } from "@/utils/customRevalidatePath";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  name: z.string().min(1),
  type: z.enum(["checking", "savings"]),
  isDefault: z.boolean().default(false),
});

const accountTypes = [
  { label: "Checking", value: "checking" },
  { label: "Savings", value: "savings" },
];

export default function AccountForm({
  closeSheetCallback,
}: {
  closeSheetCallback: () => void;
}) {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const userName = session?.user?.name;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "savings",
      isDefault: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // alert(JSON.stringify(values, null, 2));
    const response = await createAccount({
      name: values.name,
      accountType: values.type,
      isDefault: values.isDefault,
      userId,
    });
    if (response.success) {
      customRevalidatePath(`/accounts`);
      toast.success("Account created successfully!");
      closeSheetCallback();
    } else if (response.error === "Default account already set!") {
      toast.error("Default account already set!");
    } else {
      toast.error("Account creation failed!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-primary">Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an account type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {accountTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-primary">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`${userName !== null ? `${userName}'s` : "My"} Savings`}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Set a name for your account to track transactions.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-3">
            <FormField
              control={form.control}
              name="isDefault"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Set as Default Account</FormLabel>
                    <FormDescription>
                      All transactions will be added to your default account.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" variant={"secondary"} className="w-full">
          Create account
        </Button>
      </form>
    </Form>
  );
}
