import terpTrackerLogo from './terptracker-logo.png'
import getProducers from '@wasp/queries/getProducers'
import getStrains from '@wasp/queries/getStrains'
import { Link } from 'react-router-dom'
import './Main.css'
import { useQuery } from '@wasp/queries'

const MainPage = () => {

  const { data: producers, isFetching_producers, error_producers } = useQuery(getProducers)
  const { data: strains, isFetching_strains, error_strains } = useQuery(getStrains)

  return (
    <div className="container">
      <main>
        <div className="logo">
          <img src={terpTrackerLogo} alt="terptracker" />
        </div>
        <div className='search'></div>
        <div className='top-growers'>
          <h2>Top Producers</h2>
          {producers && <TopProducers producers = {producers}/>}
        </div>
        <div className='top-strains'>
          <h2>Top Strains</h2>
          {strains && <TopStrains strains = {strains}/>}
        </div>
      </main>
    </div>
  )
}

export default MainPage

const Producer = (props) => {

  return (
    <div className='flex'>
      <h3>{props.producer.name}</h3>
      <p>{props.producer.location}</p>
      <p className='rating'>{props.producer.rating}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">See Strains</button>

    </div>
  )
}

const TopProducers = (props) => {
  if (!props.producers?.length) return 'No producers found.'
  return props.producers.map((producer, idx) => <Producer producer={producer} key={idx} />)
}

const Strain = (props) => {
  
    return (
      <div>
        <h3>{props.strain.name}</h3>
        <p>{props.strain.type}</p>
        <p className='rating'>{props.strain.rating}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">See Reviews</button>
  
      </div>
    )
  }

const TopStrains = (props) => {
    if (!props.strains?.length) return 'No strains found.'
    return props.strains.map((strain, idx) => <Strain strain={strain} key={idx} />)
  }




