import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";

const MyDatePicker = (props) => {
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY년 MM월 DD일";

  const sendDate = (picDate) => {
    props.setLastDate(picDate[0])
    props.setCurrentDate(picDate[1])
  };

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        onChange={sendDate}
        format={dateFormat}
        defaultValue={[
          moment(props.lastDate, dateFormat),
          moment(props.currentDate, dateFormat),
        ]}
      />
    </Space>
  );
};
export default MyDatePicker;
