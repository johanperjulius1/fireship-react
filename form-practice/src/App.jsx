import { useState } from "react"

const initialFormData = {
  name: "",
  email: "",
  address: "",
  city: "",
  zipcode: ""
}


function MultistepForm() {
  const [currentStep, setCurrentStep] = useState(2)
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep => currentStep + 1)
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep => currentStep - 1)
  };

  const handleSubmit = () => {
    alert("Thank you for your submission");
    setFormData(initialFormData);
    setCurrentStep(1);
  }


  if (currentStep === 1) {

    return (

      <form onSubmit={handleSubmit}>
        <h2>Personal information</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3}></progress>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">e-mail address</label>
          <input
            required
            name="email"
            id="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleNextStep}>
          Next
        </button>

      </form>


    )
  }

  if (currentStep === 2) {
    return (
      <form>
        <h2>Adress</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3}></progress>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input 
            type="address"
            value={formData.adress}
            name="address"
            onChange={handleChange}
            placeholder="What is your adress"
            
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input 
            type="city"
            value={formData.city}
            name="city"
            onChange={handleChange}
            placeholder="What is your city?"
            
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input 
            type="number"
            value={formData.zipcode}
            name="zipcode"
            onChange={handleChange}
            placeholder="What is your zipcode?"
            
          />
        </div>
        <button type="button" onClick={handlePrevStep}>
          Previous
        </button>
        <button type="button" onClick={handleNextStep}>
          Next
        </button>
      </form>
    )
  }
}

export default MultistepForm