import React from "react";
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

export default function About() {
  const {t} = useTranslation();
  return (
    <div>
      <h1>About</h1>
      <p>
        This is an example of how you can do things like this:
      </p>
      <p>{t("common.helloWorld")}</p>
      <Link to="/">Home</Link>
    </div>
  )
}
