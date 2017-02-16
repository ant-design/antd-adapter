import React from 'react';
import TimePicker from 'antd/lib/time-picker';
import * as utils from './utils';

export default class TimePickerAdapter extends React.Component {
  render() {
    const props = this.props;
    const adaptedProps = utils.singlePickerPropsAdapter(props);
    return <TimePicker {...adaptedProps} />;
  }
}
