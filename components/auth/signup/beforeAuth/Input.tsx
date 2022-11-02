import styles from "../../../../styles/auth/auth.module.scss";

import Link from "next/link";

import { MdArrowBackIosNew } from "react-icons/md";


if (typeof document !== "undefined") {
  const $input = document.getElementById("input");
  $input?.addEventListener('blur', () => {
    scrollTo(0, 0);
    alert()
  })
}
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
          <input id="input" type="text" placeholder="Email Address" />
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
