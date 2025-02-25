import React from "react";
import backendDev from "../../Components/images/services/StaffAugmentation/backendDev.avif";
import frontendDev from "../../Components/images/services/StaffAugmentation/frontendDev.avif";
import devopsCloud from "../../Components/images/services/StaffAugmentation/devopsCloud.avif";
import mobileAppDev from "../../Components/images/services/StaffAugmentation/mobileAppDev.avif";
import QualityAssurance from "../../Components/images/services/StaffAugmentation/QualityAssurance.avif";
import javaScript from "../../Components/images/services/StaffAugmentation/javaScript.avif";
import webDev from "../../Components/images/services/StaffAugmentation/webDev.avif";
import enterpriseSolutions from "../../Components/images/services/StaffAugmentation/enterpriseSolutions.avif";
import cms from "../../Components/images/services/StaffAugmentation/cms.avif";
import operationsProjectManagement from "../../Components/images/services/StaffAugmentation/operationsProjectManagement.avif";

const StaffAugmentation = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          What We Do
        </h2>
        <p className="text-gray-600 text-base mb-6">
          At <strong>Vserv Infosystems INC</strong>, we specialize in delivering
          top-tier IT solutions that empower businesses to achieve digital
          excellence. With expertise in{" "}
          <strong>
            software development, cybersecurity, managed services, and
            artificial intelligence
          </strong>
          , we provide cutting-edge solutions tailored to your business needs.
        </p>
        <p className="text-gray-600 text-base mb-12">
          With a team of highly skilled professionals, we focus on{" "}
          <strong>scalability, innovation, and efficiency</strong>, ensuring
          that your organization stays ahead in today’s competitive digital
          landscape.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Our Services
        </h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-start">
          Staff Augmentation
        </h3>
        <p className="text-gray-600 text-base mb-5 text-start">
          Expand your development team with our skilled professionals, ensuring
          faster project execution and high-quality deliverables. We provide{" "}
          {""}
          <strong>
            dedicated developers, engineers, and IT specialists
          </strong>{" "}
          {""}across various domains, allowing businesses to scale effortlessly.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={backendDev}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              Back-End Development
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Our back-end engineers build robust, scalable, and secure
              server-side applications to support your business needs.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>.NET</strong> – Enterprise-grade applications with .NET
                Core & ASP.NET
              </li>
              <li>
                <strong>PHP</strong> – Custom web applications and CMS solutions
              </li>
              <li>
                <strong>Python</strong> – AI/ML applications, automation, and
                data analytics
              </li>
              <li>
                <strong>Java</strong> – Secure and scalable enterprise
                applications
              </li>
              <li>
                <strong>GraphQL</strong> – Optimized API development for
                seamless data fetching
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={frontendDev}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              Front-End Development
            </h3>
            <p className="text-gray-600 text-base mb-4">
              We craft dynamic and interactive user interfaces for a seamless
              digital experience.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>Angular</strong> – High-performance single-page
                applications (SPAs)
              </li>
              <li>
                <strong>React</strong> – Component-based UI solutions for
                scalable applications
              </li>
              <li>
                <strong>HTML/CSS</strong> – Responsive and visually appealing
                web design
              </li>
              <li>
                <strong>Vue.js</strong> – Lightweight, progressive front-end
                framework
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={devopsCloud}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              DevOps & Cloud Solutions
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Enhance{" "}
              <strong>
                {" "}
                CI/CD pipelines, cloud adoption, and infrastructure automation{" "}
              </strong>
              with our DevOps expertise.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>AWS</strong> – Cloud-native development & serverless
                computing
              </li>
              <li>
                <strong>Azure</strong>– Scalable cloud-based enterprise
                solutions
              </li>
              <li>
                <strong>GCP</strong> – AI-driven cloud infrastructure solutions
              </li>
              <li>
                <strong>Cybersecurity</strong> – Security audits, penetration
                testing, and risk management
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={mobileAppDev}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              Mobile Development
            </h3>
            <p className="text-gray-600 text-base mb-4">
              We develop feature-rich, scalable, and secure mobile applications
              for <strong>iOS, Android, and cross-platform</strong>{" "}
              environments.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>Android</strong> – Kotlin & Java-based native
                applications
              </li>
              <li>
                <strong>iOS</strong> – Swift & Objective-C-based applications
              </li>
              <li>
                <strong>React Native</strong> – Hybrid mobile apps with
                near-native performance
              </li>
              <li>
                <strong>Flutter</strong> – Cross-platform apps with a single
                codebase
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={QualityAssurance}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              Quality Assurance (QA)
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Ensure flawless performance with rigorous testing methodologies.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>Manual Testing</strong> – Functional, UI, and usability
                testing
              </li>
              <li>
                <strong>Automation Testing</strong> – Selenium, Appium, and
                Cypress-based automated test suites
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={javaScript}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              JavaScript Development
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Build high-performance web applications with modern JavaScript
              frameworks.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>React.js</strong> – Scalable UI components and SPAs
              </li>
              <li>
                <strong>Angular.js</strong> – Enterprise-grade front-end
                applications
              </li>
              <li>
                <strong>Node.js</strong> – Server-side JavaScript development
                for real-time applications
              </li>
              <li>
                <strong>Vue.js</strong> – Lightweight, reactive front-end
                framework
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={webDev}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              Web Development
            </h3>
            <p className="text-gray-600 text-base mb-4">
              We specialize in custom web development with modern frameworks and
              CMS platforms.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>Laravel</strong> – PHP-based web application development
              </li>
              <li>
                <strong>Python & PHP</strong> – Custom backend and full-stack
                development
              </li>
              <li>
                <strong>WordPress & Drupal</strong> – Custom themes, plugins,
                and CMS integrations
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={enterpriseSolutions}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              Enterprise Solutions
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Transform your business with enterprise-grade solutions that
              optimize operations and drive efficiency.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>Salesforce</strong> – CRM development and cloud-based
                automation
              </li>
              <li>
                <strong>DevOps</strong> – Infrastructure automation,
                containerization, and CI/CD
              </li>
              <li>
                <strong>Big Data & Cloud</strong> –{" "}
                <strong>
                  Snowflake, AWS Redshift, Google BigQuery, and Hadoop
                </strong>{" "}
                for scalable data warehousing and analytics
              </li>
              <li>
                <strong>SharePoint</strong> – Document management and enterprise
                collaboration
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <img
              src={cms}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              Content Management Systems (CMS)
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Seamless website and content management using modern CMS
              solutions.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>Magento</strong> – E-commerce platform customization
              </li>
              <li>
                <strong>Drupal</strong> – Secure and scalable CMS for
                enterprises
              </li>
              <li>
                <strong>WordPress</strong> – Custom website development and
                plugin integrations
              </li>
              <li>
                <strong>Sitecore</strong> – Personalized customer experience and
                content management
              </li>
              <li>
                <strong>Kentico</strong> – Enterprise digital marketing and CMS
                platform
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
          <img
              src={operationsProjectManagement}
              alt="Back-End Development"
              className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4 mt-2">
              Operations & Project Management
            </h3>
            <p className="text-gray-600 text-base mb-4">
              Ensure seamless execution of projects with expert{" "}
              <strong>IT management professionals</strong>.
            </p>
            <ul className="list-disc pl-5 text-gray-600 text-base">
              <li>
                <strong>Project Managers</strong> – Driving IT projects from
                planning to delivery
              </li>
              <li>
                <strong>Agile Coaches</strong> – Implementing Agile
                methodologies for efficiency
              </li>
              <li>
                <strong>Scrum Masters</strong> – Enabling Agile team
                collaboration and sprint success
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentation;