import getProducer from '@wasp/queries/getProducer'
import getStrain from '@wasp/queries/getStrain'
import getReviews from '@wasp/queries/getReviews'
import getUser from '@wasp/queries/getUser'
import { useQuery } from '@wasp/queries'
import Header from './Header.jsx'
import { Link } from 'react-router-dom'
import { MdStar } from 'react-icons/md'

const StrainPage = (props) => {
    const { data: strain, isFetching, error } = useQuery(getStrain, { id: parseInt(props.match.params.id) })
    const { data: reviews, isFetching_reviews, error_reviews } = useQuery(getReviews, { id: parseInt(props.match.params.id) })
    return (
        <div className='flex flex-col items-center justify-center h-min-screen py-16'>
            <div className="p-6 max-w-lg w-full bg-white shadow-md rounded-md">
                <Header />
                {isFetching && 'Fetching...'}
                {error && 'Error: ' + error}

                <div className='mt-4 flex flex-row items-center justify-between max-w-lg'>
                    {strain && <StrainProfile {...strain} />}
                    <Link to={`/add-review/${props.match.params.id}`}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Add Review</button>
                    </Link>
                </div>

                {strain && <StrainPics {...strain} />}

                {isFetching_reviews && 'Fetching...'}
                {error_reviews && 'Error: ' + error_reviews}
                {reviews && <ReviewList reviews={reviews} />}
            </div>
        </div>
    )
}

const StrainProfile = (props) => {
    return (
        <>
            <div className='info flex flex-row items-center justify-center space-x-4'>
                <div className="circle w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center"><MdStar className="text-white w-20 h-20" /></div>
                <div>
                    <h1 className="text-2xl font-bold">{props.name}</h1>
                    <h3 className="text-lg italic">{props.THC}%</h3>
                    <StrainTags />
                </div>
            </div>
        </>
    )
}

const StrainTags = (props) => {
    return (
        <div className='tags mt-2 flex flex-row items-center justify-center space-x-1'>
            <div className="tag bg-orange-300 rounded-full flex items-center justify-center px-2"><p className='text-white'>Fruity</p></div>
            <div className="tag bg-yellow-300 rounded-full flex items-center justify-center px-2"><p className='text-white'>Sativa</p></div>
            <div className="tag bg-red-300 rounded-full flex items-center justify-center px-2"><p className='text-white'>Racy</p></div>
        </div>
    )
}

const StrainPics = (props) => {
    return (
        <>
            <h1 className='mt-4 font-bold text-2xl'> Pictures </h1>
            <div className='pics mt-4 flex flex-row items-center justify-center space-x-4'>
                <div className="circle w-32 h-32 bg-gray-300 flex items-center justify-center"><MdStar className="text-white w-20 h-20" /></div>
                <div className="circle w-32 h-32 bg-gray-300 flex items-center justify-center"><MdStar className="text-white w-20 h-20" /></div>
                <div className="circle w-32 h-32 bg-gray-300 flex items-center justify-center"><MdStar className="text-white w-20 h-20" /></div>
                <div className="circle w-32 h-32 bg-gray-300 flex items-center justify-center"><MdStar className="text-white w-20 h-20" /></div>
            </div>
        </>

    )
}

const ReviewList = (props) => {
    return (
        <div className='flex flex-col'>
            <div className='reivews'>
                <h1 className='font-bold text-2xl mt-4'>Reviews</h1>
                {props.reviews.map((review, idx) => <Review key={idx} review={review} />)}
            </div>
        </div>
    )
}

const Review = (props) => {
    return (
        <div className='flex flex-row items-center justify-between space-x-4 p-4 m-4 bg-gray-100 rounded shadow'>
            <h3 className="text-lg font-semibold">{props.review.username}</h3>
            <p>{props.review.rating} ⭐️</p>
            <p className='rating'>{props.review.comment}</p>
        </div>
    )
}

export default StrainPage