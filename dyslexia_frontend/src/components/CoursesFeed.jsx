import React, { useState, useEffect } from "react";
import { client } from "../client";
import { courses } from "../utils/data";
import  { Courses }  from "../components";

const CoursesFeed = () => {
    const [feed, setFeed] = useState(null);

    useEffect(() => {
        const query = courses;

        client
          .fetch(query)
          .then((data) => {
            setFeed(data);
            //console.log(data);
          })
          .catch((error) => {
            console.log('Error fetching Courses data:', error);
          });
    }, [])

  return (
    <div>{ feed && <Courses data={feed} /> }</div>
  )
}

export default CoursesFeed;