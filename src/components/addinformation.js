import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import * as firebase from 'firebase';

class Addinformation extends Component{
    constructor(){
    super();
    this.state = {
            title : null,
            address :null,
            id : null,
            year : null,
            lat : null,
            lng: null,
            url: null,
            information: null,
            photo: null,
            email:"",
            fullname:""
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e =>{
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("data").add({
            fullname: this.state.fullname,
            email: this.state.email
        });
        this.setState({
            fullname:"",
            email:""
        })
    }

    componentDidMount(){
        const { match: { params } } = this.props;

        const database = firebase.firestore()
        const docRef = database.collection("data")
        const Document = database.collection("data").doc
        console.log(Document)
        console.log(docRef)
        
        docRef.doc("0004").set({
            title: "สี่ห้า",
            address: "asas",
            id : "0004",
            year : "2544",
            lat : "12",
            lng: "101",
            url: "https://sketchfab.com/models/45732d868e9e45ee9b31455432467869/embed?preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1",
            information: "kldkfoajriogjwr;gdnfg;pinfsk;nrmwibofdwnop",
            photo: "https://firebasestorage.googleapis.com/v0/b/housing-4b273.appspot.com/o/03_4.jpg?alt=media&token=1af0fa65-a260-4c68-92a8-92151cc2907c"

        })
        .then(function(docRef){
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error){
            console.log("Error adding document: ", error);
        })
    }
    
    render(){
        return(
           <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="add-grid">
            <Cell col={2}>
            <form onSubmit={this.addUser}>
                <input
                type="text"
                name="fullname"
                placeholder="Full name"
                onChange={this.updateInput}
                value={this.state.fullname}
                />
                <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                />
                <button type="submit">Submit</button>
            </form>
            </Cell>
            <Cell className="addinformation" col={8}>
                <h1>
                    เพิ่มข้อมูลโครงการ
                </h1>
                <button onClick={this.addData}>Add New Data</button>
            <label>
                ชื่อโครงการ
            </label> 
            <br/>
            <input type="text" />  
            <br/><br/>
            <label>
                ตำแหน่งที่ตั้ง
            </label>
            <br/>
            <input type="text" />
            <br/><br/>
            <label>
                ปีที่ก่อตั้ง
            </label>
            <br/>
            <input type="number" /> 
            <br/><br/>
            <label>
                ข้อมูลทั่วไป
            </label>
            <br/>
            <input type="text" />
            <br/><br/>
            <label>
                พิกัดละติจูต
            </label>
            <br/>
            <input type="number" />
            <br/><br/>
            <label>
                พิกัดลองติจูต
            </label>
            <br/>
            <input type="number" />
            <br/><br/>
            <label>
                Url แบบจำลองสามมิติ
            </label>
            <br/>
            <input type="text" />
            <button onClick={this.docRef}>เพิ่มข้อมูล</button>
            </Cell>

            <Cell col={4}>

            </Cell>
            </Grid>
            </div>
        )
    }
}

export default Addinformation; 