"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteUserAccountByAccountId } from "@/lib/api/accounts";
import { customRevalidatePath } from "@/utils/customRevalidatePath";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function DeleteAccountAlertDialog({
  accountId,
  open,
  setOpen,
}: {
  accountId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const handleDeleteAccount = async () => {
    const response = await deleteUserAccountByAccountId(accountId, userId);
    if (response) {
      toast.success("Account deleted successfully");
      customRevalidatePath("/accounts");
    } else {
      toast.error("Failed to delete account");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure your want to delete this account?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and transactions from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAccount}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
