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
};

export const EXPENSE_CATEGORIES: { [key: string]: string } = {
  HOUSING: "Housing",
  UTILITIES: "Utilities",
  TRANSPORTATION: "Transportation",
  FOOD: "Food/Groceries",
  HEALTHCARE: "Healthcare",
  EDUCATION: "Education",
  ENTERTAINMENT: "Entertainment",
  INSURANCE: "Insurance",
  DEBT: "Debt Repayment",
  CLOTHING: "Clothing",
  SAVINGS: "Savings",
  INVESTMENTS: "Investments",
  CHARITY: "Charitable Donations",
  TRAVEL: "Travel",
  CHILDCARE: "Childcare",
  PERSONAL_CARE: "Personal Care",
};

export const INCOME_CATEGORIES_KEYS = Object.keys(INCOME_CATEGORIES) as [
  string,
  ...string[],
];
export const EXPENSE_CATEGORIES_KEYS = Object.keys(EXPENSE_CATEGORIES) as [
  string,
  ...string[],
];
