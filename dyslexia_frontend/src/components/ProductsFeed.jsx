import React, { useState, useEffect } from "react";
import { client } from "../client";
import { sections, products } from "../utils/data";
import  { Products }  from "../components";


const ProductsFeed = () => {
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
        const query = products;

        client
          .fetch(query)
          .then((data) => {
            setFeed(data);
            //console.log(data);
          })
          .catch((error) => {
            console.log('Error fetching Products data:', error);
          });
    }, [])


    return (
        <div>{ feed && <Products data={feed} title={section} /> }</div>
    )
}

export default ProductsFeed;