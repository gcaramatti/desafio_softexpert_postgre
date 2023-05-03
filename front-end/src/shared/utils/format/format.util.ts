class Format {
  parseToFloat(value: string, decimals: number = 2): number {
    const formattedValue = value.replaceAll('.', '').replace(',', '.');

    return Number(parseFloat(formattedValue).toFixed(decimals));
  }

  stringToInteger(value: string): number {
    return Number(value);
  }

  formatDate(dateString: string) {
    const [date, time] = dateString.split(' ');
    const [year, month, day] = date.split('-');
    const [hour, minute] = time.split(':');
    return `${day}/${month}/${year} ${hour}:${minute}`;
  }
}

export default new Format();
