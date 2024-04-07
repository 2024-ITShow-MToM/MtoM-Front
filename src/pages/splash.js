import React, { useEffect } from 'react';

import Splash from "../components/splash/splash";

function SplashPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/signin';
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Splash />
        </>
    )
}

export default SplashPage;