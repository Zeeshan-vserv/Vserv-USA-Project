import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    country: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.label });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message);

      if (result.status === "success") {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          company: "",
          country: "",
          message: "",
        });
      }
    } catch (error) {
      setResponseMessage("Error submitting form.");
    }
  };

  return (
    <div>
      {/* <img className='w-full h-150' src={contactus} alt="" /> */}
      <div className='font-medium text-3xl items-center text-center p-3 m-2'>
        <p>Let’s build the future together!</p>
        <p> Reach out to us </p>
         <p> for custom IT solutions, consultation, or partnership opportunities.</p>
      </div>
      <div className="text-4xl font-medium items-center text-center p-10">
        <h1>How can we help you?</h1>
      </div>
      <div className="flex justify-center items-center p-5">
        <form action="" className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            name="email"
            value={formData.email} 
            onChange={handleChange}
            placeholder="Work Email"
            required
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            name="jobTitle"
            value={formData.jobTitle} 
            onChange={handleChange}
            placeholder="Job Title"
            required
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            name="company"
            value={formData.company} 
            onChange={handleChange}
            placeholder="Company"
            required
          />
          <div className="border rounded-md mb-4 w-140">
          <Select options={options} value={options.find((option) => option.label === formData.country)} onChange={handleCountryChange} placeholder="Country" />
        </div>
          <textarea
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            name="message"
            value={formData.message} 
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" />
            <label className="m-2 font-light text-[12px]" for="terms" required>
              I confirm, I have read and agree to{" "}
              <a className="cursor-pointer font-semibold underline" href="">
                VSERV's Privacy Policy
              </a>{" "}
              and consent to sharing my information.
            </label>
          </div>
          <button className="font-semibold justify-center items-center mr-10 p-2 m-3 w-24 bg-green-400 rounded-md">
            Submit
          </button>
        </form>
        {responseMessage && <p className="text-center mt-3">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
