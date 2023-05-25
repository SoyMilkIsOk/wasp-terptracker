import createStrain from '@wasp/actions/createStrain'

const AddStrainPage = () => {
        return (
            <div>
                <h1>Add Strain</h1>
                <AddStrainForm />
            </div>
        )
    }


const AddStrainForm = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const name = event.target.strainName.value
            const type = event.target.type.value
            const producerID = event.target.producerID.value
            const batchDate = event.target.batchDate.value
            const THC = event.target.THC.value
            event.target.reset()
            await createStrain({ name, type, producerID, batchDate, THC })
        } catch (err) {
            window.alert('Error: ' + err.message)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Strain Name:
                <input type="text" name="strainName" />
            </label>
            <label>
                Type:
                <input type="dropdown" name="type" />
            </label>
            <label>
                Producer:
                <input type="dropdown" name="producerID" />
            </label>
            <label>
                Batch Date:
                <input type="date" name="batchDate" />
            </label>
            <label>
                THC:
                <input type="number" className="h-10 w-24 rounded border-gray-200 sm:text-sm" name="THC" />
            </label>
            {/* <label>
                Rating:
                <input type="number" name="rating" />
            </label> */}
            <input type="submit" value="Submit" />
        </form>
    )
}


export default AddStrainPage