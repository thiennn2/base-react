import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store';

export default function About() {
  const { t } = useTranslation();
  const posts = useAppSelector(state => state.posts);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>About</h1>
      <p>
        This is an example of how you can do things like this:
      </p>
      <p>{t('common.helloWorld')}</p>
      {posts.map(post => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
      ))}
    </div>
  );
}
