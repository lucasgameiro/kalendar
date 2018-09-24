import format from 'date-fns/format';

export function format(date, format_type) {
  if (window.kalendarLocale) {
    format(date, format_type, {locale: window.kalendarLocale});
  } else {
    format(date, format_type);
  }
}

module.exports = format;