import React from "react";
import ProfileCard from "../ProfileCard";


const Card = ({ item }) => {

    
  return (
    <>
      <div className="main-box" key={item.id}>
        <div className="img-box">
          <img src={item.img_url} alt={item.name} />
        </div>
        <div className="title-box">
          <div>
            <span>Title: </span>
            {item.name}
          </div>
          <div>
            <span>Genre: </span> {item.genre}
          </div>
          <div > 
          Rating: <span className={item.rating <= 8.5 ? "red" : "green" }> {item.rating} </span>
          </div>
          <button className={`button ${item.rating <= 8.5 ? "red" : "green"}`}>
  Watch
</button>
        </div>
       

      </div>
      {/* <ProfileCard name="Surya" gender="male" greeting={<div>Hello, Welcome</div>}><span>Hobbies: Travelling, Treking</span>

      </ProfileCard> */}
    </>
  );
};

export default Card;
