export const onlyDigits = (value = '') => value.replace(/\D/gi, '');

export const formatToISODate = (value = '') => {
  if (value.trim() === '') return '';
  const [day, month, year] = value.split('/');

  return `${year}-${month}-${day}`;
};

export const formatNumbersToDate = (value = '') =>
  value
    ? value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{1,2})/, '$1/$2')
      .replace(/(\d{2})(\d{1,2})/, '$1/$2')
      .replace(/(\/\d{4})\d+?$/, '$1')
    : '';

export const getDayOfWeek = (day) => {
  switch (day) {
    case 1:
      return 'Segunda';
    case 2:
      return 'Terça';
    case 3:
      return 'Quarta';
    case 4:
      return 'Quinta';
    case 5:
      return 'Sexta';
    case 6:
      return 'Sábado';
    case 7:
      return 'Domingo';
  }
};
