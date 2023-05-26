import createStrain from '@wasp/actions/createStrain'
import getProducers from '@wasp/queries/getProducers'
import { useQuery } from '@wasp/queries'
import Header from './Header.jsx'

const AddStrainPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen py-16">
            <main className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
                <Header />
                <div className="flex justify-center items-center">
                    <span className="text-gray-700 font-semibold text-2xl">Add New Strain</span>
                </div>
                <AddStrainForm />
            </main>
        </div>
    )
}

const AddStrainForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const name = event.target.strainName.value
            const type = event.target.type.value
            const producerID = parseInt(event.target.producerID.value)
            const batchDate = new Date(event.target.batchDate.value)
            const THC = parseFloat(event.target.THC.value)
            event.target.reset()
            await createStrain({ name, type, producerID, batchDate, THC })
        } catch (err) {
            window.alert('Error: ' + err.message)
        }
    }

    const { data: producers, isFetching_producers, error_producers } = useQuery(getProducers)
    return (
        <form className="grid grid-cols-1 gap-6 mt-4" onSubmit={handleSubmit}>
            <label>
                <span className="text-gray-700">Name</span>
                <input className="form-input mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" type="text" name="strainName" />
            </label>
            <label>
                <span className="text-gray-700">Type</span>
                <input className="form-input mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" type="text" name="type" />
            </label>
            <label>
                <span className="text-gray-700">Producer</span>
                <select className="form-input mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" name="producerID">
                    {producers && producers.map((producer, idx) => <option value={producer.id} key={idx}>{producer.name}</option>)}
                </select>
            </label>
            <label>
                <span className="text-gray-700">Batch Date</span>
                <input className="form-input mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" type="date" name="batchDate" />
            </label>

            <label>
                <span className="text-gray-700">THC</span>
                <input className="form-input mt-1 p-2.5 h-12 block w-full rounded-md bg-gray-100" type="number" name="THC" />
            </label>
            <button className="px-5 py-3 mt-4 text-white font-medium tracking-wide bg-blue-500 rounded hover:bg-blue-600" type="submit">Submit</button>
        </form>
    )
}

export default AddStrainPage
