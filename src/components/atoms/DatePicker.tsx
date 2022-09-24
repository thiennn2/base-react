import React from 'react';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';

const DatePickerAntd = generatePicker<Date>(dateFnsGenerateConfig);

function DatePicker(props: any) {
  return (
    <DatePickerAntd {...props} />
  );
}

export default DatePicker;
