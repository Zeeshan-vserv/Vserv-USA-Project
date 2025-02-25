import React from "react";
import ServicesCommonComponent from "./ServicesCommonComponent";
import prototypinguiux from "../../Components/images/services/prototypinguiux.avif";

const PrototypingAndUiUxDesign = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <ServicesCommonComponent />
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-start">
          Prototyping & UI/UX Design
        </h3>
        <p className="text-gray-600 text-base mb-5 text-start">
          Create user-centric designs with our{" "}
          <strong>prototyping and UI/UX design services</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={prototypinguiux}
              alt="big-data"
              className="w-full h-auto rounded-md bg-no-repeat object-cover"
            />
            <ul className="list-disc pl-5 text-gray-600 text-base mt-4">
              <li>Wireframing & user journey mapping</li>
              <li>Responsive & accessible design</li>
              <li>Interactive prototypes for product validation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypingAndUiUxDesign;