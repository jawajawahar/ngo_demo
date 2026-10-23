export type Frequency = "once" | "monthly";

export interface DonationCurrency {
  code: "USD" | "GBP" | "EUR" | "LKR";
  symbol: string;
  presets: number[];
}

export const donationCurrencies: DonationCurrency[] = [
  { code: "USD", symbol: "$", presets: [25, 50, 100, 250] },
  { code: "GBP", symbol: "£", presets: [20, 40, 80, 200] },
  { code: "EUR", symbol: "€", presets: [25, 50, 100, 250] },
  { code: "LKR", symbol: "Rs", presets: [2500, 5000, 10000, 25000] },
];

export const donationCauses = [
  { value: "most-in-need", label: "Where most needed" },
  { value: "zakat-al-mal", label: "Zakat-al-Mal" },
  { value: "zakat-al-fitr", label: "Zakat-al-Fitr" },
  { value: "sadaqah-jaria", label: "Sadaqah Jaria" },
  { value: "fidyah-kaffarah", label: "Fidyah & Kaffarah" },
  { value: "education", label: "Education" },
  { value: "healthcare", label: "Healthcare" },
  { value: "community-development", label: "Clean Water & Community" },
  { value: "emergency-relief", label: "Emergency Relief" },
  { value: "environment", label: "Environment" },
];

export function getCurrency(code?: string) {
  return donationCurrencies.find((currency) => currency.code === code) ?? donationCurrencies[0];
}
