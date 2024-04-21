export const INCOME_CATEGORIES: { [key: string]: string } = {
  SALARY: "Salary/Wages",
  BUSINESS: "Business Income",
  INVESTMENT: "Investment Income",
  RENTAL: "Rental Income",
  ROYALTY: "Royalty Income",
  BENEFITS: "Government Benefits",
  FREELANCE: "Freelance/Contract Income",
  GIFT: "Gift/Inheritance",
  OTHER: "Other Income",
  CASHBACK: "Cashback",
  CASH_DEPOSIT: "Cash Deposit",
};

export const INCOME_CATEGORIES_KEYS = Object.keys(INCOME_CATEGORIES) as [
  string,
  ...string[],
];

export const EXPENSE_CATEGORIES: { [key: string]: string } = {
  ENTERTAINMENT: "Entertainment",
  FOOD: "Food",
  GIFT: "Gift",
  HOLIDAY: "Holiday",
  INVESTMENT: "Investment",
  OTHERS: "Others",
  PERSONAL_CARE: "Personal Care",
  SAVING: "Saving",
  SHOPPING: "Shopping",
  TRANSPORT: "Transport",
  UNCATEGORIZED: "Uncategorized",
  UTILITIES: "Utilities",
};

export const EXPENSE_CATEGORIES_KEYS = Object.keys(EXPENSE_CATEGORIES) as [
  string,
  ...string[],
];
