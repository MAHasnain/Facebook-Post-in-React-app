import React from "react";
// import ReactDOM from 'react-dom/client';
import "./App.css";

const App = (props) => {
  return (
    <div className="border border-white box-shadow p-4">
      <div className="text-simple w-100">{props.topText}</div>
      <hr className="color-gray w-100 my-2" />
      <div className="container">
        <div>
          <img
            className="rounded-circle color-blue mx-auto"
            src={props.profileImg}
            alt="profile img"
            width="40px"
          />
        </div>
        <div className="text-top text-left">
          <p>
            <span className="text-bold color-black">{props.name}</span>
            <br />
            <span className="text-thin">{props.date}</span>
            <img
              src="./img/globeLogo.png"
              alt=""
              width="15px"
              className="img-padding-left"
            />
          </p>
        </div>
        <div className="menu-and-cut">
          <img
            src={props.threeDotsImg}
            alt=""
            className="threeDots-width-hight "
          />
          <img src={props.crossImg} alt="" className="cross-width-hight " />
        </div>
      </div>
      <div>
        <p className="text-caption">{props.text}</p>
        <p className="massage">{props.text2}</p>
      </div>
      <img src={props.img} alt="" className="post-img" />

      <img src={props.FBreaction2} className="img-reactionLike" alt="" />
      <img
        src={props.FBreaction}
        alt=""
        className="img-reaction align-items-center"
      />
      <p className="reaction-qty">{props.reactionQty}</p>
      <p className="cmts-shrs">{props.cmts}</p>
      <hr className="color-gray w-100 my-2" />
      <div className="container-buttons">
        <img src="./img/like.png" alt="" className="img-like" />
        <img src="./img/comment.png" alt="" className="img-cmt" />
        <img src="./img/share.png" alt="" className="img-share" />
      </div>
    </div>
  );
};

export default App;
