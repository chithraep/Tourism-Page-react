import React,{useState} from "react";
import  "../index.css";
import heart from "../assets/heart.svg";

function Card(props) {
 // console.log("props are",props.cardContent);
  //console.log(props);
       let Favorites=useState("AddToFavorites");
       let activeClass =useState("");
       //console.log(Favorites[0]);
       // lets set the states
      // let favBtnText=Favorites[0];
      // let setFavorite= Favorites[1]
      let [btnTextState,setBtnTextState]=Favorites;
      let[classState,setClassState]=activeClass;

       //Let change or modify the value
function addToFavorite(imgSrc){
  console.log("user fav"+imgSrc)
 // console.log("ful");
  //favBtnText="Added to favorite";
 // setBtnTextState((btnTextState="Added to Favorites!"));
 setBtnTextState((prevState)=>{
// console.log(prevState)
  if(prevState==="AddToFavorites"){
    //getFavImages(imgSrc);
    props.getFavImages(imgSrc);
    return "AddedToFavorites!";
  }else{
    return "Add to favorite";
  }



});
setClassState((prevClass)=>{
  if(prevClass===""){
    return "active";
  }else{
    return "";
  }
  
});
 }
 
  return (
    
    <div className={`card ${classState} ` }>
      <img src={heart} className="icon"/>
      <img src={props.cardContent.imgSrc} />
      <h3>{props.cardContent.name}</h3>
      <p>{props.cardContent.placeDescription}</p>
      <button 
      onClick={(()=>{addToFavorite(props.cardContent.imgSrc)})}>{btnTextState}</button>
   </div>
  
  );
}

export default Card;
