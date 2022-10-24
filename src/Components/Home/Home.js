import React from 'react';
import {  Link , useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>This is home</h1>
            <Link to="/orders">
              <button className="btn">Orders</button>
            </Link>
        </div>
    );
};

export default Home;