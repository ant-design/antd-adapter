/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import DatePicker from 'antd/lib/date-picker';
import RangePickerAdapter from '../RangePicker';

const RangePicker = DatePicker.RangePicker;

describe('RangePicker', () => {
  it('should convert old format to new format', () => {
    const format = mount(<RangePickerAdapter format="yyyy-MM-dd HH:mm:ss" />)
            .find(RangePicker).prop('format');
    expect(format).toBe('YYYY-MM-DD HH:mm:ss');
  });

  it('should support string as value/defaultValue', () => {
    const value = mount(
      <RangePickerAdapter
        value={['2016-12-23', '2016-12-25']}
      />,
    ).find(RangePicker).prop('value');
    expect(value[0].isSame('2016-12-23', 'day')).toBe(true);
    expect(value[1].isSame('2016-12-25', 'day')).toBe(true);

    const defaultValue = mount(
      <RangePickerAdapter
        defaultValue={['2016-12-23', '2016-12-25']}
      />,
    ).find(RangePicker).prop('defaultValue');
    expect(defaultValue[0].isSame('2016-12-23', 'day')).toBe(true);
    expect(defaultValue[1].isSame('2016-12-25', 'day')).toBe(true);
  });

  it('should support Date as value/defaultValue', () => {
    const value = mount(<RangePickerAdapter value={[new Date(), new Date()]} />)
            .find(RangePicker).prop('value');
    expect(value[0].isSame(new Date(), 'day')).toBe(true);
    expect(value[1].isSame(new Date(), 'day')).toBe(true);

    const defaultValue = mount(
      <RangePickerAdapter
        defaultValue={[new Date(), new Date()]}
      />,
    ).find(RangePicker).prop('defaultValue');
    expect(defaultValue[0].isSame(new Date(), 'day')).toBe(true);
    expect(defaultValue[1].isSame(new Date(), 'day')).toBe(true);
  });

  it('should convert args in disabledDate to Date', () => {
    expect(() => {
      mount(
        <RangePickerAdapter
          open
          disabledDate={current => current && current.getTime() > Date.now()}
        />,
      );
    }).not.toThrow();
  });

  it('should convert args in onChange to Date', () => {
    expect(() => {
      mount(
        <RangePickerAdapter
          onChange={value => console.log(value[0].getTime(), value[1].getTime())}
        />,
      ).find(RangePicker).prop('onChange')([moment(), moment()]);
    }).not.toThrow();
  });
});
