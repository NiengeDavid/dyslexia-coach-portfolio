import React, { useState, useEffect } from "react";
import { client } from "../client";
import { navfeed, menu } from "../utils/data";
import  { Navbar }  from ".";

const NavFeed = () => {
  const [feed, setFeed] = useState([]);
  const [nav, setNav] = useState([]);

  useEffect(() => {
    const query = navfeed;

    client
      .fetch(query)
      .then((data) => {
        setFeed(data);
        //console.log(data);
      })
      .catch((error) => {
        //console.log('Error fetching Navbar data:', error);
      });
  }, []);

  useEffect(() => {
    const query = menu;

    client
      .fetch(query)
      .then((data) => {
        setNav(data);
        //console.log(data);
      })
      .catch((error) => {
        //console.log('Error fetching Menu data:', error);
      });
  }, []);

  return (
    <>
      {feed && <Navbar data={feed} menu={nav} /> }
    </>
  );
};

export default NavFeed;
