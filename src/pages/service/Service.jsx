import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <main className="bg-gray-100">
      <div
        className="bg-cover bg-no-repeat bg-center h-80 flex items-center justify-center"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/side-view-worker-holding-smartphone_23-2149713700.jpg?t=st=1716465535~exp=1716469135~hmac=5df4e0c2f6535d83e866e12233b526d362b9a1ceb43d8ba8ca608a92473addda&w=900")`,
        }}
      >
        <div className="bg-blue-900 bg-opacity-70 p-8 rounded-lg shadow-lg text-white text-center">
          <h1 className="text-6xl font-bold">Our Service</h1>
        </div>
      </div>
      <div>
        <section className="bg-gray-100 p-2 shadow-inner">
          <div className="flex gap-6 items-center justify-center">
            <img
              src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/printer-sm.svg"
              alt="Printer Support"
              className="w-10 h-10 "
            />
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Printer Support
            </h2>
          </div>
        </section>

        <div className="flex justify-center items-center">
          <section className="flex gap-10 justify-center items-center  w-[80%]">
            <Link
              to="/printersetupissue"
              className="w-full bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105"
            >
              <img
                src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/printersetup.svg"
                alt=""
                className="w-24 h-24 mx-auto"
              />
              <p className="text-center mt-2">Printer Setup Issues</p>
            </Link>

            <Link
              to="/printeroffline"
              className="w-full bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105"
            >
              <img
                src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/printeroffline.svg"
                alt=""
                className="w-24 h-24 mx-auto"
              />
              <p className="text-center mt-2">Printer Offline</p>
            </Link>

            <Link
              to="/scannersetup"
              className="w-full bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105"
            >
              <img
                src="https://support.hp.com/content/dam/hp-wcc/microsite-assets/images/diagnostics/scannerissues.svg"
                alt=""
                className="w-24 h-24 mx-auto"
              />
              <p className="text-center mt-2">Scanner Setup</p>
            </Link>
          </section>
        </div>
      </div>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="lg:w-1/2">
              <img
                src="https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7380.jpg?t=st=1716465894~exp=1716469494~hmac=720e6ba58b71282b3683f9fb376b6186a56a27141e28a84f72a80b6c4d4b08c2&w=740"
                alt="Service Illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">
                Why Choose Our Service?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We pride ourselves on offering comprehensive and reliable
                printing solutions tailored to meet your needs. Our services
                encompass high-quality printing, routine maintenance, and prompt
                repairs for all major printer models. We also provide expert
                advice and exceptional customer support to ensure your printers
                run smoothly and efficiently.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our dedicated team of professionals is committed to delivering
                cost-effective solutions that enhance your printing experience.
                Whether for home, office, or commercial use, trust us to keep
                your printing operations seamless and hassle-free. Explore our
                wide range of services and experience unparalleled quality and
                support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
