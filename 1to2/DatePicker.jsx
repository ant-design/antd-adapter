import React from 'react';
import moment from 'moment';
import GregorianCalendar from 'gregorian-calendar';
import DatePicker from 'antd/lib/date-picker';

const localeMap = {
  en: 'en_US',
  'zh-cn': 'zh_CN',
};

function momentToGregorianCalendar(time) {
  if (!time) return;
  const locale = time.locale();
  const convertedTime = new GregorianCalendar(require(`gregorian-calendar/lib/locale/${localeMap[locale]}`));
  convertedTime.setTime(time.valueOf());
  return convertedTime;
}

function oldFormatToNewFormat(format) {
  return format.split('').map(c => {
    if (c === 'y') {
      return 'Y';
    } else if (c === 'd') {
      return 'D';
    }
    return c;
  }).join('');
}

function propsAdapter(props, defaultProps) {
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

export default function DatePickerAdapter(props) {
  return <DatePicker {...propsAdapter(props, DatePicker.defaultProps)} />
}
