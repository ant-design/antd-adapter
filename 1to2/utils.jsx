import moment from 'moment';
import GregorianCalendar from 'gregorian-calendar';

const localeMap = {
  en: 'en_US',
  'zh-cn': 'zh_CN',
};

export function momentToGregorianCalendar(time) {
  if (!time) return;
  const locale = time.locale();
  const calendarLocale = require(`gregorian-calendar/lib/locale/${localeMap[locale]}`);
  const convertedTime = new GregorianCalendar(calendarLocale);
  convertedTime.setTime(time.valueOf());
  return convertedTime;
}

export function oldFormatToNewFormat(format) {
  return format.split('').map(c => {
    if (c === 'y') {
      return 'Y';
    } else if (c === 'd') {
      return 'D';
    }
    return c;
  }).join('');
}

export function singlePickerPropsAdapter(props, defaultProps) {
  const adapted = {...props};
  const format = oldFormatToNewFormat(adapted.format || defaultProps.format);
  if (adapted.format) {
    adapted.format = format;
  }
  if (adapted.value) {
    adapted.value = moment(adapted.value, format);
  }
  if (adapted.defaultValue) {
    adapted.defaultValue = moment(adapted.defaultValue, format);
  }
  if (adapted.disabledDate) {
    const _disabledDate = adapted.disabledDate;
    adapted.disabledDate = function(currentMoment) {
      const currentGregorian = momentToGregorianCalendar(currentMoment);
      return _disabledDate(currentGregorian);
    };
  }
  if (adapted.onChange) {
    const _onChange = adapted.onChange;
    adapted.onChange = function(dateMoment, dateString) {
      const dateGregorian = momentToGregorianCalendar(dateMoment);
      return _onChange(dateGregorian, dateString);
    }
  }
  return adapted;
}
