import getProducer from '@wasp/queries/getProducer'
import getStrains from '@wasp/queries/getStrains'
import { useQuery } from '@wasp/queries'
import Header from './Header.jsx'
import { Link } from 'react-router-dom'
import { MdStar } from 'react-icons/md'

const ProducerPage = (props) => {
    const { data: producer, isFetching, error } = useQuery(getProducer, { id: parseInt(props.match.params.id) })
    const { data: strains, isFetching_strains, error_strains } = useQuery(getStrains, { id: parseInt(props.match.params.id) })
    return (
        <div className='flex flex-col items-center justify-center h-screen py-16'>
            <div className="p-6 max-w-lg w-full bg-white shadow-md rounded-md">
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
        <>
            <div className='mt-4 info flex flex-row items-center justify-center space-x-4'>
                <div className="circle w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center"><MdStar className="text-white w-20 h-20" /></div>
                <div>
                    <h1 className='font-bold text-2xl'>{props.name}</h1>
                    <h2 className='italic font-bold text-lg'>{props.location}</h2>
                    <h3 className='italic text-lg'>{props.contact}</h3>
                </div>
            </div>
        </>
    )
}

const StrainList = (props) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='strains'>
                <h1 className='font-bold text-2xl mt-4'>Recent Drops</h1>
                {props.strains.map((strain, idx) => <Strain key={idx} strain={strain} />)}
            </div>
        </div>
    )
}

const Strain = (props) => {

    return (
        <div className='flex flex-row items-center justify-between space-x-4 p-4 m-4 bg-gray-100 rounded shadow'>
            <h3 className="text-lg font-semibold">{props.strain.name}</h3>
            <p>{props.strain.THC}%</p>
            <p className='rating'>{props.strain.rating}</p>
            <Link to={`/strain/${props.strain.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full max-h-12 w-34">See Reviews</button>
            </Link>
        </div>
    )
}

export default ProducerPage