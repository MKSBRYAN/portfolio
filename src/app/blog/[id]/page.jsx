import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Yesimon zako</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sed nobis necessitatibus vitae aut cupiditate, n
          </p>
          <div className={styles.author}>
            <Image
              src={""}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Bryan Samuel</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          voluptatum in totam libero id necessitatibus aspernatur fugiat numquam
          commodi pariatur nulla expedita voluptatem suscipit, obcaecati
          laudantium rerum! Omnis, vitae placeat?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          praesentium eos, unde fugit esse omnis quia autem culpa cumque ipsa.
          Amet, ut iure illo porro rerum eos atque error officiis. Lorem ipsum,
          <br />
          dolor sit amet consectetur adipisicing elit. Suscipit dolorem
          molestias odit illum quaerat nostrum sequi saepe sed. Itaque eligendi
          provident quaerat voluptate dignissimos, saepe sunt nulla magnam
          laborum error.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
