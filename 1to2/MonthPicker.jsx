import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import * as utils from './utils';

const MonthPicker = DatePicker.MonthPicker;

export default function MonthPickerAdapter(props) {
  return (
    <MonthPicker
      {...utils.singlePickerPropsAdapter(props, MonthPicker.defaultProps)}
    />
  );
};
