import React, { useState } from 'react';
import Grid from '@toast-ui/react-grid';
// import gridimg from "../img/grid.jpg"

const Popup = (props) => (

        <Grid
            data={
                [
                    {a:"2022-04-01", b:"TSC5340KS", c:"", d:"", e:"", f:"", g:"D10094C01", h:{}, i:"양품", j:"-", k:"", l:"99.99", m:""},
                    {a:"2022-04-01", b:"TSC5340KS", c:"", d:"", e:"", f:"", g:"D1023B01-09", h:"", i:"이물", j:"-", k:"", l:"99.99", m:""},
                    {a:"2022-04-01", b:"TSC5340KS", c:"", d:"", e:"", f:"", g:"D11274B01-07", h:"", i:"이물", j:"-", k:"", l:"97.07", m:""}
                ]
            }
            columns={
                [
                    { name:'b', header:"제품명", align:"center"},
                    { name:'a', header:"검사일자", align:"center"},
                    { name:'c', header:"폭", align:"center"},
                    { name:'d', header:"길이", align:"center"},
                    { name:'e', header:"두께", align:"center"},
                    { name:'f', header:"제품사양", align:"center"},
                    { name:'g', header:"LOT", align:"center"},
                    { name:'h', header:"사진", align:"center"},
                    { name:'i', header:"이물여부", align:"center"},
                    { name:'j', header:"이물종류", align:"center"},
                    { name:'k', header:"불량구간위치", align:"center"},
                    { name:'l', header:"확률", align:"center"},
                    { name:'m', header:"정답", align:"center"}

                ]
            }
            // rowHeight={50}
            // heightResizable={true}
            // rowHeaders={['rowNum']}
        /> 
 
);


export default Popup;