import AuthHeader from "../components/auth/AuthHeader";
import AuthLoadingWrap from "../components/auth/AuthLoadingWrap";
import SignupBeforeInput from "../components/auth/signup/beforeAuth/Input";
import SignupBeforeConfirm from "../components/auth/signup/beforeAuth/Confirm";
import SignupBeforeComplete from "../components/auth/signup/beforeAuth/Complete";
import SignupAfterInput from "../components/auth/signup/afterAuth/Input";
import SignupAfterConfirm from "../components/auth/signup/afterAuth/Confirm";
import LoginInput from "../components/auth/login/Input";

import styles from "../styles/auth/auth.module.scss";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const auth = () => {
  const router = useRouter();
  const [authState, setAuthState] = useState("")
  
  useEffect(() => {
    
    switch (router.query.auth) {
      case "signup" :
        setAuthState('SignupBeforeInput')
        break
      case "login" :
        setAuthState('LoginInput')
        break
      default :

    }
  },[])

  useEffect(() => {
    console.log(authState)
  },[authState])

  const handleClick = () => {
    setAuthState('aaa')
  }

  return (
    <div className={styles.authWrapper}>
      <AuthHeader />
      <div className={styles.authFormWrapper}>
        <form action="">

          <button onClick={handleClick}>button</button>
        </form>
        {/* <AuthLoadingWrap /> */}
      </div>
    </div>
  );
};

export default auth;
