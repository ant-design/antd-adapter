import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import * as utils from './utils';

export default class DatePickerAdapter extends React.Component {
  render() {
    const props = this.props;
    const adaptedProps = utils.singlePickerPropsAdapter(
      utils.commonPickerPropsAdapter(props, DatePicker.defaultProps),
    );
    return <DatePicker {...adaptedProps} />;
  }
}
