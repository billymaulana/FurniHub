export function useMoneyMask() {
  function formatMoney(value: number | string): string {
    const number = typeof value === 'string' ? Number.parseInt(value, 10) : value

    if (isNaN(number))
      return '0'

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return {
    formatMoney,
  }
}
