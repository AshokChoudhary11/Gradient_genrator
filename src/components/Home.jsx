import React from "react";
import "../App.css";
import ColorSelector from "./ColorSelector";
import ColorMode from "./ColorMode";
import AngleAndCurve from "./AngleAndCurve";
import GradientCode from "./GradientCode";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="gradient-Box_border">
          <div className="gradient-Box">
            {/* <div className="hello">hello</div> */}
          </div>
        </div>
        <div>
          <div className="gradient_header">
            <button>hover Effect</button>
            <h2>Gradient Generator</h2>
            <div>Beautiful, lush gradients ✨</div>
          </div>
          <div className="all_controler">
            <div className="gradient_controller">
              <ColorSelector></ColorSelector>
              <ColorMode></ColorMode>
              <div className="precision">
                <div>Precision:</div>
                <input type="range" />
              </div>
              <AngleAndCurve></AngleAndCurve>
              <GradientCode></GradientCode>
            </div>
          </div>
        </div>
      </div>
      <div className="code_copy_buttons">
        <button className="copy_button">Copy URL</button>
        <button className="copy_button">Copy CSS</button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
