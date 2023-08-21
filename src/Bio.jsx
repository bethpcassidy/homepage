import { CTooltip } from "@coreui/react";
import "./bio.css";
import Snowfall from "react-snowfall";
import { Link } from "react-scroll";
import logo from "./assets/Untitled-1.gif";

export function Bio(props) {
  return (
    // <div style={{ background: "#282c34", position: "relative" }}>
    //   <Snowfall
    //     speed={[0.1, 0.15]}
    //     color="#808080"
    //     snowflakeCount={80}
    //     wind={[-0.0, 0.02]}
    //     radius={[0.5, 0.8]}
    //     opacity="40%"
    //   />
    //   <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    //     {" "}
    //     <main class="px-3">
    //       <h1 class="name">Beth Cassidy</h1>
    //       <p class="lead">
    //         | Full Stack Software Engineer | JavaScript | React | Ruby Ruby on Rails | HTML | CSS | C# |
    //       </p>
    //       <p class="lead">
    //         <div class="button">
    //           <ul class="list">
    //             <li>
    //               <CTooltip content="Go to my Github homepage.">
    //                 <a
    //                   href="https://github.com/bethpcassidy"
    //                   class="btn btn-lg btn-secondary fw-bold border-grey bg-dark"
    //                 >
    //                   <p class="inner">Github</p>
    //                 </a>
    //               </CTooltip>
    //             </li>

    //             <li>
    //               <CTooltip content="Go straight to posts">
    //                 <a class="btn btn-lg btn-secondary fw-bold border-grey bg-dark">
    //                   <Link to="PIndex" spy={true} smooth={true} offset={50} duration={500}>
    //                     <p class="inner">Posts</p>
    //                   </Link>
    //                 </a>
    //               </CTooltip>
    //             </li>
    //             <li>
    //               <CTooltip content="Got to my linkedin">
    //                 <a
    //                   href="https://www.linkedin.com/in/beth-cassidy975/"
    //                   class="btn btn-lg btn-secondary fw-bold border-grey bg-dark"
    //                 >
    //                   <p class="inner">Linkedin</p>
    //                 </a>
    //               </CTooltip>
    //             </li>
    //           </ul>
    //         </div>
    //       </p>
    //     </main>
    //   </div>
    // </div>

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      {" "}
      <main class="px-3">
        <img class="train" src={logo} alt="loading"></img>
        <p class="name">Beth Cassidy</p>
        <p class="lead1">Software Developer</p>
        <p class="lead">
          <div class="button">
            <ul class="list">
              <li>
                <CTooltip content="Go to my Github homepage.">
                  <a href="https://github.com/bethpcassidy" class="btn btn-lg ">
                    <p class="inner">Github</p>
                  </a>
                </CTooltip>
              </li>

              <li>
                <Link to="PIndex" spy={true} smooth={true} offset={50} duration={500}>
                  <CTooltip content="Go to Projects">
                    <a class="btn btn-lg  ">
                      <p class="inner">Projects</p>
                    </a>
                  </CTooltip>
                </Link>
              </li>
              <li>
                <CTooltip content="Go to my Linkedin">
                  <a href="https://www.linkedin.com/in/beth-cassidy975/" class="btn btn-lg">
                    <p class="inner">Linkedin</p>
                  </a>
                </CTooltip>
              </li>
            </ul>
          </div>
        </p>
      </main>
    </div>
  );
}
