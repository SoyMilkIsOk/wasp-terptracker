import { Link } from 'react-router-dom'
import terpTrackerLogo from './terptracker-logo.png'

const Header = () => {

    return (
        <Link to='/'>
            <div className="flex justify-center">
                <img className="w-32 h-32" src={terpTrackerLogo} alt="terptracker" />
            </div>
        </Link>
    )
}

export default Header
