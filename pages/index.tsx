import AuthHeader from "../components/auth/AuthHeader";
import styles from "../styles/Home.module.scss";

import Head from "next/head";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

export default function Home() {
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

  const signupQuery = {
    auth: "signup",
  };
  const loginQuery = {
    auth: "login",
  };

  return (
    <div className={styles.article}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" /> */}
      </Head>

      <AuthHeader />
      <div className={styles.topWrapper}>
        <Link
          className={styles.authButton}
          href={{ pathname: "auth", query: signupQuery }}
          as="signup"
        >
          Sign up
        </Link>
        <Link
          className={styles.authButton}
          href={{ pathname: "auth", query: loginQuery }}
          as="login"
        >
          Log in
        </Link>
        <div className={styles.or}>Or</div>
        <button className={styles.GoogleButton}>
          <FcGoogle className={styles.googleIcon}/>
          <p>Log in with Google</p>
          <div></div>
        </button>
        <div></div>
      </div>
    </div>
  );
}
