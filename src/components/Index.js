import React from "react";
import { Button, Container } from "react-bootstrap";
import "./style.css";
import {Link} from 'react-router-dom'
import Logo from "./assets/person.png";
import Work from "./assets/work.jpg";
import SampleWorks from "./assets/sample-works.jpg";

class Content extends React.Component {
  render() {
    return (
      <div className="div-utama">
        <div className="div-bg-1">
          <Container>
            <div className="row-fx-1 row">
              <div className="text-fx-1 col-fx-1 col">
                Hi! Welcome to My Website. Feel Free to
                Check out my Works and Services. <br/>
                Let's Create Something Great Together !
                <br />
                <Link to="/hire"><Button className="button-fx-1">HIRE ME</Button></Link>
              </div>
              <div className="col-fx-2 col">
                <img className="img-fx-1" src={Logo} alt="logo..."></img>
              </div>
            </div>
            </Container>

            <div style={{backgroundColor:"#ad974f"}}>
            <Container>
            <div className="row-fx-1 row pt-4 pb-4">
              <div className="text-fx-1 col-fx-2 col-4">
                <span className="rectangle-fx">
                  10+ PROJECTS & CLIENT NEEDS DONE
                </span>
              </div>
              <div className="text-fx-1 col-fx-2 col-4">
                <span className="rectangle-fx">
                  2 YEARS OF WORKING EXPERIENCE
                </span>
              </div>
              <div className="text-fx-1 col-fx-2 col-4">
                <span className="rectangle-fx">LEADERSHIP & COLLABORATION</span>
              </div>
            </div>
            </Container>
            </div>        
          
        </div>

        <div className="div-bg-2 pb-5">
          <h1 className="header-fx pt-4 pb-4 text-center ">SERVICES</h1>
          <Container>
            <div className="row">
              <div className="col">
                <img src={Work} className="img-transparent" alt="..."></img>
                <p className="center-text">UI DESIGN</p>
              </div>
              <div className="col">
                <img src={Work} className="img-transparent" alt="..."></img>
                <p className="center-text">WEB DEVELOPMENT</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src={Work} className="img-transparent" alt="..."></img>
                <p className="center-text">APP DEVELOPMENT</p>
              </div>
              <div className="col">
                <img src={Work} className="img-transparent" alt="..."></img>
                <p className="center-text">APP DESIGN</p>
              </div>
            </div>
          </Container>
        </div>

        <div className="parallax"><p className="parallax-text text-center">LET ME BUILD THE WEBSITE YOU NEED.</p></div>

        <div className="div-bg-2 pb-5 text-center">
          <h1 className="header-fx pt-4 pb-4 text-center ">MY WORKS</h1>
          <Container>
            <div className="row">
              <div className="col-4">
                <img src={SampleWorks} className="img-works" alt="..."></img>
              </div>
              <div className="col-4">
                <img src={SampleWorks} className="img-works" alt="..."></img>
              </div>

              <div className="col-4">
                <img src={SampleWorks} className="img-works" alt="..."></img>
              </div>
            </div>
            <Link to="/works"><Button className="button-fx-2 m-4">SEE MORE</Button></Link>
            <Link to="/hire"><Button className="button-fx-1 m-4">HIRE ME</Button></Link>
          </Container>
        </div>

        

      </div>
    );
  }
}

export default Content;
