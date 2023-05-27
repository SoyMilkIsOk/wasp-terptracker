import createReview from '@wasp/actions/createReview'
import getStrain from '@wasp/queries/getStrain'
import Header from './Header.jsx'
import { useQuery } from '@wasp/queries'

const AddReviewPage = ( props ) => {
    const id = props.match.params.id
    return (
        <div className="flex flex-col items-center justify-center h-screen py-16">
            <main className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
                <Header />
                <div className="flex justify-center items-center">
                    <span className="text-gray-700 font-semibold text-2xl">Add New Review</span>
                </div>

                <AddReviewForm id={id} />

            </main>
        </div>
    )
}

const AddReviewForm = (strain) => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const rating = parseInt(event.target.rating.value)
            const comment = event.target.comment.value
            const strainID = parseInt(strain.id)
            event.target.reset()
            await createReview({rating, comment, strainID})
        } catch (err) {
            window.alert('Error: ' + err.message)
        }
    }
    return (
        <form className="grid grid-cols-1 gap-6 mt-4" onSubmit={handleSubmit}>
            <label>
                <span className="text-gray-700">Rating</span>
                <input className="form-input mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" type="number" name="rating" min={0} max={10}/>
            </label>
            <label>
                <span className="text-gray-700">Comment</span>
                <input className="form-input mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" type="text" name="comment" />
            </label>

            <button className="px-5 py-3 mt-4 text-white font-medium tracking-wide bg-blue-500 rounded hover:bg-blue-600" type="submit">Submit</button>
        </form>
    )
}

export default AddReviewPage
