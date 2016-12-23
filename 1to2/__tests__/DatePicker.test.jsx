/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import DatePicker from 'antd/lib/date-picker';
import DatePickerAdapter from '../DatePicker';

describe('DatePicker', () => {
  it('should convert old format to new format', () => {
    const format = mount(<DatePickerAdapter format="yyyy-MM-dd HH:mm:ss" />)
            .find(DatePicker).prop('format');
    expect(format).toBe('YYYY-MM-DD HH:mm:ss');
  });

  it('should support string as value/defaultValue', () => {
    const value = mount(<DatePickerAdapter value="2016-12-23" />)
            .find(DatePicker).prop('value');
    expect(value.isSame('2016-12-23', 'day')).toBe(true);

    const defaultValue = mount(<DatePickerAdapter defaultValue="2016-12-23" />)
            .find(DatePicker).prop('defaultValue');
    expect(defaultValue.isSame('2016-12-23', 'day')).toBe(true);
  });

  it('should support Date as value/defaultValue', () => {
    const value = mount(<DatePickerAdapter value={new Date()} />)
            .find(DatePicker).prop('value');
    expect(value.isSame(new Date(), 'day')).toBe(true);

    const defaultValue = mount(<DatePickerAdapter defaultValue={new Date()} />)
            .find(DatePicker).prop('defaultValue');
    expect(defaultValue.isSame(new Date(), 'day')).toBe(true);
  });

  it('should convert args in disabledDate to GregorianCalendar', () => {
    expect(() => {
      mount(
        <DatePickerAdapter
          open
          disabledDate={current => current && current.getTime() > Date.now()}
        />,
      );
    }).not.toThrow();
  });

  it('should convert args in onChange to GregorianCalendar', () => {
    expect(() => {
      mount(<DatePickerAdapter onChange={value => console.log(value.getTime())} />)
        .find(DatePicker).prop('onChange')(moment());
    }).not.toThrow();
  });
});
