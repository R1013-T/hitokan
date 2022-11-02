import styles from "../../../../styles/auth/auth.module.scss";

import Link from "next/link";

import { MdArrowBackIosNew } from "react-icons/md";

const Input = () => {
  return (
    <div>
      <Link href={"/"} className={styles.backButton}>
        <MdArrowBackIosNew />
        <p>Back</p>
      </Link>
      <form className={styles.signupInputForm}>
        <h2>CREATE YOUR ACCOUNT</h2>
        <div className={styles.inner}>
          <label>メールアドレス</label>
          <input type="text" placeholder="Email Address" />
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
