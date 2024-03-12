import React, { useState, useEffect } from "react";
import { client } from "../client";
import { about, aboutMe } from "../utils/data";
import  { About }  from "../components";

const AboutFeed = () => {
  const [feed, setFeed] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const query = about;

    client
      .fetch(query)
      .then((data) => {
        setFeed(data);
        //console.log(data);
      })
      .catch((error) => {
        console.log('Error fetching About data:', error);
      });
  }, []);

  useEffect(() => {
    const query = aboutMe;

    client
      .fetch(query)
      .then((data) => {
        setDetails(data);
        //console.log(data);
      })
      .catch((error) => {
        console.log('Error fetching About Details data:', error);
      });
  }, []);

  return (
    <>
      { feed && <About aboutdata={feed} aboutfeed={details} /> }
    </>
  );
};

export default AboutFeed;
