import React from "react";

function PasswordInput({ minimum = 8 }) {
  const [inputValue, setInputValue] = React.useState("");
  const [isInputValueVisible, setIsInputValueVisible] = React.useState(false);
  const [thresholdMet, setThresholdMet] = React.useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value)
    if(e.target.value.length >= minimum){
      setThresholdMet(true)
    } else {
      setThresholdMet(false)
    }
  };

  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(thresholdMet)
    console.log(thresholdMet)

    if (thresholdMet) {
      alert("Password submitted");
    } else {
      alert("You need a longer password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Password:</label>
        <span className={thresholdMet ? "no-error" : "error"}>
          {inputValue.length}
        </span>
      </div>
      <div>
        <input
          placeholder="Enter a password"
          type={isInputValueVisible ? "text" : "password"}
          id="limited-text-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" onClick={handleToggleVisibility}>
          {isInputValueVisible ? "🙊" : "🙈"}
        </button>
      </div>

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default PasswordInput;
