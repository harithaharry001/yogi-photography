import React, { useState } from "react";
import Aux from "../../hoc/AuxHoc/Aux";
import Login from "./Login/Login";
import Signup from "./Login/Signup";



function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const changeAuthMode = (mode) => {
    if (mode === "login") {
      setIsLogin(true);
    } else if (mode === "signup") {
      setIsLogin(false);
    }
  };

  return (
    <Aux>
    <div className={isLogin ? 'container' :'container sign-up-mode'}>
      {isLogin && <Login isLogin={changeAuthMode.bind(null,'signup')}/>}
      {!isLogin && <Signup isLogin={changeAuthMode.bind(null,'login')} />}
    </div>
    </Aux>
  );
}

export default AuthComponent;
