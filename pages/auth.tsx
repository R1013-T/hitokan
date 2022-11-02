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
import Head from "next/head";

const auth = () => {
  if (typeof document !== "undefined") {
    const touchHandler = (event: any) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };
    document.addEventListener("touchstart", touchHandler, {
      passive: false,
    });
    document.addEventListener(
      "touchmove",
      (event: any) => {
        event.preventDefault();
      },
      { passive: false }
    );
  }

  const router = useRouter();
  const [authState, setAuthState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("")

  const changeIsLoading = (state: boolean) => {
    setIsLoading(state);
  };

  useEffect(() => {
    switch (router.query.auth) {
      case "signup":
        setAuthState("SignupBeforeInput");
        setTitle("サインアップ")
        break;
        case "login":
          setAuthState("LoginInput");
          setTitle("ログイン")
        break;
      default:
    }
  }, []);

  // useEffect(() => {
  //   if (authState) {
  //     console.log(authState);
  //   }
  // }, [authState]);

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  return (
    <div className={styles.authWrapper}>
      <Head>
        <title>ヒトカン - {title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Head>
      <AuthHeader isLoading={isLoading} />
      <div className={styles.authFormWrapper}>
        <SignupBeforeInput changeIsLoading={changeIsLoading} />
        {authState === "SignupBeforeInput" ? (
          <SignupBeforeInput changeIsLoading={changeIsLoading} />
        ) : (
          ""
        )}
        {authState === "SignupBeforeConfirm" ? <SignupBeforeConfirm /> : ""}
        {authState === "SignupBeforeComplete" ? <SignupBeforeComplete /> : ""}
        {authState === "SignupAfterInput" ? <SignupAfterInput /> : ""}
        {authState === "SignupAfterConfirm" ? <SignupAfterConfirm /> : ""}
        {authState === "LoginInput" ? <LoginInput /> : ""}
        {isLoading ? <AuthLoadingWrap /> : ""}
      </div>
    </div>
  );
};

export default auth;
