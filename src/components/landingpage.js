import React, { Component } from 'react';
import { Grid , Cell , Card , CardTitle , CardActions , CardText , Button , Icon , Footer , FooterSection , FooterLinkList ,} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                    <Cell className="landing-left-cell" col={4}>
                        <h1>Thai Houing Develope</h1>
                        </Cell>
                    <Cell className="landing-middle-cell" col={6}>
                    <h2> Heading </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Button raised colored style={{margin: 'auto'}} href="/information">เข้าสู่ช่วงเวลา</Button>
                    <br/>
                    </Cell>
                    <Cell  className="landing-right-cell" col={2}>
                        <h3>TimeLine</h3>
                        <Card shadow={0} style={{width: '200px', height: '200px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenan convallis.
                                    </CardText>
                                 <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                        </Card>
                        <br/>
                        <Card shadow={0} style={{width: '200px', height: '200px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenan convallis.
                                    </CardText>
                                 <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                        </Card>
                        </Cell>
               

</Grid>
            </div>
        )
    }
}

export default Landing