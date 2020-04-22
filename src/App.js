import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content , Footer , FooterSection , FooterLinkList ,} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Thai Housing Develope." scroll>
            <Navigation>
                <Link to="/">Home</Link> 
                <Link to="/information">Information</Link>
                <Link to="/3dinformation">3D Information</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="T.H.D.">
            <Navigation>
                <Link to="/">Home</Link> 
                <Link to="/information">Information</Link>
                <Link to="/3dinformation">3D Information</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <Footer className="footer-color" size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="/add">Add information</a>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
    </Layout>
</div>
  );
}

export default App;