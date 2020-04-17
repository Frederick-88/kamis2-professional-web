import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import { Button } from "react-bootstrap";
import "../style.css";

const ServicePage = () => {
    let {url} = useRouteMatch();
    // console.log(url);


    // PERTAMA KAU HARUS BUAT URLNYA MENJADI http://localhost:3000/service/UiDesign. untuk itu, inilah caranya.
        return (
            <div className="div-bg-2">
                <br/>
                <br/>
                <br/>
                <h1 className="text-white">Welcome to Service Page, Coming Soon.</h1>
                <Link to={`${url}/UiDesign`}><Button className="button-fx-1">UI Design</Button></Link>
                <Link to={`${url}/WebDesign`}><Button className="button-fx-1">WebDesign</Button></Link>
                <Link to={`${url}/WebDevelop`}><Button className="button-fx-1">WebDevelop</Button></Link>
                <Link to={`${url}/WebMobile`}><Button className="button-fx-1">WebMobile</Button></Link>
            </div>
        )
    }

export default ServicePage;
