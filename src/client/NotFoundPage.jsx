import { Redirect } from 'react-router-dom'
import './Main.css'
import terpTrackerLogo from './img/terptracker-logo.png'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {

    <div className="flex flex-col items-center justify-center h-sm py-16 mx-4 md:py-16">
        <main className="p-6 max-w-md w-full bg-white shadow-md rounded-md mx-4">
            <Link to='/'>
                <img className="w-32 h-32 ml-5" src={terpTrackerLogo} alt="terptracker" />
            </Link>
            <div className="py-6 w-3/4 flex flex-row items-center space-x-8 justify-center">
                <p className="text-4xl">🚧</p>
                <div className="flex flex-col">
                    <p className="text-3xl text-gray-700 text-center"> 404</p>
                    <p className="text-xl text-gray-500 text-center"> Page not found.</p>
                </div>
                <p className="text-4xl">🚧</p>
            </div>
        </main>
    </div>
}

export default NotFoundPage