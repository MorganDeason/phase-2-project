import { useState } from "react"

export default function FireDisplay({ fire }) {

    const { date, name, county, acres, homesLost, image } = fire

    const [flip, setFlip] = useState(true)
    return (
        <div onClick={() => setFlip(!flip)}>

            {flip ? <img src={image} alt={name} height="275px" width="375px" className="border border-3 border-success p-2 mb-2 border-opacity-75 " /> :
                <div style={{ width: 375, height: 275 }} className="border border-3 border-success p-2 mb-2 border-opacity-75 ">
                    <h2>{name}</h2>
                    <h3>Date: {date}</h3>
                    <h4>Location: {county} County</h4>
                    <h4>Acres: {acres} </h4>
                    <h4>Homes Lost: {homesLost}</h4>
                </div>}

        </div >
    )

}