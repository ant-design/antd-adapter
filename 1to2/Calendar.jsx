import React from 'react';
import Calendar from 'antd/lib/calendar';
import * as utils from './utils';

function propsAdapter(props) {
  const adapted = { ...props };
  if (adapted.dateCellRender) {
    const usersDateCellRender = adapted.dateCellRender;
    adapted.dateCellRender = function (dateMoment) {
      const dateGregorian = utils.momentToGregorianCalendar(dateMoment);
      return usersDateCellRender(dateGregorian);
    };
  }
  if (adapted.monthCellRender) {
    const usersMonthCellRender = adapted.monthCellRender;
    adapted.monthCellRender = function (monthMoment) {
      const monthGregorian = utils.momentToGregorianCalendar(monthMoment);
      return usersMonthCellRender(monthGregorian);
    };
  }
  if (adapted.onPanelChange) {
    const usersOnPanelChange = adapted.onPanelChange;
    adapted.onPanelChange = function (dateMoment, mode) {
      const dateGregorian = utils.momentToGregorianCalendar(dateMoment);
      return usersOnPanelChange(dateGregorian, mode);
    };
  }
  return adapted;
}

export default function CalendarAdapter(props) {
  const adaptedProps = propsAdapter(utils.singlePickerPropsAdapter(props));
  return <Calendar {...adaptedProps} />;
}
