export default function getCurrencySymbol(currencyCode: string): string {
  // Create a new Intl.NumberFormat object with the given currency code.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  })

  // Format a number to currency using the formatter.
  const formattedNumber = formatter.format(1)

  // Extract the currency symbol from the formatted number.
  const currencySymbol = formattedNumber.slice(0, 1)

  // Return the currency symbol.
  return currencySymbol
}
