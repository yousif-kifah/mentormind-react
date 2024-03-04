import * as React from "react"
import Navbar from "../components/navbar"

export default function FaqPage(props) {
  return (
    <>
      <div className="faq">
        <div className="main-container">
          <Navbar />

          <div className="middle-bar-container">
            <div className="div-6">
              <div className="column">
                <div className="image-box">
                  <div className="div-7">
                    <span style={{ fontWeight: 400, fontSize: "48px" }}>
                      Have a question?
                    </span>
                    <br />
                    Read our FAQs 
                  </div>
                  <img
                    loading="lazy"
                    src={require("../images/faq.jpg")}
                    className="img"
                  />
                </div>
              </div>
              <div className="column-2">
                <div className="div-8">
                  <img
                    loading="lazy"
                    src={require("../images/pad.jpg")}
                    className="img-2"
                  />
                  <div className="div-9">
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: "28px",
                        color: "rgba(63,130,109,1)",
                      }}>
                      Frequently asked questions.
                    </span>
                    <br />
                    <br />
                  </div>
                  <div className="div-10">
                    <div className="text">
                      Q.1: How long does the verification process take?
                    </div>
                    <div className="text">
                      Q.2: Can we submit multiple items in the same submission?
                    </div>
                    <div className="text">
                      Q.3: What is the cost of the verification process?
                    </div>
                    {/* <div className="text">
                      Q.1: Lorem ipsum dolor sit amet?
                    </div> */}
                    {/* <br />
                    Q.1: Lorem ipsum dolor sit amet?
                    <br />
                    <br />
                    Q.2: consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt?
                    <br />
                    <br />
                    Q.3: voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur?
                    <br />
                    <br />
                    <br />{" "} */}
                    <div style={{ marginTop: "92px", textAlign: "center" }}>
                      <span
                        style={{
                          fontSize: "24px",
                          color: "rgba(63,130,109,1)",
                        }}>
                        Read More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text {
          font-family: Inter, sans-serif;
          font-size: 28px;
          font-weight: 600;
          color: #333;
          margin-bottom: 40px;
        }
        .faq {
          background-color: #fff;
          display: flex;
          // padding-top: 20px;
          flex-direction: column;
        }
        .main-container {
          // border-radius: 44px;
          background-color: rgba(255, 255, 255, 1);
          // border: 1px solid rgba(0, 0, 0, 1);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          width: 100%;
          flex-direction: column;
          // padding: 50px 0 0;
        }
        @media (max-width: 991px) {
          .main-container {
            max-width: 100%;
          }
        }
        .menu-bar-container {
          align-self: center;
          display: flex;
          margin-top: 39px;
          width: 100%;
          max-width: 1291px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .menu-bar-container {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div {
          color: #3f826d;
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          flex-grow: 1;
          flex-basis: auto;
          font: 400 36px Inter, sans-serif;
        }
        .items {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-size: 24px;
          color: #000;
          font-weight: 100;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .items {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-2,
        .div-3,
        .div-4,
        .div-5 {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          font-family: Inter, sans-serif;
          font-weight: 400;
        }
        .middle-bar-container {
          background-color: #3f826d;
          width: 100%;
          padding: 50px 60px 100px;
        }
        @media (max-width: 991px) {
          .middle-bar-container {
            max-width: 100%;
            margin-bottom: 40px;
            padding: 0 20px;
          }
        }
        .div-6 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-6 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 57%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .image-box {
          display: flex;
          margin-top: 18px;
          flex-direction: column;
          font-size: 32px;
          color: #fff;
          font-weight: 300;
        }
        @media (max-width: 991px) {
          .image-box {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-7 {
          font-family: Inter, sans-serif;
          align-self: start;
          margin-left: 48px;
        }
        @media (max-width: 991px) {
          .div-7 {
            margin-left: 10px;
          }
        }
        .img {
          aspect-ratio: 1.69;
          object-fit: auto;
          object-position: center;
          width: 100%;
          margin-top: 48px;
        }
        @media (max-width: 991px) {
          .img {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 43%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-8 {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 725px;
          color: #3f826d;
          padding: 8px 0 0 100px;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .img-2 {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-9 {
          position: relative;
          text-align: center;
          align-self: center;
          font: 400 36px Inter, sans-serif;
          // margin-top: 45px;
          width: 80%;
        }
        .div-10 {
          position: relative;
          margin-top: 0px;
          font: 700 32px Inter, sans-serif;
          margin-top: 45px;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  )
}
