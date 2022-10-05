import format from 'date-fns/format';

export const formatDate = (date?: string) => {
  if (!date) {
    return '';
  }

  return format(new Date(date), 'dd.MM.yyyy');
};
