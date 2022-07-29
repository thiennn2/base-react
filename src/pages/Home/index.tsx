import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is an example of how you can do things like this:
      </p>
      <Link to="/about">About</Link>
    </div>
  )
}