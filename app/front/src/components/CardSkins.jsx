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

console.log(posts)
  return (
    <div className="CardSkins">

      <h1>{posts.campeoes}</h1>
      {/* {posts.map((post, key) => {
        return (
        <div className="car2" key={key}> 
            
          </div>
         
        );
      })} */}
    </div>
  );
};

export default CardSkins;
