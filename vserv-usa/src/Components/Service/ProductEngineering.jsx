import React from "react";
import ServicesCommonComponent from "./ServicesCommonComponent";
// import productEng from "../../images/services/productEng.avif";
import productEng from "../../Components/images/services/productEng.avif";
const ProductEngineering = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <ServicesCommonComponent />
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-start">
          Product Engineering
        </h3>
        <p className="text-gray-600 text-base mb-5 text-start">
          From <strong>MVP to full-scale product development</strong>, we help
          businesses build high-performance digital solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={productEng}
              alt="big-data"
              className="w-full h-auto rounded-md bg-no-repeat object-cover"
            />
            <ul className="list-disc pl-5 text-gray-600 text-base mt-4">
              <li>Full-cycle software development</li>
              <li>SaaS & PaaS development</li>
              <li>API development & third-party integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductEngineering;