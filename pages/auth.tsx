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

const auth = () => {
  const router = useRouter();
  
  console.log(router.query.auth)

  return (
    <div className={styles.authWrapper}>
      <AuthHeader />
      <div className={styles.authFormWrapper}>
        <form action="">

        </form>
        {/* <AuthLoadingWrap /> */}
      </div>
    </div>
  );
};

export default auth;
