import React, { Component } from 'react' ;
import { Grid, Cell , Button , ProgressBar} from 'react-mdl';
import * as firebase from 'firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Informationperior3 extends Component {
    
    constructor() {
        super();
        this.state = {
            data : [],
            economic : <ProgressBar indeterminate />,
            law : <ProgressBar indeterminate />,
            political : <ProgressBar indeterminate />,
            social : <ProgressBar indeterminate />,
            information: <ProgressBar indeterminate />
        };
    }

    componentDidMount() {
        var projects = [];
        const database = firebase.firestore()

        database.collection("data2").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                //console.log(doc);
                projects.push(doc.data())
                // this.setState({
                //     data.push(doc.data())
                // })
            });
            this.setState({
                data: projects
            })
            console.log(this.state.data)
        });

        const docRef = database.collection("detail").doc("P2")
        
        docRef.get().then((doc)=>
        {
            const data = doc.data();
            this.setState({
                economic: data["economic"],
                law: data["law"],
                political: data["political"],
                social: data["social"],
                information: data["information"]
            })
        })
        
        

    //    const rootRef = firebase.database().ref().child('housing-4b273');
    //    const speedRef = rootRef.child('speed');
    //    speedRef.once('value', snap =>{
        
    //      this.setState({
    //             speed: snap.val()
    //         });
    //     });
    }

    render(){

        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="perior-grid" >
                    <Cell className="project-choose" col={2}>
                   <h3>
                       โครงการในช่วงเวลา
                   </h3>
                   
                    {this.state.data.map((project) => {
                                return <p><Link to={`informationperior2/${project.id}/`}>{project.title}</Link></p>
                            })
                        }
                    </Cell>
                    <Cell className="project-information" col={6}>
                        <h2>
                            ช่วงเวลาที่&nbsp;&nbsp;&nbsp;2
                            </h2>  
                            <h1>
                            ช่วงเศรษฐกิจรุ่งเรือง
                            </h1>
                            <h3>
                                พ.ศ. 2530 - พ.ศ. 2539
                            </h3>
                            <br/>
                            <br/>
                            <h4>
                                ข้อมูลทั่วไป
                            </h4>
                            <hr/>
                        <p>
                        {this.state.information}
                        <br/><br/> 
                        </p>
                        <h4>
                            ด้านสังคม
                        </h4>
                        <hr/>
                        <p>    
                        {this.state.social}
                        </p>
                        <br/>
                        <h4>
                            ด้านการเมือง
                        </h4>
                        <hr/>
                        <p>
                        {this.state.political}
                        </p>
                        <br/>
                        <h4>
                        ด้านเศรษฐกิจ
                        </h4>
                        <hr/>
                        <p>
                        {this.state.economic}
                        </p>
                        <br/>
                        <h4>
                            ด้านกฎหมาย
                        </h4>
                        <hr/>
                        <p>
                        {this.state.law}
                        </p>                        
                    </Cell>
                    <Cell className="test" col={4}>
                        <p>
                            รูปภาพอธิบาย
                        </p>
                    </Cell>
                </Grid>
            </div>

        )
    }
} 

export default Informationperior3    