import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from 'date-fns/esm/locale'

const MyDatePicker = () => {
    // const [startDate, setStartDate] = useState(null);


    // return (
    //     <div className='date'>
    //         <DatePicker
    //             selected={startDate} 
    //             onChange={date=>setStartDate(date)}
    //             dateFormat="yyyy년 MM월 dd일"
    //             maxDate={new Date()}
    //             locale={ko}
    //             placeholderText="날짜를 입력하세요"
    //             className="red-border"
    //         />       
    //     </div>
    // );
    const nowDate = new Date()
    const lastDate = nowDate.getDate() - 7
    const [startDate, setStartDate] = useState(lastDate);
    const [endDate, setEndDate] = useState(new Date());

    console.log("nowDate : "+nowDate)
    console.log("nowDate.getDate() : " + nowDate.getDate())
    console.log("lastDate : " + lastDate)

    return (
        <>
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
        />
        <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
        />
        </>
    );
}

export default MyDatePicker;