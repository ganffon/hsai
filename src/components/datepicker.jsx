import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from 'date-fns/esm/locale'

const MyDatePicker = (props) => {

    const [startDate, setStartDate] = useState(props.selectDate);


  return (
        <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            locale={ko}
            selected={startDate}            
            onChange={(date) => setStartDate(date)}
            maxDate = {new Date()}
        />
  );
    
};
export default MyDatePicker;