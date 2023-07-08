import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="Image Contact"
            className={styles.image}
            fill={true}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="mail" placeholder="email" className={styles.input} />
          <textarea
            placeholder="Messsage"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <Button text={"Send"} url={"/#"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
