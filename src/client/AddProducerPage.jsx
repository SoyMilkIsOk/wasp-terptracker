import createProducer from '@wasp/actions/createProducer'

const AddProducerPage = () => {
        return (
            <div>
                <h1>Add Strain</h1>
                <AddStrainForm />
            </div>
        )
    }


const AddProducerForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const name = event.target.strainName.value
            const location = event.target.producer.value
            const contact = event.target.contact.value
            event.target.reset()
            await createProducer({ name, location, contact })
        } catch (err) {
            window.alert('Error: ' + err.message)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="prodName" />
            </label>
            <label>
                Location:
                <input type="text" name="location" />
            </label>
            <label>
                Contact:
                <input type="text" name="contact" />
            </label>
            {/* <label>
                Rating:
                <input type="number" name="rating" />
            </label> */}
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Submit" />
        </form>
    )
}


export default AddProducerPage