import React, { useState, useEffect } from "react";
import { client } from "../client";
import { sections } from "../utils/data";
import  { Newsletter }  from "../components";

const NewsletterFeed = () => {
    const [section, setSection] = useState(null);

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

    return (
        <div>{ section && <Newsletter title={section} /> }</div>
    )
}

export default NewsletterFeed;