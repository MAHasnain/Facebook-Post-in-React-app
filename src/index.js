import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      topText={"Suggested for you"}
      threeDotsImg ={"./img/threeDots.jpg"}
      crossImg ={"./img/cross.png"}
      profileImg={"./img/profilePic.jpg"}
      name={"M A Hasnain"}
      date={"3d"}
      img={"./img/postImg.jpg"}
      text={"#cityview #travel #birdeyeview"}
      cmts={"10 comments 5 shares"}
      FBreaction={"./img/shocked.png"}
      FBreaction2={"./img/lovely-heart.png"}
      reactionQty={"You and 17"}
    />
    <App
      text2={
        "Imposing mountains kiss the sky, their rugged peaks a testament to nature's grandeur."
      }
      threeDotsImg ={"./img/threeDots.jpg"}
      crossImg ={"./img/cross.png"}
      topText={"Suggested for you"}
      profileImg={"./img/profilePic2.png"}
      name={"Zimal Khan"}
      date={"1d"}
      img={"./img/postImg2.jpg"}
      cmts={"17 comments  11 shares"}
      FBreaction={"./img/thumb.png"}
      FBreaction2={"./img/lovely-heart.png"}
      reactionQty={"11"}
    />
    <App
      text2={
        "Silent sentinels beneath the starlit canopy, mountains unveil a majestic nocturnal tapestry."
      }
      threeDotsImg ={"./img/threeDots.jpg"}
      crossImg ={"./img/cross.png"}
      topText={"Suggested for you"}
      profileImg={"./img/profilePic3.png"}
      name={"M Asad Ali"}
      date={"4h"}
      img={"./img/postImg3.jpg"}
      text={"#NightVibes #NightSummits #StarryNight"}
      cmts={"14 comments 13 shares"}
      FBreaction={"./img/lovely-heart.png"}
      FBreaction2={"./img/thumb.png"}
      reactionQty={"You and 17"}
    />
    {/* <App
      text2={
        "Silent sentinels beneath the starlit canopy, mountains unveil a majestic nocturnal tapestry."
      }
      threeDotsImg ={"./img/threeDots.jpg"}
      crossImg ={"./img/cross.png"}
      topText={"Suggested for you"}
      profileImg={"./img/profilePic3.png"}
      name={"M Asad Ali"}
      date={"4h"}
      img={"./img/postImg3.jpg"}
      text={"#NightVibes #NightSummits #StarryNight"}
      cmts={"14 comments 13 shares"}
      FBreaction={"./img/lovely-heart.png"}
      FBreaction2={"./img/thumb.png"}
      reactionQty={"You and 17"}
    /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
