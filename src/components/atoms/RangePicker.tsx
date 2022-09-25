import React from 'react';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);
const { RangePicker: RangePickerAntd } = DatePicker;

function RangePicker(props: any) {
  return (
    <RangePickerAntd  {...props} />
  );
}
export default RangePicker;
