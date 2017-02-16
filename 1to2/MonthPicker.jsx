import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import * as utils from './utils';

const MonthPicker = DatePicker.MonthPicker;

export default class MonthPickerAdapter extends React.Component {
  render() {
    const props = this.props;
    const adaptedProps = utils.singlePickerPropsAdapter(
      utils.commonPickerPropsAdapter(props, MonthPicker.defaultProps),
    );
    return <MonthPicker {...adaptedProps} />;
  }
}
