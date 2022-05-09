import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
// import './styles/app.css';
// import Login from './components/login.jsx';
import Aivision from './components/aivision.jsx';
// import Test from './components/test.jsx';
// import Popup from './components/popup.jsx';
// import MyDatePicker from './components/datepicker.jsx';

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

class App extends Component {
  render() {
    return (
      <div style={{width:'300px'}}>
        {/* <Pie className='pie' data={pieData} />; */}
        {/* <Login/> */}
      <Aivision/>
      {/* <Test/> */}
      {/* <Popup/> */}
      
      </div>
      // <MyDatePicker/>
    );
  }
}

export default App;


