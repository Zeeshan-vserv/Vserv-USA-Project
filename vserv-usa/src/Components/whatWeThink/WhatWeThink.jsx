import React, { useState } from "react";
// import emergingTechnologies from "../../images/whatWeThink/emergingTechnologies.jpg";
import ml from "../../Components/images/whatWeThink/ml.jpg";
import webDev from "../../Components/images/whatWeThink/webDev.avif";
import bigData from "../../Components/images/whatWeThink/bigData.avif";
import cms from "../../Components/images/whatWeThink/cms.avif";
import cloudComputingDevOps from "../../Components/images/whatWeThink/cloudComputingDevOps.avif";
import CorporateVedio4 from "../../Components/images/CorporateVedio4.mp4";


const faqs = [
  {
    question: "Why Choose Us?",
    answer: [
      {
        title: "Proven Expertise",
        desc: "Years of experience in delivering enterprise IT solutions",
      },
      {
        title: "Scalable & Secure Solutions",
        desc: "Built for performance, reliability, and security",
      },
      {
        title: "Client-Centric Approach",
        desc: "Custom solutions that align with business goals",
      },
      {
        title: "24/7 Support",
        desc: "Ensuring seamless operations with round-the-clock assistance",
      },
    ],
  },
];

const WhatWeThink = () => {
  const [openTitle, setOpenTitle] = useState(null);

  const toggleDescription = (title) => {
    setOpenTitle(openTitle === title ? null : title);
  };

  return (
    <div>
      <section>
        <div className="relative w-full h-[700px] bg-[#111111] flex text-white max-lg:flex-col gap-4 max-lg:p-8">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover fade-in-video"
            autoPlay
            loop
            muted
            src={CorporateVedio4}
          ></video>
          
        </div>
      </section>
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Technologies We Specialize In
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={ml}
              alt="big-data"
              className="w-full rounded-md bg-no-repeat object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Emerging Technologies
            </h3>
            <p className="text-gray-600 text-base mb-5 mt-2 text-start">
              We bring innovation with{" "}
              <strong>
                Artificial Intelligence (AI), Machine Learning (ML), and
                Internet of Things (IoT)
              </strong>{" "}
              to enhance business operations.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={webDev}
              alt="web-dev"
              className="w-full rounded-md bg-no-repeat object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Web & Mobile Application Development
            </h3>
            <p className="text-gray-600 text-base mb-5 mt-2 text-start">
              We develop{" "}
              <strong>scalable and secure web & mobile applications</strong>{" "}
              using modern frameworks and development practices.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={bigData}
              alt="big-data"
              className="w-full rounded-md bg-no-repeat object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Big Data & Cloud Solutions
            </h3>
            <p className="text-gray-600 text-base mb-5 mt-2 text-start">
              Harness the power of data with our expertise in{" "}
              <strong>
                Snowflake, AWS Redshift, Google BigQuery, and Hadoop
              </strong>{" "}
              for scalable cloud-based data warehousing and analytics.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={cms}
              alt="big-data"
              className="w-full rounded-md bg-no-repeat object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Content Management Systems (CMS)
            </h3>
            <p className="text-gray-600 text-base mb-5 mt-2 text-start">
              We customize and optimize{" "}
              <strong>
                CMS platforms like WordPress, Drupal, Magento, and Sitecore
              </strong>{" "}
              to meet your digital needs.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <img
              src={cloudComputingDevOps}
              alt="big-data"
              className="w-full rounded-md bg-no-repeat object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Cloud Computing & DevOps
            </h3>
            <p className="text-gray-600 text-base mb-5 mt-2 text-start">
              Accelerate cloud adoption and infrastructure automation with{" "}
              <strong>AWS, Azure, GCP, and DevSecOps solutions</strong>.
            </p>
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center mt-12">
          Our Expertise
        </h3>
        <p className="text-gray-600 text-base mb-5 mt-2 text-center">
          Partner with Vserv Infosystems INC to unlock tailored, scalable, and
          innovative solutions that drive efficiency and digital transformation
          for your business.
        </p>
        {/* faq */}
        <div className="max-w-xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {faq.question}
              </h3>
              <ul className="mt-3 space-y-3">
                {faq.answer.map((item, idx) => (
                  <li key={idx} className="flex flex-col">
                    <button
                      onClick={() => toggleDescription(item.title)}
                      className="flex justify-between items-center w-full text-gray-700 font-semibold focus:outline-none p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        ✅ {item.title}
                      </span>
                      <span className="text-xl">
                        {openTitle === item.title ? "−" : "+"}
                      </span>
                    </button>
                    {openTitle === item.title && (
                      <p className="text-gray-600 bg-gray-100 p-3 rounded-md mt-2 text-start">
                        {item.desc}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
</div>
  );
};

export default WhatWeThink;