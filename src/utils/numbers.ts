export const currencyFormatter = ({
  value,
  numberFormat = "id-ID",
  currency = "IDR",
}: {
  value: number;
  numberFormat?: string;
  currency?: string;
}) => {
  return new Intl.NumberFormat(numberFormat, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(value);
};
