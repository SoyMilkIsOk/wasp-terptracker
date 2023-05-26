import getProducers from '@wasp/queries/getProducers'
import getStrains from '@wasp/queries/getStrains'
import { Link } from 'react-router-dom'
import './Main.css'
import { useQuery } from '@wasp/queries'
import logout from '@wasp/auth/logout.js'
import Header from './Header.jsx'

const MainPage = () => {

  const { data: producers, isFetching_producers, error_producers } = useQuery(getProducers)
  const { data: strains, isFetching_strains, error_strains } = useQuery(getStrains)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16">
      <main className="p-6 max-w-2xl w-full bg-white shadow-md rounded-md">
      <Header />
        <div className='search'></div>
        <div className='admin-menu flex flex-row space-x-4'>
          <div className='add-producer'>
            <Link to='/add-producer'>
              <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Add Producer</button>
            </Link>
          </div>
          <div className='add-strain'>
            <Link to='/add-strain'>
              <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Add Strain</button>
            </Link>
          </div>
        </div>
        <div className='top-growers w-3/4'>
          <h2 className="text-2xl font-bold text-left">Top Producers</h2>
          {producers && <TopProducers producers={producers} />}
        </div>
        <div className='top-strains w-3/4'>
          <h2 className="text-2xl font-bold text-left">Top Strains</h2>
          {strains && <TopStrains strains={strains} />}
        </div>
        <button onClick={logout} className='logout mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'> Logout </button>
      </main>
    </div>
  )
}

export default MainPage

const Producer = (props) => {

  return (
    <div className='flex flex-row items-center justify-between space-x-4 p-4 m-4 bg-gray-100 rounded shadow'>
      <h3 className="text-lg font-semibold">{props.producer.name}</h3>
      <p>{props.producer.location}</p>
      <p className='rating'>{props.producer.rating}</p>
      <Link to={`/producer/${props.producer.id}`}>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">See Strains</button>
      </Link>

    </div>
  )
}

const TopProducers = (props) => {
  if (!props.producers?.length) return 'No producers found.'
  return props.producers.map((producer, idx) => <Producer producer={producer} key={idx} />)
}

const Strain = (props) => {

  return (
    <div className='flex flex-row items-center justify-between space-x-4 p-4 m-4 bg-gray-100 rounded shadow'>
      <h3 className="text-lg font-semibold">{props.strain.name}</h3>
      <p>{props.strain.type}</p>
      <p className='rating'>{props.strain.rating}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">See Reviews</button>

    </div>
  )
}

const TopStrains = (props) => {
  if (!props.strains?.length) return 'No strains found.'
  return props.strains.map((strain, idx) => <Strain strain={strain} key={idx} />)
}
