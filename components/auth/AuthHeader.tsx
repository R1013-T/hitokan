import styles from "../../styles/auth/authParts.module.scss";

import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useEffect, useState } from "react";

interface Props {
  isLoading: boolean;
}

const AuthHeader = (props: Props) => {

  const handleClick = () => {
    // setIsLoading((prevState) => !prevState);
  };

  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <GiHamburgerMenu className={styles.headerImg} />
        <p>hitokan</p>
        <HiOutlineUserCircle className={styles.headerImg} />
      </div>
      <div className="centerIcon">
        {props.isLoading ? (
          <Image
            src="/LoadingIcon.svg"
            alt="Picture of the author"
            width={200}
            height={200}
            className={styles.centerIconImage}
            onClick={handleClick}
          />
        ) : (
          <Image
            src="/Icon.svg"
            alt="Picture of the author"
            width={500}
            height={200}
            className={styles.centerIconImage}
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default AuthHeader;
