import React from 'react';
import NavBar from "../components/Navbar";


const MyApp = ({Component, pageProps }) => {
    return (
        <React.Fragment>
            <NavBar />
            <Component {...pageProps} />
        </React.Fragment>
    )
}


export default MyApp;

