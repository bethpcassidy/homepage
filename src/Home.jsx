import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { Bio } from "./Bio";
import React from "react";
import { Carousel1 } from "./Carousel1";
import { About } from "./About";
import * as Scroll from "react-scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import "./home.css";

// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

export function Home() {
  // const posts = [
  //   { id: 1, title: "title", subline: "sicksubline", body: "honk" },
  //   { id: 2, title: "title", subline: "sicksubline", body: "honk" },
  // ];

  return (
    <React.Fragment>
      {/* <Routes>
        <Route path="/PostsIndex" element={<PostsIndex />} />
      </Routes> */}
      <Bio></Bio>
      <About></About>
      <PostsIndex />
    </React.Fragment>
  );
}
