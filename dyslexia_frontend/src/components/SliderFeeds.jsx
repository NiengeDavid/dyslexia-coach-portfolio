import React, { useState, useEffect } from "react";
import { client } from "../client";
import { slider } from "../utils/data";
import {Slider} from '../components';


const SliderFeeds = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
      const query = slider;

      client
        .fetch(query)
        .then((data) => { 
            setFeed(data);
            //console.log(data)
        })
        .catch((error) => {
            console.log('Error fetching Slider data:', error);
        })
    }, [])

    return (
        <div>
            {feed && <Slider slides={feed} />}
        </div>
    )
}

export default SliderFeeds;
