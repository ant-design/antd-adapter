/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import Calendar from 'antd/lib/calendar';
import CalendarAdapter from '../Calendar';

describe('Calendar', () => {
  it('should support string as value/defaultValue', () => {
    const value = mount(<CalendarAdapter value="2016-12-23" />)
            .find(Calendar).prop('value');
    expect(value.isSame('2016-12-23', 'day')).toBe(true);

    const defaultValue = mount(<CalendarAdapter defaultValue="2016-12-23" />)
            .find(Calendar).prop('defaultValue');
    expect(defaultValue.isSame('2016-12-23', 'day')).toBe(true);
  });

  it('should support Date as value/defaultValue', () => {
    const value = mount(<CalendarAdapter value={new Date()} />)
            .find(Calendar).prop('value');
    expect(value.isSame(new Date(), 'day')).toBe(true);

    const defaultValue = mount(<CalendarAdapter defaultValue={new Date()} />)
            .find(Calendar).prop('defaultValue');
    expect(defaultValue.isSame(new Date(), 'day')).toBe(true);
  });

  it('should convert args in dateCellRender to GregorianCalendar', () => {
    expect(() => {
      mount(
        <CalendarAdapter
          dateCellRender={value => <div>Custom date {value.getDayOfMonth()}</div>}
        />,
      );
    }).not.toThrow();
  });

  it('should convert args in monthCellRender to GregorianCalendar', () => {
    expect(() => {
      mount(
        <CalendarAdapter
          mode="year"
          monthCellRender={value => <div>Custom date {value.getMonth()}</div>}
        />,
      );
    }).not.toThrow();
  });

  it('should convert args in onChange to GregorianCalendar', () => {
    expect(() => {
      mount(<CalendarAdapter onPanelChange={value => console.log(value.getTime())} />)
        .find(Calendar).prop('onPanelChange')(moment());
    }).not.toThrow();
  });
});
