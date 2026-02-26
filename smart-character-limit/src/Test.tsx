import * as React from "react";
import './index.css'

function LimitedTextInput({ characterLimit = 20 }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value)
    console.log("input value is", inputValue)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > characterLimit) {
      alert("The input exceeds the character limit. Please shorten your text.")
    } else {
      alert("Thanks for your submission")
      setInputValue("")
    }

    // if input length is too long
    // alert "The input exceeds the character limit. Please shorten your text."
    // else
    // alert "Thanks for your submission"
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className={characterLimit - inputValue.length >= 0 ? "no-error" : "error"}>Characters remaining: {characterLimit - inputValue.length}</span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default LimitedTextInput;