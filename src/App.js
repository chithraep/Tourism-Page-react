import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import CardData from "./Component/CardData";

import "./index.css";

function MyApp() {

  let [FavImages,setFavImages]=useState([]);

  
 function getFavImages(imgSrc){
  //console.log("hey! please show me");
  //setFavImages(FavImages=imgSrc);
 //  console.log('favImages=',FavImages)
 setFavImages([...FavImages,imgSrc]);
 }
 //console.log("favImage"+FavImages);
//let map each favorite images

let userFavIMages=FavImages.map((imgSrc)=>{
  return(
    <div className="FavImage">
<i className="far fa-times-circle"
onClick={()=>{(removeFavImages(imgSrc))}}
></i>
   
  <img src={imgSrc}/>
  </div>
)
})
function removeFavImages(imgSrc){
  //console.log(imgSrc);
  setFavImages([...FavImages].filter((currentImg)=>{
      return currentImg !=imgSrc
  }))
}

 let card= CardData.map((cardItem)=>{
    console.log(cardItem);
    return (
      <Card cardContent={{
        imgSrc:cardItem.imgSrc,
        name:cardItem.name,
        phone:cardItem.placeDescription,
        }}
        getFavImages={getFavImages}
    />
    );
    // {imgSrc:cardItem.imgSrc,name:cardItem.name,phone:cardItem.phone,email:cardItem.email});
    
    });
  
  return (
    <div>
      <Header />
      <Hero />
      <div className="Card-container container">
      <h2>Destinations</h2>
      <div className="container-flex">
         <div className="Card-flex">
           {card}
          </div>
      <aside>
        <h2>Favorites!</h2>
<div className="favor">

       {userFavIMages}
       </div>
      </aside>
      </div>
      </div>
 <Footer />
    </div>
  );
}

export default MyApp;

