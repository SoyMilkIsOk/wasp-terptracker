import createProducer from '@wasp/actions/createProducer'
import Header from './Header.jsx'


const AddProducerPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen py-16">
            <main className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
                <Header />
                <div className="flex justify-center items-center">
                    <span className="text-gray-700 font-semibold text-2xl">Add New Producer</span>
                </div>
                <AddProducerForm />
            </main>
        </div>
    )
}


const AddProducerForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const name = event.target.prodName.value
            const location = event.target.location.value
            const contact = event.target.contact.value
            event.target.reset()
            await createProducer({ name, location, contact })
        } catch (err) {
            window.alert('Error: ' + err.message)
        }
    }
    return (
        <form className="grid grid-cols-1 gap-6 mt-4" onSubmit={handleSubmit}>
            <label>
                <span className="text-gray-700">Name</span>
                <input className="mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" type="text" name="prodName" />
            </label>
            <label>
                <span className="text-gray-700">Location</span>
                <input className="mt-1 block p-2.5 h-12 w-full rounded-md bg-gray-100" type="text" name="location" />
            </label>
            <label>
                <span className="text-gray-700">Contact</span>
                <input className="mt-1 block p-2.5 h-12 w-full rounded-md bg-gray-100" type="text" name="contact" />
            </label>
            {/* <label>
                <span className="text-gray-700">Rating</span>
                <input className="mt-1 block w-full rounded-md bg-gray-100" type="number" name="rating" />
            </label> */}
            <button className="px-5 py-3 mt-4 text-white font-medium tracking-wide bg-blue-500 rounded hover:bg-blue-600" type="submit">Submit</button>
        </form>
    )
}


export default AddProducerPage
