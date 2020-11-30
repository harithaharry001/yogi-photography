import React from "react";
import "./index.css";
import camera from "../../../assests/images/camera.svg";
import fashion from "../../../assests/images/fashion_.svg";

const Signup = (props) => {

  const changeToLogin = () =>{
    props.isLogin()
  }

  return (
    <div>
    <div className="forms-container">
      <div className="signin-signup">
        <form action="" className="sign-up-form">
          <h2 className="title">Sign Up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username"></input>
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="text" placeholder="Password"></input>
          </div>
          <input type="submit" value="LogIn" className="btn solid"></input>
        </form>
      </div>
    </div>
     <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam veritatis esse hic delectus laborum deserunt quam officia commodi corrupti quaerat?</p>
            <button className="btn transparent" id="sign-up-btn">Sign Up</button>
        </div>
        <img src={camera} className="image" alt="camera" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam veritatis esse hic delectus laborum deserunt quam officia commodi corrupti quaerat?</p>
            <button className="btn transparent" id="sign-in-btn" onClick={changeToLogin}>Sign In</button>
        </div>
        <img src={fashion} className="image" alt="camera" />
      </div>
    </div>
  </div>
  );
};

export default Signup;
