import { useState } from "react"

function Slider() {
    const[sliderInput, setSliderInput]=useState(1)

    const handleInputChange = (e) => {
        e.preventDefault()
        const number = Number(e.target.value)
        setSliderInput(number)
    }

    return (
        <div>
            <p>Hello from slider</p>
            <form>
                <label htmlFor="vol">the label</label>
                <input onChange={handleInputChange} value={sliderInput} type="range" id="vol" name="vol" min="1" max="10" />
                <span>{sliderInput}</span>
            </form>
        </div>

    )
}

export default Slider