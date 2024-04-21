"use server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { getAllUserAccountsByUserId } from "./accounts";

export async function createTransaction(payload: any) {
  const response = await prisma.transaction.create({
    data: payload,
  });
  if (response) return { success: true };
  return { success: false, error: "Failed to create transaction!" };
}

export async function getAllTransactionsByUserId(
  userId: string,
  accountId?: string,
) {
  // Fetch all user accounts associated with the user ID
  const userAccounts = await getAllUserAccountsByUserId(userId);

  // Determine the account IDs to filter by
  let accountIds;
  if (accountId) {
    // If an accountId is provided, use only that account ID
    accountIds = [accountId];
  } else {
    // Otherwise, use all account IDs associated with the user
    accountIds = userAccounts.map((account) => account.id);
  }

  // Find transactions based on the specified account IDs and include UserAccount name
  const transactions = await prisma.transaction.findMany({
    where: {
      UserAccountId: {
        in: accountIds,
      },
    },
    include: {
      userAccount: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      date: "desc",
    },
  });

  // Rename the nested object userAccount to accountName in each transaction
  const transactionsWithRenamedAccountName = transactions.map(
    (transaction) => ({
      ...transaction,
      accountName: transaction.userAccount.name,
    }),
  );

  return transactionsWithRenamedAccountName;
}

export async function deleteTransactionByTransactionId(
  transactionId: string,
  userId: string,
) {
  const sesssion = await getServerSession(authOptions);
  const session_user_id = sesssion?.user?.id;

  if (session_user_id !== userId) {
    return {
      success: false,
      error: "You are not authorized to delete this transaction!",
    };
  }

  const response = await prisma.transaction.delete({
    where: {
      id: transactionId,
    },
  });

  return { success: Boolean(response) };
}
