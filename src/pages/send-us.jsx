import * as React from "react"
import Navbar from "../components/navbar"

export default function SendUsYourProduct(props) {
  return (
    <>
      <div className="send-us-your-product">
        <div className="main-container">
          <Navbar />
          <div className="middle-bar-container">
            <div className="div-6">
              <div className="column">
                <div className="apply-forum">
                  <div className="div-7">
                    <span style={{ fontWeight: "600", fontSize: "32px" }}>
                      Drop your information and the product below and we’ll run
                      your request!
                    </span>
                  </div>
                  <div className="div-8">
                    Full Name: <br />
                    <br />
                    Email: <br />
                    <br />
                    Product: <br />
                    <br />
                    Phone number:{" "}
                  </div>
                  <div className="submit-box">Submit</div>
                </div>
              </div>
              <div className="column">
                <div className="center-image">
                  <img
                    loading="lazy"
                    src={require("../images/product.jpg")}
                    className="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .send-us-your-product {
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
        .div-2 {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          font-family: Inter, sans-serif;
          font-weight: 400;
          flex-grow: 1;
          flex-basis: auto;
        }
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
          padding: 40px 75px 100px;
        }
        @media (max-width: 991px) {
          .middle-bar-container {
            max-width: 100%;
            margin-bottom: 40px;
            padding: 0 20px;
          }
        }
        .div-6 {
          display: flex;
          flex-direction: row;
          // flex-grow: 1;
          gap: 40px;
        }
        @media (max-width: 991px) {
          .div-6 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          // line-height: normal;
          max-width: 50%;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .apply-forum {
          border-radius: 75px;
          background-color: #a5ceb8;
          display: flex;
          flex-direction: column;
          font-size: 24px;
          color: #000;
          font-weight: 500;
          width: 100%;
          padding: 47px 40px;
        }
        @media (max-width: 991px) {
          .apply-forum {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-7 {
          color: #3f826d;
          font-family: Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
          }
        }
        .div-8 {
          font-family: Inter, sans-serif;
          margin-top: 61px;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .submit-box {
          font-family: Inter, sans-serif;
          border-radius: 46px;
          background-color: #3f826d;
          align-self: center;
          margin-top: 68px;
          width: 296px;
          max-width: 100%;
          align-items: center;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
          padding: 8px 60px 15px;
        }
        @media (max-width: 991px) {
          .submit-box {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .img {
          object-fit: auto;
          object-position: center;
          max-width: 100%;
          // margin: auto 0;
          // max-height: 50%;
        }
        @media (max-width: 991px) {
          .img {
            max-width: 100%;
            margin-top: 40px;
            max-height: 50%;
          }
        }
        .center-image {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      `}</style>
    </>
  )
}
