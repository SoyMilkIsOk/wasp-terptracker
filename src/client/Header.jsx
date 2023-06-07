import { Link } from 'react-router-dom'
import terpTrackerLogo from './img/terptracker-logo.png'
import logout from '@wasp/auth/logout.js'
import { MdLogout } from 'react-icons/md'

const Header = () => {

    return (
        <div className="flex flex-col justify-center items-center">
                <Link className="" to='/main'>
                    <img className="w-32 h-32 ml-4" src={terpTrackerLogo} alt="terptracker" />
                </Link>
                <button onClick={logout} className='logout mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'> <MdLogout className='text-white' /> </button>
        </div>

    )
}

export default Header
