import React from 'react'
// import ReactDOM from 'react-dom/client';
import "./App.css"

const App = (props) => {
  return (
    <div className="border border-white box-shadow p-4">
      <div className= "text-simple w-100" >
        Suggested for you
      </div>
      <hr className="color-gray w-100 my-2"/>
      <div className= "container"><div><img className ='rounded-circle color-blue mx-auto' src="./img/profilePic.jpg" alt="profile img" width='40px'/></div>
        <div className='text-top text-left'><p><span className='text-bold color-black'>{props.name}</span>
        <br />
        <span className='text-thin'>{props.date}</span>
        <img src="./img/globeLogo.png" alt="" width='15px' className='img-padding-left' />
        <img src="./img/cross.png" alt="" className='cross-width-hight ' />
        <img src="./img/threeDots.jpg" alt="" className='threeDots-width-hight ' />
        </p>
        </div>
      </div>
      <div className='text-caption'><p>#cityview #travel #birdeyeview</p>
      </div>
      <img src="./img/postImg.jpg " alt="" className='post-img'/><br /><br />
      <p className='cmts-shrs'>10 comments 15 shares</p>
      <hr className="color-gray w-100 my-2"/>
      <div className='container-buttons'>
        <img src="./img/like.png" alt="" className='img-like'/>
        <img src="./img/comment.png" alt="" className='img-cmt'/>
        <img src="./img/share.png" alt="" className='img-share'/>
      </div>
    </div>
  )
}



export default App
