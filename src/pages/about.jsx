import * as React from "react"
import Navbar from "../components/navbar"

export default function AboutUsNew(props) {
  return (
    <>
      <div className="about-us">
        <div className="main-container">
          <Navbar />
          <div className="middle-container">
            <div className="div-6">
              <div className="column">
                <img
                  loading="lazy"
                  src={require("../images/meeting.jpg")}
                  className="img"
                  alt="Luxury Image"
                />
              </div>
              <div className="column-2">
                <div className="text-box">
                  <div className="div-7">
                    About us
                    <br />
                    <br />
                    <span style={{ fontSize: 24 }}>
                      “At Luxchain, our mission is to ensure that every luxury
                      purchase is backed by authenticity and trust, offering
                      peace of mind to our discerning clientele.”
                    </span>
                  </div>
                  <div className="read-more-bar">Read More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-8">
            Luxchain was founded with a clear mission in mind: to redefine the
            luxury industry by offering a reliable platform for verifying the
            authenticity of luxury items. In a market often plagued by
            counterfeit products, we aim to instill confidence in consumers and
            uphold the integrity of renowned luxury brands. Our goal is to
            empower consumers to make informed decisions when purchasing luxury
            goods. By offering a trusted platform for verifying authenticity, we
            give our customers the confidence to indulge in their passion for
            luxury without the worry of counterfeit products.
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-us {
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
          align-items: center;
          // padding: 44px 20px;
        }
        @media (max-width: 991px) {
          .main-container {
            max-width: 100%;
          }
        }
        .menu-bar-container {
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
        .div-3 {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          font-family: Inter, sans-serif;
        }
        .div-4 {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          font-family: Inter, sans-serif;
        }
        .div-5 {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          font-family: Inter, sans-serif;
        }
        .middle-container {
          background-color: #3f826d;
          align-self: stretch;
          margin-top: 8px;
          width: 100%;
          padding: 1px 74px 1px 0;
        }
        @media (max-width: 991px) {
          .middle-container {
            max-width: 100%;
            padding-right: 20px;
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
          width: 67%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .img {
          aspect-ratio: 1.82;
          object-fit: auto;
          object-position: center;
          width: 100%;
          flex-grow: 1;
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
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .text-box {
          display: flex;
          flex-direction: column;
          align-self: stretch;
          color: #fff;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .text-box {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-7 {
          font: 700 38px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
          }
        }
        .read-more-bar {
          border-radius: 48px;
          background-color: #000;
          align-self: start;
          margin-top: 38px;
          justify-content: center;
          white-space: nowrap;
          padding: 32px 15px;
          font: 500 23px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .read-more-bar {
            white-space: initial;
          }
        }
        .div-8 {
          color: #3f826d;
          text-align: center;
          margin-top: 36px;
          font: 700 32px Inria Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          padding: 0 120px 100px;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  )
}
