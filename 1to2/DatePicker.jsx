import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import * as utils from './utils';

export default function DatePickerAdapter(props) {
  return (
    <DatePicker
      {...utils.singlePickerPropsAdapter(props, DatePicker.defaultProps)}
    />
  );
};
