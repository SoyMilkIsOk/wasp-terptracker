import { Link } from 'react-router-dom'
import terpTrackerLogo from './img/terptracker-logo.png'
import logout from '@wasp/auth/logout.js'

const Header = () => {

    return (
        <>
        <Link to='/'>
            <div className="flex justify-center">
                <img className="w-32 h-32 ml-4" src={terpTrackerLogo} alt="terptracker" />
            </div>
        </Link>
        <button onClick={logout} className='logout mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'> Logout </button>
        </>
    )
}

export default Header
