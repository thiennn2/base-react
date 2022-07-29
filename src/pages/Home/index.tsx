import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next';
import { Button } from "components/themes/Button";
import { AppContext } from "store";

export default function Home() {
  const {t} = useTranslation();
  const {posts} = useContext(AppContext);
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Home</h1>
      <p>
        This is an example of how you can do things like this:
      </p>
      <Button>Click me</Button>
      {posts.map(post => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
      ))}
      <p>{t("common.helloWorld")}</p>
    </div>
  )
}