export default function convertDate(rawDate: number): string {
  if (!rawDate) return 'Дата не указана';
  
  const date = new Date(rawDate * 1000);
  return new Intl.DateTimeFormat('ru-RU').format(date);
}