import React from 'react';
import App from "next/app"
import NavBar from "../components/Navbar";
import axios from "axios"

const MyApp = ({Component, pageProps }) => {
    return (
        <React.Fragment>
            <NavBar />
            <Component {...pageProps} />
        </React.Fragment>
    )
}


export default MyApp;

