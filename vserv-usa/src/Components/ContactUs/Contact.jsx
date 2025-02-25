import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import CorporateVedio4 from "../../Components/images/CorporateVedio4.mp4";


const Contact = () => {
    const [playVid, setPlayVid] = useState(false);
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
  const [showPopup, setShowPopup] = useState(false);

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
      const response = await fetch("https://vservusa.vservit.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message || "Message sent successfully");

      if (result.status === "success") {
        setShowPopup(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          company: "",
          country: "",
          message: "",
        });

        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setShowPopup(true);
      }
    } catch (error) {
      setResponseMessage("Error submitting form.");
      setShowPopup(true);
    }
  };

  return (
    <div>
      {/* <img className='w-full h-150' src={contactus} alt="" /> */}
      <section>
        <div className="relative w-full h-[850px] bg-[#111111] flex text-white max-lg:flex-col gap-4 max-lg:p-8">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover fade-in-video"
            autoPlay
            loop
            muted
            src={CorporateVedio4}
          ></video>
          
        </div>
      </section>
      <div className='font-medium text-3xl items-center text-center p-3 m-2  max-md:text-xl'>
        <p>Let’s build the future together!</p>
        <p> Reach out to us </p>
         <p> for custom IT solutions, consultation, or partnership opportunities.</p>
      </div>
      <div className="text-4xl font-medium items-center text-center p-5 max-md:text-2xl max-md:p-0">
        <h1>How can we help you?</h1>
      </div>
      <div className="flex justify-center items-center p-5">
        <form action="" className="flex flex-col items-center w-140 max-sm:w-[90%]" onSubmit={handleSubmit}>
          <input
            className="border-1 rounded-md p-2 mb-4 w-full"
            type="text"
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-full"
            type="text"
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-full"
            type="text"
            name="email"
            value={formData.email} 
            onChange={handleChange}
            placeholder="Work Email"
            required
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-full"
            type="text"
            name="jobTitle"
            value={formData.jobTitle} 
            onChange={handleChange}
            placeholder="Job Title"
            required
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-full"
            type="text"
            name="company"
            value={formData.company} 
            onChange={handleChange}
            placeholder="Company"
            required
          />
          <div className="border-1 rounded mb-4 w-full">
            <Select
              placeholder="Country"
              options={options}
              value={options.find((option) => option.label === formData.country)}
              onChange={handleCountryChange}
            />
          </div>
          <textarea
            className="border-1 rounded-md p-2 mb-4 w-full"
            type="text"
            name="message"
            value={formData.message} 
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
          <div className="flex items-center mb-4">
            <input className="cursor-pointer" type="checkbox" id="terms" />
            <label className="m-2 font-light text-[12px]" for="terms" required>
              I confirm, I have read and agree to{" "}
              <a className="cursor-pointer font-semibold underline" href="">
                VSERV's Privacy Policy
              </a>{" "}
              and consent to sharing my information.
            </label>
          </div>
          <button className="cursor-pointer font-semibold justify-center items-center mr-10 p-2 m-3 w-24 bg-green-400 rounded-md">
            Submit
          </button>
        </form>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Message sent successfully</h2>
            <p>{responseMessage}</p>
            <button onClick={() => setShowPopup(false)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
