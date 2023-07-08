import React from "react";
import styles from "./pages.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="about image"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odit
            pariatur et non, quas eligendi cupiditate cum deleniti minus sit
            voluptatibus quisquam officiis, dolorem tempore architecto neque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odit
            pariatur et non, quas eligendi cupiditate cum deleniti minus sit
            voluptatibus quisquam officiis, dolorem tempore architecto neque.
            Obcaecati, unde a.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odit
            pariatur et non, quas eligendi cupiditate cum deleniti minus sit
            voluptatibus quisquam officiis, dolorem tempore architecto neque.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odit
            pariatur et non, quas eligendi cupiditate cum deleniti minus sit
            voluptatibus quisquam officiis, dolorem tempore architecto neque.{" "}
            <br />
            <br />
            Creative Illutration
            <br />
            <br />
            - Dynamic Website
            <br />
            <br />
            - Fast and Handly
            <br />
            <br />- Mobile Apps
          </p>
          <Button url="/contact" text={"Contact Us"} />
        </div>
      </div>
    </div>
  );
};

export default About;
