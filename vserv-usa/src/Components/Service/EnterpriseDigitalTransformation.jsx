import React from "react";
import ServicesCommonComponent from "./ServicesCommonComponent";
import interpriseDigitalTransformation from "../../Components/images/services/interpriseDigitalTransformation.avif";
const EnterpriseDigitalTransformation = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <ServicesCommonComponent />
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-start">
          Enterprise Digital Transformation
        </h3>
        <p className="text-gray-600 text-base mb-5 text-start">
          Modernize and automate business processes with our{" "}
          <strong>digital transformation expertise</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={interpriseDigitalTransformation}
              alt="big-data"
              className="w-full h-auto rounded-md bg-no-repeat object-cover"
            />
            <ul className="list-disc pl-5 text-gray-600 text-base mt-4">
              <li>Cloud migration & automation</li>
              <li>AI-driven business intelligence</li>
              <li>Custom enterprise application development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseDigitalTransformation;