import React, { useState, useEffect } from "react";
import axios from "axios";
import NextLaunchCountdown from "./NextLaunchCountdown";
import Payload from "./Payload";
import LaunchPad from "./LaunchPad";
import LoadingPage from "../LoadingPage";
import RocketPic from "./RocketPic";
import LaunchMap from "./LaunchMap";
import Modal from "../Modal";
import Weather from "./Weather";
import LandPad from "./LandPad";
import Footer from "../../components/Footer";

const NextLaunchMain = () => {
  const [nextLaunchItems, setnextLaunchitems] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [launchPad, setLaunchPad] = useState([]);
  const [rocketItems, setRocketItems] = useState([]);
  const [weatherItems, setWeatherItems] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const nextLaunchAPI = "https://api.spacexdata.com/v4/launches/next";

    axios({
      method: "GET",
      url: nextLaunchAPI,
    })
      .then((res) => {
        setnextLaunchitems(res.data);
        setisLoading(false);
      })
      .catch((e) => {
        console.log(`Next Launch API ${e}`);
      });
  }, []);

  useEffect(() => {
    const nextLaunchPad = `https://api.spacexdata.com/v4/launchpads/${nextLaunchItems.launchpad}`;

    axios({
      method: "GET",
      url: nextLaunchPad,
    })
      .then((res) => {
        setLaunchPad(res.data);
      })
      .catch((e) => {
        console.log(`LaunchPad API ${e}`);
      });
  }, [nextLaunchItems]);

  useEffect(() => {
    const rocketData = `https://api.spacexdata.com/v4/rockets/${nextLaunchItems.rocket}`;

    axios({
      method: "GET",
      url: rocketData,
    })
      .then((res) => {
        setRocketItems(res.data);
      })
      .catch((e) => {
        console.log(`Rocket API ${e}`);
      });
  }, [nextLaunchItems]);

  useEffect(() => {
    const weatherData = `https://api.openweathermap.org/data/2.5/weather?lat=${launchPad.latitude}&lon=${launchPad.longitude}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER}`;

    axios({
      method: "GET",
      url: weatherData,
    })
      .then((res) => {
        setWeatherItems(res.data);
      })
      .catch((e) => {
        console.log(`OpenWeathermap API ${e}`);
      });
  }, [launchPad]);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <>
      <section className="showcase">
        <div className="next-launch-grid">
          <div className="main-mission-box card">
            <div className="count-container">
              <div className="count-left-container">
                <div className="mission-name-box">
                  <h1>{nextLaunchItems.name}</h1>
                </div>

                <div className="clock-box">
                  <NextLaunchCountdown time={nextLaunchItems.date_utc} />
                </div>

                <div className="stream-box">
                  {nextLaunchItems.details ? (
                    <p className="nl-details">{nextLaunchItems.details}</p>
                  ) : (
                    <p className="nl-details">Mission Details Coming Soon.</p>
                  )}
                </div>

                <div className="stream-modal">
                  {nextLaunchItems.links.youtube_id ? (
                    <button onClick={() => setisOpen(true)} className="title">
                      <span className="btn-text">LIVE STREAM</span>
                    </button>
                  ) : (
                    <p>Check Back At T -2hrs For Live Stream</p>
                  )}
                  <Modal
                    link={nextLaunchItems.links.youtube_id}
                    open={isOpen}
                    onClose={() => setisOpen(false)}
                  />
                </div>
              </div>

              <div className="count-rocket-box">
                <RocketPic
                  rocketItems={rocketItems}
                  payloadItems={nextLaunchItems.payloads}
                />
              </div>
            </div>
          </div>

          <div className="launch-site-box card">
            <LaunchPad launchLocation={nextLaunchItems.launchpad} />
            <Weather forcast={weatherItems} />
            <div className="map">
              <div className="leaflet-container">
                <LaunchMap
                  latitude={launchPad.latitude}
                  longitude={launchPad.longitude}
                  launchName={nextLaunchItems.name}
                />
              </div>
            </div>
          </div>

          <div className="mission-stats-box">
            <table className="info-table">
              <tbody>
                <tr>
                  <td>
                    <span className="title">Rocket</span>
                  </td>
                  <td>{rocketItems.name}</td>
                </tr>
                <tr>
                  <td>
                    <span className="title">Flight No</span>
                  </td>
                  <td>{nextLaunchItems.flight_number}</td>
                </tr>
                <LandPad landpadId={nextLaunchItems.cores[0].landpad} />
                <Payload payloadId={nextLaunchItems.payloads} />
              </tbody>
            </table>
          </div>

          <div className="mission-badge-box card">
            {nextLaunchItems.links.patch.small ? (
              <img
                className="badge-img"
                src={nextLaunchItems.links.patch.small}
                alt="Mission Badge"
              />
            ) : (
              <h3> No Mission Patch Available </h3>
            )}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default NextLaunchMain;
