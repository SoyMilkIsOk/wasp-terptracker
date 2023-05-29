//react page for under construction page
import Header from "./Header"
import { Link } from 'react-router-dom'
import './Main.css'
import terpTrackerLogo from './img/terptracker-logo.png'

const UnderConstructionPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-sm py-16 mx-4 md:py-16">
            <main className="p-6 max-w-md w-full bg-white shadow-md rounded-md mx-4">
                <img className="w-32 h-32 ml-5" src={terpTrackerLogo} alt="terptracker" />
                <div className="py-6 w-3/4 flex flex-row items-center space-x-8 justify-center">
                    <p className="text-4xl">🚧</p>
                    <p className="text-xl text-gray-500 text-center"> TerpTracker coming soon.</p>
                    <p className="text-4xl">🚧</p>
                </div>

                <div className="py-6 w-3/4 flex flex-row items-center space-x-8 justify-center">
                    <p className="text-4xl">✉️</p>
                    <p className="text-xl text-gray-500 text-center"><a href="https://terpmetrix.com" target="_blank" rel="noreferrer">Sign up for updates</a>!</p>
                    <p className="text-4xl">✉️</p>
                </div>

                <div className="py-6 w-3/4 flex flex-row items-center space-x-8 justify-center">
                    <p className="text-4xl">🔍</p>
                    <p className="text-xl text-gray-500 text-center"><Link to='/terp-hunt'>TerpHunt</Link> with LocolLove</p>
                    <p className="text-4xl">🔍</p>
                </div>
            </main>
        </div>
    )
}



export default UnderConstructionPage