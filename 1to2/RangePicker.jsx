import React from 'react';
import moment from 'moment';
import DatePicker from 'antd/lib/date-picker';
import * as utils from './utils';

const { RangePicker } = DatePicker;

function propsAdapter(props) {
  const adapted = { ...props };
  const format = props.format;
  if (adapted.value) {
    adapted.value = [
      moment(adapted.value[0], format),
      moment(adapted.value[1], format),
    ];
  }
  if (adapted.defaultValue) {
    adapted.defaultValue = [
      moment(adapted.defaultValue[0], format),
      moment(adapted.defaultValue[1], format),
    ];
  }
  if (adapted.onChange) {
    const usersOnChange = adapted.onChange;
    adapted.onChange = function (dateMoments, dateStrings) {
      const dateGregorians = [
        utils.momentToDate(dateMoments[0]),
        utils.momentToDate(dateMoments[1]),
      ];
      return usersOnChange(dateGregorians, dateStrings);
    };
  }
  return adapted;
}

export default class RangePickerAdapter extends React.Component {
  render() {
    const props = this.props;
    const adaptedProps = propsAdapter(
      utils.commonPickerPropsAdapter(props, RangePicker.defaultProps),
    );
    return <RangePicker {...adaptedProps} />;
  }
}
