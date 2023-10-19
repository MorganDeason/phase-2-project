import { useState } from "react"
import FireDisplay from "./FireDisplay"
import { useLoaderData } from "react-router"

export default function Fires() {

    const [fires, setFires] = useState(useLoaderData())

    const [formData, setFormData] = useState({
        date: "",
        name: "",
        county: "",
        acres: "",
        homesLost: "",
        image: ""
    })
    const { date, name, county, acres, homesLost, image } = formData

    const handleAdd = (newFire) => {
        fetch("http://localhost:3000/fires", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(newFire)
        })
            .then(res => res.json())
            .then(newestFire => setFires([...fires, newestFire]))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFire = {
            date: date,
            name: name,
            county: county,
            acres: acres,
            homesLost: homesLost,
            image: image
        }
        handleAdd(newFire)

        setFormData({
            date: "",
            name: "",
            county: "",
            acres: "",
            homesLost: "",
            image: ""
        })
    }


    return (
        <div className="d-flex justify-content-evenly bg-success-subtle gap-2">
            <div className="d-flex flex-wrap gap-2">
                {fires.map(fire => <FireDisplay key={fire.id} fire={fire} />)}
            </div>
            <div className="p-2 flex-column w-50">
                <label>Share a New FIre</label>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        className="form-control"
                        arai-label="default input example"
                        type="text"
                        name="name"
                        placeholder="Name of the fire..."
                        value={name}
                        onChange={handleChange}
                    />
                    <label htmlFor="date">Date:</label>
                    <input
                        className="form-control"
                        arai-label="default input example"
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={date}
                    />
                    <label htmlFor="county">County:</label>
                    <input
                        className="form-control"
                        arai-label="default input example"
                        type="text"
                        name="county"
                        placeholder="County fire was in..."
                        value={county}
                        onChange={handleChange}
                    />
                    <label htmlFor="acres">Acres:</label>
                    <input
                        className="form-control"
                        arai-label="default input example"
                        type="text"
                        name="acres"
                        placeholder="12,345..."
                        value={acres}
                        onChange={handleChange}
                    />
                    <label htmlFor="homesLost">Homes Lost:</label>
                    <input
                        className="form-control"
                        arai-label="default input example"
                        type="text"
                        name="homesLost"
                        placeholder="123..."
                        value={homesLost}
                        onChange={handleChange}
                    />
                    <label htmlFor="image">Image URL:</label>
                    <input
                        className="form-control"
                        arai-label="default input example"
                        type="text"
                        name="image"
                        placeholder="http://...."
                        value={image}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        class="btn btn-primary mb-3"
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}
