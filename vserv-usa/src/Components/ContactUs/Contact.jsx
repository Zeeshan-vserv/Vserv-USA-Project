import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import contactus from '../../images/contactus.jpg'

const contact = () => {
  function CountrySelector() {
    const [value, setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value) => {
      setValue(value);
    };

    return (
      <Select
        className="w-139.5 border-none"
        placeholder="Country"
        options={options}
        value={value}
        onChange={changeHandler}
      />
    );
  }

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
        <form action="" className="flex flex-col items-center">
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            placeholder="Work Email"
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            placeholder="Job Title"
          />
          <input
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            placeholder="Company"
          />
          <div className="border-1 rounded-md mb-4 w-140">
            <CountrySelector />
          </div>
          <textarea
            className="border-1 rounded-md p-2 mb-4 w-140"
            type="text"
            placeholder="Message"
          ></textarea>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" />
            <label className="m-2 font-light text-[12px]" for="terms">
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
      </div>
    </div>
  );
};

export default contact;
