import React from "react";
import ServicesCommonComponent from "./ServicesCommonComponent";
import ecommerceSolution from "../../Components/images/services/ecommerceSolution.avif";
const ECommerceSolutions = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <ServicesCommonComponent />
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-start">
          E-Commerce Solutions
        </h3>
        <p className="text-gray-600 text-base mb-5 text-start">
          From <strong>storefront development to custom integrations</strong>,
          we create powerful e-commerce platforms that enhance sales and
          customer experience.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={ecommerceSolution}
              alt="big-data"
              className="w-full h-auto rounded-md bg-no-repeat object-cover"
            />
            <ul className="list-disc pl-5 text-gray-600 text-base mt-4">
              <li>Custom e-commerce websites</li>
              <li>Marketplace integration (Amazon, Shopify)</li>
              <li>Payment gateway integration</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ECommerceSolutions;