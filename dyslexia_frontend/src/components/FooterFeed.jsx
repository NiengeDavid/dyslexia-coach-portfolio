import React, { useState, useEffect } from "react";
import { client } from "../client";
import { sections, socials } from "../utils/data";
import  { Footer }  from "../components";

const FooterFeed = () => {
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
            //console.log('Error fetching Section data:', error);
          });
    }, [])

    useEffect(() => {
        const query = socials;

        client
          .fetch(query)
          .then((data) => {
            setFeed(data);
            //console.log(data);
          })
          .catch((error) => {
            //console.log('Error fetching Partners data:', error);
          });
    }, [])

  return (
    <div>{ feed && <Footer data={feed} title={section} /> }</div>
  )
}

export default FooterFeed;