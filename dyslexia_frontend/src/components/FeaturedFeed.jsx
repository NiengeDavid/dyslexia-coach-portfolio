import React, { useState, useEffect } from "react";
import { client } from "../client";
import { sections, featured } from "../utils/data";
import  { Featured }  from "../components";

const FeaturedFeed = () => {
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
        const query = featured;

        client
          .fetch(query)
          .then((data) => {
            setFeed(data);
            //console.log(data);
          })
          .catch((error) => {
            console.log('Error fetching Featured-On data:', error);
          });
    }, [])
    


  return (
    <div>{ feed && <Featured data={feed} title={section} /> }</div>
  )
}

export default FeaturedFeed;