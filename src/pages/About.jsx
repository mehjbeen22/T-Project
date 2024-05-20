import React from 'react';

const About = () => {
  return (
    <main>
      <div
        className="bg-cover bg-center h-80 flex items-center justify-center"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/modern-printing-press-creates-colorful-documents-indoors-generated-by-ai_188544-22624.jpg?t=st=1716212364~exp=1716215964~hmac=ba5b10836ce4566a910b56f6e58d3de1e782d087041e7c312181f1dd52489290&w=996")`,
        }}
      >
        <div className="text-8xl font-semibold text-center text-white">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 mb-6 px-4">
        <div className="bg-white shadow-2xl rounded-md p-6 w-[80%]">
          <p className="mb-4 text-lg text-gray-800">
            Welcome to PrinterZone! We're passionate about providing top-quality
            printing solutions to our customers. With years of experience in the
            industry, we understand the importance of reliable printing
            equipment for both personal and professional use.
          </p>

          <p className="mb-4 text-lg text-gray-800">
            At PrinterZone, we offer a wide range of printers, from compact home
            printers to high-performance commercial printers. Our selection
            includes the latest models from leading brands, ensuring that you
            find the perfect printer to suit your needs.
          </p>

          <p className="mb-4 text-lg text-gray-800">
            Customer satisfaction is our top priority, and we strive to provide
            excellent service every step of the way. Whether you're looking for
            advice on choosing the right printer or need assistance with setup
            and maintenance, our knowledgeable team is here to help.
          </p>

          <p className="mb-4 text-lg text-gray-800">
            Our mission at PrinterZone is to make printing hassle-free and
            efficient for you. We believe that everyone should have access to
            reliable printing solutions that meet their needs. Whether you're a
            student printing assignments, a small business owner producing
            marketing materials, or a professional needing high-quality prints,
            we've got you covered.
          </p>

          <p className="text-lg text-gray-800">
            Thank you for choosing PrinterZone for all your printing needs. We
            look forward to serving you and helping you find the perfect
            printing solution!
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
