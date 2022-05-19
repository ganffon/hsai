import React, { useEffect, useRef, useState } from "react";
import MyDatePicker from "./datepicker.jsx";
import "../styles/aivision.css";
import Grid from "@toast-ui/react-grid";
import 'tui-grid/dist/tui-grid.css';
import TuiGrid from "tui-grid";
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
  LineElement,
} from "chart.js"; //Vertical Chart
import { Bar, Pie, Line } from "react-chartjs-2"; //Vertical Chart
import { Modal } from "antd";
import "antd/dist/antd.css";
import faker from 'faker';
import axios from 'axios';
import { getDate } from "date-fns";

TuiGrid.applyTheme("striped", {
  // 헤더부분 전체
  cell: {
    normal: {
      border: "rgba(128, 128, 128, 0.459);",
      showVerticalBorder: true,
      showHorizontalBorder: true,
    },
    // 그리드 헤더부분
    header: {
      background: "rgba(128, 128, 128, 0.459);",
      border: "rgba(128, 128, 128, 0.459);",
      showVerticalBorder: true,
      showHorizontalBorder: true,
      height: 500
    },

    //NO.
    rowHeader: {
      background: "rgba(128, 128, 128, 0.459);",
      border: "rgba(128, 128, 128, 0.459);",
      showVerticalBorder: true,
      showHorizontalBorder: true,
    },

    evenRow: {
      background: "#e0e0e0",
    },

    selectedHeader: {
      background: "#e0e0e0",
    },
  },
});

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
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// Pie Chart
const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [18, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
// Line Chart
const LineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const LineLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const LineData = {
  labels: LineLabels,
  datasets: [
    {
      label: "Dataset 1",
      // data: ({ min: -1000, max: 1000 }),
      // data: [10, 20, 30, 30, 20, 10, 50],
      data: LineLabels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      // data: ({ min: -1000, max: 1000 }),
      // data: [10, 20, 30, 30, 20, 10, 50],
      data: LineLabels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

  // Main Grid 고정 칼럼
  const mainFixedColumns = [
                            { name: "a", header: "검사일자", width: "100", align: "center" },
                            { name: "b", header: "제품명", align: "center" },
                            { name: "c", header: "폭", width: "70", align: "center" },
                            { name: "d", header: "길이", width: "70", align: "center" },
                            { name: "e", header: "두께", width: "70", align: "center" },
                            { name: "f", header: "LOT", width: "100",align: "center" },
                            { name: "g", header: "비전검사기 검출수량", align: "center" },
                            { name: "h", header: "AI예측\n이물수량(A+B+C)", align: "center" },]


  const Aivision = (props) => {
    
  const [isModalVisible, setIsModalVisible] = useState(false); //Modal Form Visible Boolean

  const [lastDate,setLastDate] = useState(new Date(new Date().setDate(new Date().getDate()-7))); //기간시작날짜
  const [currentDate,setCurrentDate] = useState(new Date()); //기간종료날짜

  const [pumbunInput, setPumbunInput] = useState(""); // 품번 inputBox
  const [lotInput, setLotInput] = useState(""); // LOT inputBox

  const pumbunInputChange = (e) => {
    setPumbunInput(e.target.value)
  }
  const lotInputChange = (e) => {
    setLotInput(e.target.value)
  }
  
  const [mainGrid, setMainGrid] = useState([]); // Main Grid Data State
  const [mainGridHeaders, setMainGridHeaders] = useState(mainFixedColumns); // Main Grid Headers State    
  
  // Main 에서 조회 Btn 클릭 시 호출
  const ClickBtn = async () => {
    const res2 = [
      { name: "i", header: "Test1", align: "center" },
      { name: "j", header: "Test2", align: "center" },
      { name: "k", header: "Test3", align: "center" },
    ]

    await setMainGridHeaders([...mainFixedColumns,...res2])

    console.log(new Date(lastDate))
    console.log(new Date(currentDate))
    console.log(pumbunInput)
    console.log(lotInput)

    // let res = await axios.get("url");
    // if (!res) {
    //   setMainGridHeaders(mainGridHeaders)
    // } else {
    //   setMainGridHeaders(res)
    // }

    // let res2 = await axios.get("url");
    
    // if (!res) {
    //   setMainGrid(mainGrid)
    // } else {
    //   setMainGrid(mainColumns + res2)
    // }
  }
  
  const [popupGrid,setPopupGrid] = useState([]); // Popup Grid Data State
  const [popupGridHeaders, setPopupGridHeaders] = useState([]); // Popup Grid Headers State

  // Main 에서 Dbl_Click시 Popup 호출
  const showModal = async () => {
    // let res = await axios.get("url");
    // if (!res) {
    //   setPopupGridHeaders(popupGridHeaders)
    // } else {
    //   setPopupGridHeaders(res)
    // }

    // let res2 = await axios.get("url");
    // if (!res) {
    //   setPopupGrid(popupGrid)
    // } else {
    //   setPopupGrid(res2)
    //   setIsModalVisible(true);
    // }    
    setIsModalVisible(true);
  };

  // Popup 에서 종료
  const handleCancel = () => setIsModalVisible(false);


 //Popup 에서 그리드 행 클릭시 우측 input 박스로 데이터 출력
  const formRef = useRef();

  const onClickPopup = (e) => {
    const test = e.instance.getRow(e.rowKey)
    
    Object.keys(test).forEach(key => formRef.current[key].value = test[key]);

    console.log(test)
  }
  //Popup 에서 저장 버튼 클릭시 호출
  const [selectValue, setSelectValue] = useState("");
  const onSavePopup = (e) => {
    e.preventDefault()
    console.log(selectValue)
  }

  // Popup 에서 select 변경 시 호출
  const onChangeSelect = (e) => {
    console.log(e.target.value)
    setSelectValue(e.target.value)
  }

  const popupTestData = [
    {
      a: "2022-04-01",
      b: "TSC5340KS",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "D10094C01",
      h: "",
      i: "양품",
      j: "-",
      k: "",
      l: "99.99",
      m: "",
    },
    {
      a: "2022-04-01",
      b: "TSC5340KS",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "D1023B01-09",
      h: "",
      i: "이물",
      j: "-",
      k: "",
      l: "99.99",
      m: "",
    },
    {
      a: "2022-04-01",
      b: "TSC5340KS",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "D11274B01-07",
      h: "",
      i: "이물",
      j: "-",
      k: "",
      l: "97.07",
      m: "",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-04-01",
    },
    {
      a: "2022-05",
    },
    {
      a: "2022-05",
    },
    {
      a: "2022-05",
    },
    {
      a: "2022-05",
    },
    {
      a: "2022-05",
    },
    {
      a: "2022-05",
    },
  ]

  return (
    <main className="aivision">
      <div className="left">
        <nav className="nav">
          <div className="design-box">
            <section className="nav-box">
              <div className="nav-up">              
                <label className="nav-label period">조회기간 </label>
                <MyDatePicker className="datePicker" 
                              lastDate={lastDate}
                              currentDate={currentDate}
                              setLastDate={setLastDate}
                              setCurrentDate={setCurrentDate}
                />
              </div>
              <div className="nav-down">
                <label className="nav-label">품번</label>
                <input
                  className="nav-input"
                  type="text"
                  placeholder="품번을 입력하세요"
                  value={pumbunInput}
                  onChange={pumbunInputChange}
                />
                <label className="nav-label">LOT</label>
                <input
                  className="nav-input"
                  type="text"
                  placeholder="LOT를 입력하세요"
                  value={lotInput}
                  onChange={lotInputChange}
                />
              </div>
            </section>
            <div className="nav-button-box">
              <button className="nav-button" onClick={ClickBtn}>Search</button>
            </div>
          </div>
        </nav>
        <main className="grid">
          <Grid
            className="grid-one"
            onDblclick={showModal}
            rowHeaders={['rowNum']}
            rowHeight={50}
            width= "auto"
            // bodyHeight="fitToParent"
            data={[
              {
                a: "2022-04-01",
                b: "TSC5340KS",
                c: "",
                d: "",
                e: "",
                f: "D10094C01",
                g: "5",
                h: "2",
                i: "1",
                j: "1",
                k: "-",
              },
              {
                a: "2022-04-01",
                b: "TSC5340KS",
                c: "",
                d: "",
                e: "",
                f: "D1023B01-09",
                g: "35",
                h: "5",
                i: "3",
                j: "2",
                k: "-",
              },
              {
                a: "2022-04-01",
                b: "TSC5340KS",
                c: "",
                d: "",
                e: "",
                f: "D11274B01-07",
                g: "10",
                h: "4",
                i: "1",
                j: "1",
                k: "2",
              },
            ]}
            columns={mainGridHeaders}
          />
          <Modal
            visible={isModalVisible}
            onCancel={handleCancel}
            width={1500}
            height={300}
            footer={null}
            style={{ top: 50}}
            bodyStyle={{height:870}}
            closable={false}     
          >
            <div className="modal-box__main">
              <div className="modal-box__left">
                <Grid
                  scrollY = {true}
                  onClick={onClickPopup}
                  data={popupTestData}
                  columns={[
                    { name: "b", header: "제품명", align: "center" },
                    { name: "a", header: "검사일자", align: "center" },
                    { name: "c", header: "폭", align: "center" },
                    { name: "d", header: "길이", align: "center" },
                    { name: "e", header: "두께", align: "center" },
                    { name: "f", header: "제품사양", align: "center" },
                    { name: "g", header: "LOT", align: "center" },
                    { name: "h", header: "사진", align: "center" },
                    { name: "i", header: "AI예측", align: "center" },
                    { name: "j", header: "이물종류", align: "center" },
                    { name: "k", header: "불량구간위치", align: "center" },
                    { name: "l", header: "확률", align: "center" },
                    { name: "m", header: "정답", align: "center" },
                  ]}
                />
              </div> 
              <form ref={formRef} className="modal-box__right">                

                  <label className="modal-label" name="b">제품명</label>
                  <input className="modal-input" disabled={true} name="b"/>

                  <label className="modal-label">검사일자</label>
                  <input className="modal-input" disabled={true} name="a"/>

                  <label className="modal-label">폭</label>
                  <input className="modal-input" disabled={true} name="c"/>

                  <label className="modal-label">길이</label>
                  <input className="modal-input" disabled={true} name="d"/>

                  <label className="modal-label">두께</label>
                  <input className="modal-input" disabled={true} name="e"/>

                  <label className="modal-label">제품사양</label>
                  <input className="modal-input" disabled={true} name="f"/>

                  <label className="modal-label">LOT</label>
                  <input className="modal-input" disabled={true} name="g"/>

                  <label className="modal-label">사진</label>
                  <input className="modal-input" disabled={true} name="h"/>

                  <label className="modal-label">AI예측</label>
                  <input className="modal-input" disabled={true} name="i"/>

                  <label className="modal-label">이물종류</label>
                  <input className="modal-input" disabled={true} name="j"/>

                  <label className="modal-label">불량구간위치</label>
                  <input className="modal-input" disabled={true} name="k"/>

                  <label className="modal-label">확률</label>
                  <input className="modal-input" disabled={true} name="l"/>

                  <label className="modal-label">정답</label>
                  <select className="modal-select" name="select" onChange={onChangeSelect}>
                    <option value="ok" name="selectOpiton">양품</option>
                    <option value="ng" name="selectOpiton">이물</option>
                  </select>

                  <button className="modal-button" onClick={onSavePopup}>저장</button>
              </form>
            </div>
          </Modal>
        </main>
      </div>
      <div className="right">
        <div className="right-up">
          <Bar options={options} data={data} />;
        </div>
        <div className="right-down">
          <div className="pie-wrapper">
            <Pie className="pie" data={pieData} />;
          </div>
          <div className="line-wrapper">
            <Line
              className="line"       
              label={LineLabels}
              options={LineOptions}
              data={LineData}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Aivision;
