import React, { Component } from 'react';
import { Cell , Grid , Button} from 'react-mdl';
import Img1 from '../img_2.jpg';
import Img2 from '../img_1.jpg';
import Img3 from '../img_3.jpg';
import Img4 from '../img_10.jpg';
import Img5 from '../img_11.jpg';
import Img6 from '../img_12.jpg';



class Information extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="information-grid">
                <Cell col={4}>
                </Cell>
                <Cell className="information-heading-cell" col={4}>
                    <h1>ช่วงเวลา</h1>
                </Cell>
                <Cell col={4}>
                </Cell>
               <Cell className="information-left-cell" col={4}>
                <img src={Img1} alt="img1"/>
                <p>
                <br/>
                        ช่วงที่ 1
                        <br/><br/>
                         ช่วงเริ่มต้นบ้านจัดสรร
                        <br/><br/>
                        <Button raised ripple href="/informationperior1">Button</Button>
                      
                </p>
                </Cell>
                <Cell className="information-middle-cell" col={4}>
                    <img src={Img2} alt="img2"/>
                    <p>
                       <br/>
                       ช่วงที่ 2 
                       <br/><br/>
                       ช่วงเศรษฐกิจรุ่งเรือง
                       <br/><br/>
                       <Button raised ripple href="/informationperior2">Button</Button>
                       </p>
                </Cell>
                <Cell className="information-right-cell" col={4}>
                <img src={Img3} alt="img3"/>
                <p>
                <br/>
                       ช่วงที่ 3 
                       <br/><br/>
                       ช่วงวิกฤตฟองสบู่
                       <br/><br/>
                       <Button raised ripple>Button</Button>
                </p>
                </Cell>
                <Cell className="information-left-second-cell" col={4}>
                <img src={Img4} alt="img4"/>
                      <p>
                          <br/>
                      ช่วงที่ 4
                       <br/><br/>
                       ช่วงปรับปรุงกฎหมายข้อกำหนดการพัฒนาที่ดิน
                       <br/><br/>
                       <Button raised ripple >Button</Button>
                       <br/>
                       <br/><br/>
                </p>
                </Cell>
                <Cell className="information-middle-second-cell" col={4}>
                <img src={Img5} alt="img5"/>
                <p>
                <br/>
                       ช่วงที่ 5
                       <br/><br/>
                       ช่วงปรับปรุงคุณภาพชีวิต
                       <br/><br/>
                       <Button raised ripple>Button</Button>
                       <br/><br/><br/>
                       </p>
                </Cell>
                <Cell className="information-right-second-cell" col={4}>
                <img src={Img6} alt="img6"/>
                <p>
                <br/> 
                      ช่วงที่ 6 
                       <br/><br/>
                       ช่วงปรับปรุงข้อกำหนดนโยบายจัดสรรที่ดิน
                       <br/><br/>
                       <Button raised ripple>Button</Button>
                       <br/>  
                </p>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Information;