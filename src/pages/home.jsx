import * as React from "react"
import Navbar from "../components/navbar"
import HomeCard from "../components/home-card"

export default function HomePageNew(props) {
  return (
    <>
      <div className="home-page">
        <Navbar />
        <div className="middle-container">
          <div className="div-5">
            <div className="column">
              <img
                loading="lazy"
                src={require("../images/home.jpg")}
                className="img"
                alt="Luxury Image"
              />
            </div>
            <div className="column-2">
              <div className="div-6">
                <span style={{ fontSize: 48 }}>
                  Luxchain: Where Authenticity Meets Luxury, Ensuring Every
                  Detail Counts!
                </span>
                <br />
                <br />
                <span style={{ fontSize: 32 }}>
                  Experience the True Essence of Luxury: Verified by Luxchain.
                </span>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="div-7">
            <HomeCard content="Using industry leading level of secure and encryption data measures." />
            <HomeCard content="A mobile number and a smartphone is all you need to get started!" />
            <HomeCard content="Enjoy no hidden fees and no costs!" />
            <HomeCard content="Personalize your experience and take control." />
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-page {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          // padding: 50px 0;
        }
        .menu-bar-container {
          align-self: center;
          display: flex;
          margin-top: 20px;
          width: 100%;
          max-width: 1291px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .menu-bar-container {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .menu-text {
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
        .div {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          font-family: Inter, sans-serif;
          font-weight: 400;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-2 {
          -webkit-text-stroke-width: 1;
          -webkit-text-stroke-color: #000;
          font-family: Inter, sans-serif;
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
        .middle-container {
          background-color: #3f826d;
          margin-top: 7px;
          width: 100%;
          padding: 50px 41px;
        }
        @media (max-width: 991px) {
          .middle-container {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-5 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-5 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .img {
          aspect-ratio: 1.27;
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
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-6 {
          color: #fff;
          font: 400 36px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .bottom-container {
          padding: 60px 60px 100px;
        }
        @media (max-width: 991px) {
          .bottom-container {
            max-width: 100%;
            margin: 40px 10px 0 0;
          }
        }
        .div-7 {
          gap: 40px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-7 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .box-1 {
          background-color: #d9d9d9;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          font-size: 24px;
          color: #3f826d;
          font-weight: 400;
          text-align: center;
          width: 100%;
          padding: 0 15px 45px 0;
        }
        @media (max-width: 991px) {
          .box-1 {
            margin-top: 40px;
          }
        }
        .div-8 {
          background-color: #3f826d;
          border-radius: 50%;
          z-index: 10;
          margin-top: -28px;
          height: 82px;
        }
        .div-9 {
          font-family: Inter, sans-serif;
          margin-top: 5px;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .box-2 {
          background-color: #d9d9d9;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          font-size: 24px;
          color: #3f826d;
          font-weight: 400;
          text-align: center;
          width: 100%;
          padding: 0 23px 45px 0;
        }
        @media (max-width: 991px) {
          .box-2 {
            margin-top: 40px;
          }
        }
        .div-10 {
          background-color: #3f826d;
          border-radius: 50%;
          z-index: 10;
          margin-top: -28px;
          height: 82px;
        }
        .div-11 {
          font-family: Inter, sans-serif;
          margin-top: 5px;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .box-3 {
          background-color: #d9d9d9;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          font-size: 24px;
          color: #3f826d;
          font-weight: 400;
          text-align: center;
          width: 100%;
          padding: 0 18px 50px 0;
        }
        @media (max-width: 991px) {
          .box-3 {
            margin-top: 40px;
          }
        }
        .div-12 {
          background-color: #3f826d;
          border-radius: 50%;
          z-index: 10;
          margin-top: -28px;
          height: 82px;
        }
        .div-13 {
          font-family: Inter, sans-serif;
          width: 170px;
          margin: 5px 0 0 20px;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-left: 10px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .box-4 {
          background-color: #d9d9d9;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 24px;
          color: #3f826d;
          font-weight: 400;
          text-align: center;
          width: 100%;
          padding: 0 22px 50px 0;
        }
        @media (max-width: 991px) {
          .box-4 {
            margin-top: 40px;
          }
        }
        .div-14 {
          background-color: #3f826d;
          border-radius: 50%;
          align-self: start;
          z-index: 10;
          margin-top: -28px;
          height: 82px;
        }
        .div-15 {
          font-family: Inter, sans-serif;
          align-self: end;
          margin-top: 5px;
          width: 265px;
          padding-left: 110px;
        }
      `}</style>
    </>
  )
}
