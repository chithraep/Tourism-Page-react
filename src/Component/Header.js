import React from "react";
function Header() {
  let time = new Date();
  let hour = time.getHours();
  // let headerStyles = {};
  let mode = "";
  console.log(hour);
  if (hour > 18) {
    //headerStyles = { backgroundColor: "blue" };
    mode = "nightMode";
  } else if (hour < 18) {
    // headerStyles = { backgroundColor: "pink" };
    mode = "dayMode";
  }

  return (
    //   <header className="display-flex" style={headerStyles}>
    <header className={`display-flex ${mode}`}>
      <div className="logo">Logo</div>
      <ul className="nav display-flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
