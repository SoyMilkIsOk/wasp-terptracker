import getProducer from '@wasp/queries/getProducer'
import getStrain from '@wasp/queries/getStrain'
import getReviews from '@wasp/queries/getReviews'
import getUser from '@wasp/queries/getUser'

import { useQuery } from '@wasp/queries'
import Header from './Header.jsx'
import { Link } from 'react-router-dom'

const StrainPage = (props) => {
    const { data: strain, isFetching, error } = useQuery(getStrain, {id: parseInt(props.match.params.id)})
    const { data: reviews, isFetching_reviews, error_reviews } = useQuery(getReviews, {id: parseInt(props.match.params.id)})
    return (
        <div className='flex flex-col items-center justify-center h-min-screen py-16'>
            <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
            <Header />
            {isFetching && 'Fetching...'}
            {error && 'Error: ' + error}
            {strain && <StrainProfile {...strain} />}

            <Link to={`/add-review/${props.match.params.id}`}>
            <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Add Review</button>
            </Link>

            {isFetching_reviews && 'Fetching...'}
            {error_reviews && 'Error: ' + error_reviews}
            {reviews && <ReviewList reviews={reviews} />}
            </div>
        </div>
    )
}

const StrainProfile = (props) => {
    return (
        <div className='info'>
            <h1>{props.name}</h1>
            <h3>{props.THC}</h3>
        </div>
    )
}

const ReviewList = (props) => {
    return (
        <div className='flex flex-col items-center justify-center'>
        <div className='reivews'>
            <h1 className='font-bold'>Reviews</h1>
            {props.reviews.map((review, idx) => <Review key={idx} review={review} />)}
        </div>
        </div>
    )   
}

const Review = (props) => {
    return (
      <div className='flex flex-row items-center justify-between space-x-4 p-4 m-4 bg-gray-100 rounded shadow'>
        <h3 className="text-lg font-semibold">{props.review.username}</h3>
        <p>{props.review.rating}</p>
        <p className='rating'>{props.review.comment}</p>  
      </div>
    )
  }

export default StrainPage