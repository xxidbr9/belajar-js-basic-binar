import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const fetchData = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await resp.json();
};

const BlogPage = async () => {
  const data = await fetchData();
  return (
    <div>
      <h1>Ini list post</h1>
      <ul className={styles.list_wrapper}>
        {data.map(post => (
          <Link href={`blogs/${post.id}`}>
            <li className={styles.item} key={post.id}>
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
