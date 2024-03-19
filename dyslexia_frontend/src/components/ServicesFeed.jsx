import React, { useState, useEffect } from "react";
import { client } from "../client";
import { sections, services } from "../utils/data";
import  { Services }  from "../components";

const ServicesFeed = () => {
    const [section, setSection] = useState(null);
    const [feed, setFeed] = useState(null);

    useEffect(() => {
        const query = sections;

        client
          .fetch(query)
          .then((data) => {
            setSection(data);
            //console.log(data);
          })
          .catch((error) => {
            console.log('Error fetching Section data:', error);
          });
    }, [])

    useEffect(() => {
        const query = services;

        client
          .fetch(query)
          .then((data) => {
            setFeed(data);
            //console.log(data);
          })
          .catch((error) => {
            console.log('Error fetching Services data:', error);
          });
    }, [])

  return (
    <div>{ feed && <Services data={feed} title={section} /> }</div>
  )
}

export default ServicesFeed;