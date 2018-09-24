import formatDateFns from 'date-fns/format';

export function format(date, format_type) {
  if (window.kalendarLocale) {
    formatDateFns(date, format_type, {locale: window.kalendarLocale});
  } else {
    formatDateFns(date, format_type);
  }
}
