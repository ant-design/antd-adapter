import React from 'react';
import TimePicker from 'antd/lib/time-picker';
import * as utils from './utils';

export default function TimePickerAdapter(props) {
  const adaptedProps = utils.singlePickerPropsAdapter(props);
  return <TimePicker {...adaptedProps} />;
}
