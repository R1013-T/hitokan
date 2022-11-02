import styles from "../../../../styles/auth/auth.module.scss";

import Link from "next/link";

import { MdArrowBackIosNew } from "react-icons/md";

const Input = () => {

  const handleSummit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    scrollTo(0, 0);
  };

  const handleBlur = () => {
    alert('a')
  }

  return (
    <div>
      <Link href={"/"} className={styles.backButton}>
        <MdArrowBackIosNew />
        <p>Back</p>
      </Link>
      <form className={styles.signupInputForm} onSubmit={handleSummit}>
        <h2>CREATE YOUR ACCOUNT</h2>
        <div className={styles.inner}>
          <label>メールアドレス</label>
          <input id="input" type="text" placeholder="Email Address" onBlur={handleBlur}/>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
