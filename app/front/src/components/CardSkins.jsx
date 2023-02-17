import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
const CardSkins = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8800/lol")
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        console.log("Deu tud errad");
      });
  }, []);


  return (
    <div className="CardSkins">
      {posts.map((post, key) => {
        return (
        <div className="car2" key={key}> 
            <div className="card-principal" >
            <img src="" alt="" />
            
            </div>
            <div className="skins">

            </div>
          </div>
         
        );
      })}
    </div>
  );
};

export default CardSkins;
