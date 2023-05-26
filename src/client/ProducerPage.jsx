import getProducer from '@wasp/queries/getProducer'
import getStrains from '@wasp/queries/getStrains'
import { useQuery } from '@wasp/queries'
import Header from './Header.jsx'

const ProducerPage = (props) => {
    const { data: producer, isFetching, error } = useQuery(getProducer, {id: parseInt(props.match.params.id)})
    const { data: strains, isFetching_strains, error_strains } = useQuery(getStrains, {id: parseInt(props.match.params.id)})
    return (
        <div className='flex flex-col items-center justify-center h-screen py-16'>
            <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
            <Header />
            {isFetching && 'Fetching...'}
            {error && 'Error: ' + error}
            {producer && <ProdProfile {...producer} />}

            {isFetching_strains && 'Fetching...'}
            {error_strains && 'Error: ' + error_strains}
            {strains && <StrainList strains={strains} />}
            </div>
        </div>
    )
}

const ProdProfile = (props) => {
    return (
        <div className='info'>
            <h1>{props.name}</h1>
            <h2>{props.location}</h2>
            <h3>{props.contact}</h3>
        </div>
    )
}

const StrainList = (props) => {
    return (
        <div className='flex flex-col items-center justify-center'>
        <div className='strains'>
            <h1 className='font-bold'>Strains</h1>
            {props.strains.map((strain, idx) => <Strain key={idx} strain={strain} />)}
        </div>
        </div>
    )   
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

export default ProducerPage