import createReview from '@wasp/actions/createReview'
import Header from './Header.jsx'
import { useQuery } from '@wasp/queries'
import getStrain from '@wasp/queries/getStrain'
import updateProducerRating from '@wasp/actions/updateProducerRating'

const AddReviewPage = ( props ) => {
    const args = props.match.params.id
    return (
        <div className="flex flex-col items-center justify-center h-screen py-16">
            <main className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
                <Header />
                <div className="m-4 flex justify-center items-center">
                    <span className="text-gray-700 font-semibold text-2xl">Add New Review</span>
                </div>

                <AddReviewForm args={args} />

            </main>
        </div>
    )
}

const AddReviewForm = (args) => {
    const strainID = parseInt(args.args)
    const { data: strain, isFetching, error } = useQuery(getStrain, {id: strainID})

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const rating = parseInt(event.target.rating.value)
            const comment = event.target.comment.value
            event.target.reset()
            await createReview({rating, comment, strainID})

            // Make sure the strain data is available before trying to access producerId
            // if (strain) {
            //     const producerID = strain.producerId
            //     await updateProducerRating({producerID: producerID})
            // }
        } catch (err) {
            window.alert('Error: ' + err.message)
        }
    }

    // It's a good idea to show a loading state or handle error while the strain data is being fetched
    if (isFetching) return 'Loading...'
    if (error) return 'Error: ' + error.message

    return (
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <label>
                <span className="text-gray-700">Rating</span>
                <input className="form-input mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" type="number" name="rating" min={0} max={10}/>
            </label>
            <label>
                <span className="text-gray-700">Comment</span>
                <textarea className="form-input mt-1 p-2.5 block w-full rounded-md bg-gray-100" type="textarea" name="comment" />
            </label>

            <button className="px-5 py-3 mt-4 text-white font-medium tracking-wide bg-blue-500 rounded hover:bg-blue-600" type="submit">Submit</button>
        </form>
    )
}


export default AddReviewPage
