/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import TimePicker from 'antd/lib/time-picker';
import TimePickerAdapter from '../TimePicker';

describe('TimePicker', () => {
  it('should support string as value/defaultValue', () => {
    const value = mount(<TimePickerAdapter value="00:00:00" format="HH:mm:ss" />)
            .find(TimePicker).prop('value');
    expect(value.format('HH:mm:ss')).toBe('00:00:00');

    const defaultValue = mount(<TimePickerAdapter defaultValue="00:00:00" format="HH:mm:ss" />)
            .find(TimePicker).prop('defaultValue');
    expect(defaultValue.format('HH:mm:ss')).toBe('00:00:00');
  });

  it('should support Date as value/defaultValue', () => {
    const value = mount(<TimePickerAdapter value={new Date()} />)
            .find(TimePicker).prop('value');
    expect(value.isSame(new Date(), 'second')).toBe(true);

    const defaultValue = mount(<TimePickerAdapter defaultValue={new Date()} />)
            .find(TimePicker).prop('defaultValue');
    expect(defaultValue.isSame(new Date(), 'second')).toBe(true);
  });

  it('should convert args in onChange to GregorianCalendar', () => {
    expect(() => {
      mount(<TimePickerAdapter onChange={value => console.log(value.getTime())} />)
        .find(TimePicker).prop('onChange')(moment());
    }).not.toThrow();
  });
});
