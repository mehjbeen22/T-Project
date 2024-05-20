import React from 'react';

const faqs = [
  {
    question: "What Does 'Refurbished' Mean?",
    answer:
      'Refurbished products are items that have been previously owned but have undergone multiple testings and repairs to ensure they meet high-quality standards. Our refurbished printers, scanners, laptops, and desktops are fully functional and come with a warranty.',
  },
  {
    question: 'Are Refurbished Products Reliable?',
    answer:
      'Yes, our refurbished products are thoroughly inspected, tested, and restored to like-new condition by our certified technicians. They are reliable and offer great value for money.',
  },
  {
    question:
      'Do You Provide Support For Setting Up Printers, Scanners, And Other Devices?',
    answer:
      'Yes, we offer comprehensive support services for setting up and troubleshooting printers, scanners, desktops, WiFi systems, and email (including Outlook). Our knowledgeable support team is here to assist you.',
  },
  {
    question: 'How Can I Contact Customer Support?',
    answer:
      'You can reach our customer support team via email. Visit our Contact Us page for more information on how to get in touch with us.',
  },
  {
    question: 'How Would I Know If The Technician Is An Expert Or Not?',
    answer:
      'Our technicians are certified by CompTIA A+ Certification which is recognized globally.',
  },
  {
    question: 'Why is my printer taking so long?',
    answer:
      'If your printer is taking a long time to function, this could indicate an issue with the connection or a dodgy file. To resolve this, you need to address each possible fault. Firstly, check that everything is properly connected. Check the settings on your PC, laptop, or mobile device and ensure that everything is fully linked up. If everything appears okay with the connection, check to see that the file is safe. If there is an issue with the file, then it is likely that the document will not print. A simple, quick-fire way to test this is to simply double click to open the file. If an error message pops up, and the file does not open, then there is a strong chance that it is corrupt.',
  },
  {
    question: 'How do I install paper trays?',
    answer:
      'Your paper trays should always come with full installation instructions to guide you through the set-up process. If you are having issues with this, or if you are struggling to locate these instructions, please don’t hesitate to contact us. There are some great installation tutorials online, too!',
  },
  {
    question: 'What are the media restrictions with paper trays?',
    answer:
      'With any paper tray, there will be media restrictions. What those restrictions are will depend on the paper tray that you have bought. Some trays have a higher capacity than others and so on, so this will completely vary. When you buy your paper tray(s), this information should come with the item itself.',
  },
  {
    question: 'Can I come to your office to buy a printer?',
    answer:
      'Unfortunately, not, no – although we do love meeting our customers! Our service is for delivery only, and all orders must be made either online or via telephone.',
  },
  {
    question: 'Why can’t I scan to network?',
    answer:
      'If you are experiencing difficulty scanning to a network, then this is most likely to be a connectivity issue. Double-check to ensure that everything is properly connected and try again. If the issue persists after you have trouble-shooted, then it may be worth contacting the manufacturer directly to report the issue. More often than not, though, a network connectivity failure is highly resolvable.',
  },
];

const FAQPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <div>
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
