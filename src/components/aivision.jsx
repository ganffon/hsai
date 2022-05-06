import React from 'react';
import MyDatePicker from './datepicker.jsx';
import '../styles/aivision.css';
import Grid from '@toast-ui/react-grid';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
  } from 'chart.js';//Vertical Chart
  import { Bar, Pie, Line } from 'react-chartjs-2'; //Vertical Chart

// import faker from 'faker';


// Vertical Chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        date: [{min:0,max:1000}],
        // data: labels.map(() => datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        date: [{min:0,max:1000}],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

// Pie Chart
const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [18, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
// Line Chart
const LineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const LineLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const LineData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        // data: ({ min: -1000, max: 1000 }),
        data: [10,20,30,30,20,10,50],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        // data: ({ min: -1000, max: 1000 }),
        data: [10,20,30,30,20,10,50],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

const Aivision = (props) => (

    <main>
        <div className="left">
            <nav>
                <section className="nav-box">
                    <div className="nav-up">
                        <label className="nav-label period">조회기간</label>                        
                        <MyDatePicker selectDate={new Date().setDate(new Date().getDate() - 7)}/>
                        <label className="nav-label period">~</label>
                        <MyDatePicker selectDate={new Date()}/>
                    </div>
                    <div className="nav-down">
                        <label className="nav-label">품번</label>
                        <input className="nav-input" type="text" placeholder='품번을 입력하세요'/>
                        <label className="nav-label">LOT</label>
                        <input className="nav-input" type="text" placeholder='LOT를 입력하세요'/>
                    </div>
                </section>

                <button className="nav-button">조회</button>
            </nav>
            <main className="grid"> 
                <Grid
                    data={
                        [
                            {a:"2022-04-01", b:"TSC5340KS", c:"", d:"", e:"", f:"D10094C01", g:"5", h:"2", i:"1", j:"1", k:"-"},
                            {a:"2022-04-01", b:"TSC5340KS", c:"", d:"", e:"", f:"D1023B01-09", g:"35", h:"5", i:"3", j:"2", k:"-"},
                            {a:"2022-04-01", b:"TSC5340KS", c:"", d:"", e:"", f:"D11274B01-07", g:"10", h:"4", i:"1", j:"1", k:"2"}
                        ]
                    }
                    columns={
                        [
                            { name:'a', header:"검사일자", align:"center"},
                            { name:'b', header:"제품명", align:"center"},
                            { name:'c', header:"폭", align:"center"},
                            { name:'d', header:"길이", align:"center"},
                            { name:'e', header:"두께", align:"center"},
                            { name:'f', header:"LOT", align:"center"},
                            { name:'g', header:"비전검사기 검출수량", align:'center'},
                            { name:'h', header:"이물수량(A+B+C)", align:'center'},
                            { name:'i', header:"도전볼뭉침(A)", align:'center'},
                            { name:'j', header:"먼지(B)", align:'center'},
                            { name:'k', header:"기타(C)", align:'center'},

                        ]
                    }
                />
            </main>
        </div>
        <div className="right">
            <div className="right-up">
                <Bar options={options} data={data} />;
            </div>
            <div className="right-down">
                <Pie data={pieData} />;
                <Line options={options} data={data} />;
            </div>
        </div>
    </main>
    );

export default Aivision;