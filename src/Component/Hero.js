import React from "react";

function Hero() {
  let helloText = "Landing bangalore  ....just started with react! Explore it";
  //let wel = "hello react!how are you?";
  //return (<div className="hero">HeroImage</div>);
  // return <div className="hero">{wel}</div>;
  let Styles = { color: "", backgroundColor: "orange", fontSize: "40px" ,textShadow:" 1px 1px 5px #fff",maxWidth:"300"};
  return (
    <div className="hero">
      <h3
        style={Styles}
        //  style={{ color: "purple", backgroundColor: "orange", fontSize: "20px" }}
      >{`${helloText}`}</h3>
    </div>
  );
}
export default Hero;
