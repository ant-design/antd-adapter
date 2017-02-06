/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import DatePicker from 'antd/lib/date-picker';
import MonthPickerAdapter from '../MonthPicker';

const MonthPicker = DatePicker.MonthPicker;

describe('MonthPicker', () => {
  it('should convert old format to new format', () => {
    const format = mount(<MonthPickerAdapter format="yyyy-MM" />)
            .find(MonthPicker).prop('format');
    expect(format).toBe('YYYY-MM');
  });

  it('should support string as value/defaultValue', () => {
    const value = mount(<MonthPickerAdapter value="2016-12" />)
            .find(MonthPicker).prop('value');
    expect(value.isSame('2016-12', 'month')).toBe(true);

    const defaultValue = mount(<MonthPickerAdapter defaultValue="2016-12" />)
            .find(MonthPicker).prop('defaultValue');
    expect(defaultValue.isSame('2016-12', 'month')).toBe(true);
  });

  it('should support Date as value/defaultValue', () => {
    const value = mount(<MonthPickerAdapter value={new Date()} />)
            .find(MonthPicker).prop('value');
    expect(value.isSame(new Date(), 'month')).toBe(true);

    const defaultValue = mount(<MonthPickerAdapter defaultValue={new Date()} />)
            .find(MonthPicker).prop('defaultValue');
    expect(defaultValue.isSame(new Date(), 'month')).toBe(true);
  });

  it('should convert args in disabledDate to Date', () => {
    expect(() => {
      mount(
        <MonthPickerAdapter
          open
          disabledDate={current => current && current.getTime() > Date.now()}
        />,
      );
    }).not.toThrow();
  });

  it('should convert args in onChange to Date', () => {
    expect(() => {
      mount(<MonthPickerAdapter onChange={value => console.log(value.getTime())} />)
        .find(MonthPicker).prop('onChange')(moment());
    }).not.toThrow();
  });
});
