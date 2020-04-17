import React, {useEffect, useState} from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios'

const Index = () => {
    const [data, setData] = useState([])
    const {url} = useRouteMatch();

    useEffect (()=>{
        axios.get('http://localhost:8000/Services')
        .then((response)=> {
            // console.log(response.data);
            setData(response.data)   
        })

    },[])

        return (
            <div className="row ">
                <br/>
                <br/>
                
                    {
                    data.map((item,index)=>{
                        // console.log(item);
                        
                        return (
                            <div className="card col-3 mt-5" key={index}>
                                <br/>
                                <img src={item.imgURL} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.subtitle}</p>
                                    <Link to={`${url}/${item.id}`} className="btn btn-primary">See More</Link>
                                </div>
                                </div>
                            
                        )
                    })
                    }
                </div>
            
        )
    }

export default Index
