import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './sections/Footer';
import Disclaimer from './footer sections/Disclaimer';
import About from './pages/About';
import FAQPage from './footer sections/FAQPage';
import PrivacyPolicy from './footer sections/PrivacyPolicy';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TermsAndConditions from './footer sections/TermsAndConditions';
import RefundReturnPolicy from './footer sections/RefundReturnPolicy';
import Contact from './pages/Contact';
import Service from './pages/service/Service';
import Products from './pages/Products';
import PrinterSetupIssue from './pages/service/PrinterSetupIssue';
import PrinterOffline from './pages/service/PrinterOffline';
import ScannerSetup from './pages/service/ScannerSetup';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/t&c" element={<TermsAndConditions />} />
          <Route path="/refundAndreturn" element={<RefundReturnPolicy />} />

          {/* Service Page Route */}
          <Route path="/printersetupissue" element={<PrinterSetupIssue />} />
          <Route path="/printeroffline" element={<PrinterOffline />} />
          <Route path="/scannersetup" element={<ScannerSetup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
