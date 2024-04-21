"use server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createAccount(payload: any) {
  const { isDefault, userId } = payload;

  // Get all user accounts associated with the userId
  const userAccounts = await getAllUserAccountsByUserId(userId);

  // Check if this is the first account being created
  if (userAccounts.length === 0) {
    // Automatically set the first account as default
    payload.isDefault = true;
  }

  // If the payload is default, check for existing default account
  if (isDefault) {
    const existingDefaultAccount = userAccounts.find(
      (account) => account.isDefault,
    );

    if (existingDefaultAccount) {
      // Return error if default account already exists
      return {
        success: false,
        error: "Default account already set!",
        data: existingDefaultAccount,
      };
    }
  }

  // Create the new account
  const response = await prisma.userAccount.create({ data: payload });
  return { success: Boolean(response) };
}

export async function getAllUserAccountsByUserId(userId: string) {
  return prisma.userAccount.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getUserDefaultAccountByUserId(userId: string) {
  return prisma.userAccount.findFirst({
    where: {
      userId,
      isDefault: true,
    },
  });
}

export async function deleteUserAccountByAccountId(
  accountId: string,
  userId: string,
) {
  // Get the current session
  const session = await getServerSession(authOptions);

  // Validate the user is authorized to delete the account
  if (session?.user?.id !== userId) {
    return {
      success: false,
      error: "You are not authorized to delete this account!",
    };
  }

  // Attempt to delete the account
  const response = await prisma.userAccount.delete({
    where: {
      id: accountId,
    },
  });

  // Return the success status directly based on the presence of response
  return { success: Boolean(response) };
}
