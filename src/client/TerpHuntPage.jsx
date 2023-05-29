import React, { useState, useRef, useEffect } from 'react';
import './Main.css'
import terpTrackerLogo from './img/terptracker-logo.png'

const TerpHuntPage = () => {
    const [iframeHeight, setIframeHeight] = useState('3000px'); // initial height
    const loadCounter = useRef(0); // counter to track iframe loads
    const [isMobile, setIsMobile] = useState(window.innerWidth < 705);

    // Listener for window resize
    useEffect(() => {
        const handleResize = () => {
            const currentIsMobile = window.innerWidth < 705;
            setIsMobile(currentIsMobile);
            if (currentIsMobile) {
                setIframeHeight('5000px'); // adjust for mobile
            }
            else {
                setIframeHeight('3000px');
            }
            window.scrollTo(0, 0);
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleIframeLoad = () => {
        loadCounter.current += 1; // increment counter
        if ((loadCounter.current)%2 == 0 && loadCounter.current > 1) {
            // Rescale the iframe and scroll the window to an appropriate point
            // Adjust these values as needed
            if (isMobile) {
                setIframeHeight('1000px'); // adjust for mobile
                window.scrollTo(0, 200); // adjust for mobile
            } else {
                setIframeHeight('500px');
                window.scrollTo(0, 315);
            }
        } else
        if ((loadCounter.current)%2 == 1) {
            if (isMobile) {
                setIframeHeight('5000px'); // adjust for mobile
            }
            else {
                setIframeHeight('3000px');
            }
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-6 mx-4 md:py-16">
            <main className="p-6 max-w-2xl w-full bg-white shadow-md rounded-md mx-4">
                <TerpHuntHeader />
                <div className='google-survey py-6' style={{width: '90%'}}> 
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSflUAPGOLqu3n8uynqUMOnUjHcQdHxuY7TylV-KTxWpudvnjQ/viewform?embedded=true" 
                        width="100%" 
                        height={iframeHeight} 
                        onLoad={handleIframeLoad}
                        style={{border: "none"}}
                    >
                        Loading…
                    </iframe>
                </div>
            </main>
        </div>
    );
};

const TerpHuntHeader = () => {
    return (
        <div className='flex flex-col items-center justify-center max-w-md w-full p-6 m-4 bg-gray-100 rounded shadow'>
            
            <img className="w-32 h-32 ml-5" src={terpTrackerLogo} alt="terptracker" />
            <div className=''>
            <h3 className="text-4xl font-semibold pt-3 pb-1">TerpHunt</h3>
            </div>
            <p className='text-gray-500 text-sm'>powered by <a href='https://links.terpmetrix.com' target='_blank' rel='noreferrer'>Terpmetrix</a></p>
            <div className='text-center mt-4'><p>Help us find the best terpene profiles in the state!</p></div>
        </div>
    );
};

export default TerpHuntPage;
