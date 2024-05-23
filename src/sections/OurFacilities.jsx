import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import RestoreIcon from '@mui/icons-material/Restore';
import PaymentIcon from '@mui/icons-material/Payment';
import ChatIcon from '@mui/icons-material/Chat';

const OurFacilities = () => {
  return (
    <main className="bg-white py-8 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
        {/* SECTION --- 1 */}
        <section className="flex items-center bg-blue-800 text-white rounded-lg p-4 md:p-6 shadow-lg">
          <RocketLaunchIcon className="mr-4 md:mr-6" />
          <div>
            <p className="font-bold text-lg">FREE DELIVERY</p>
            <p className="text-sm">For all orders over $100</p>
          </div>
        </section>

        {/* SECTION --- 2 */}
        <section className="flex items-center bg-blue-800 text-white rounded-lg p-4 md:p-6 shadow-lg">
          <RestoreIcon className="w-12 h-12 mr-4 md:mr-6" />
          <div>
            <p className="font-bold text-lg">90 DAYS RETURN</p>
            <p className="text-sm">For all orders. If goods have problems</p>
          </div>
        </section>

        {/* SECTION --- 3 */}
        <section className="flex items-center bg-blue-800 text-white rounded-lg p-4 md:p-6 shadow-lg">
          <PaymentIcon className="w-12 h-12 mr-4 md:mr-6" />
          <div>
            <p className="font-bold text-lg">SECURE PAYMENT</p>
            <p className="text-sm">100% secure payment</p>
          </div>
        </section>

        {/* SECTION --- 4 */}
        <section className="flex items-center bg-blue-800 text-white rounded-lg p-4 md:p-6 shadow-lg">
          <ChatIcon className="w-12 h-12 mr-4 md:mr-6" />
          <div>
            <p className="font-bold text-lg">24/7 SUPPORT</p>
            <p className="text-sm">Dedicated support</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurFacilities;
