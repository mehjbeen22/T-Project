import CustomerReview from '../sections/CustomerReview';
import OurFacilities from '../sections/OurFacilities';
import SpecialProducts from '../sections/SpecialProducts';

const Home = () => {
  return (
    <>
      <main className="h-[90vh]  flex items-center justify-center bg-gray-100">
        <div className="w-11/12 h-5/6 flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
          <section className="md:w-1/2 h-1/2 md:h-full bg-white p-4">
            <img
              src="https://img.freepik.com/premium-photo/bussinessman-hand-press-button-panel-printer-scanner-laser-copy-machine-office_298018-310.jpg?w=826"
              alt="Printer"
              className="w-full h-full object-cover"
            />
          </section>
          <section className="md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-6 bg-white">
            <h2 className="text-4xl font-bold mb-4 text-blue-700">Welcome!</h2>
            <p className="text-lg text-gray-700">
              Your ultimate printing solution! Discover top-quality printers for
              home and office use, offering superior print quality,
              user-friendly design, and cost-efficient solutions. Enjoy reliable
              performance and comprehensive support with every purchase. Explore
              our range today and elevate your printing experience!
            </p>
            <div>
              {/* <button className="bg-[#1e40af] text-white p-2 rounded mt-4">
                {' '}
                Click here for Setup
              </button> */}
            </div>
          </section>
        </div>
      </main>

      <OurFacilities />
      <SpecialProducts />
      <CustomerReview />
    </>
  );
};

export default Home;
