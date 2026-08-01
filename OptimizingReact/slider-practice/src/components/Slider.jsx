import { useState } from "react"

function Slider({ value, onChange }) {


    const handleInputChange = (e) => {
        const number = Number(e.target.value)
        onChange(number)
    }

    return (
        <div>
            <p>Hello from slider</p>
            <form>
                <label htmlFor="vol">the label</label>
                <input onChange={handleInputChange} value={value} type="range" id="vol" name="vol" min="1" max="10" />
                <span>{value}</span>
            </form>
        </div>

    )
}

export default Slider