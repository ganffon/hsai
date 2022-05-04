import React from 'react';
import MyDatePicker from './datepicker.jsx';
import '../styles/aivision.css';

const Aivision = (props) => (

    <main>
        <div className="left">
            <nav>
                <section className="nav-box">
                    <div className="nav-up">
                        <label>조회기간</label>                        
                        <MyDatePicker/>
                        {/* <label className='nav-up__period'>~</label>
                        <MyDatePicker/> */}
                    </div>
                    <div className="nav-down">
                        <label>품번</label>
                        <input type="text" placeholder='품번을 입력하세요'/>
                        <label>LOT</label>
                        <input type="text" placeholder='LOT를 입력하세요'/>
                    </div>
                </section>

                <button>조회</button>
            </nav>
            <main className="grid">

            </main>
        </div>
        <div className="right">

        </div>
    </main>
    );

export default Aivision;