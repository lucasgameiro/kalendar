import * as formatDateFns from 'date-fns/format';

export function format(date, format_type) {
  if (window.kalendarLocale) {
    return formatDateFns(date, format_type, {locale: window.kalendarLocale});
  } else {
    return formatDateFns(date, format_type);
  }
}
