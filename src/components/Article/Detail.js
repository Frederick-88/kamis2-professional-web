import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const {id} = useParams();
  let [data, setData] = useState({
    title: "",
    article: "",
    imgURL: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:8000/Services/${id}`).then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);

  return (
    <div className="card-center">
        <br />
        <br/>
      <div className="card col-6 mt-5">
        <img src={data.imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.article}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
