import React from 'react';

const RefundReturnPolicy = () => {
  const policies = [
    {
      section: 'Refunds',
      content:
        "We are committed to providing you with the best products. Every item is thoroughly inspected and packaged with care. In rare cases where we can't fulfill your order due to inventory issues or quality concerns, we'll notify you promptly. For online payments (excluding Cash on Delivery), refunds will be processed once we confirm your request. Please note that while we take great care in packing, we are not liable for damages during transit. Refunds may take a few days to process.",
      requirements: [
        'Items must be in new condition.',
        'Include all original packaging and accessories.',
        'Ship items back to us fully insured with a traceable method at your expense.',
      ],
      exceptions: [
        'Beyond 15 days from receipt.',
        'Item is marked as “Final Sale” or “Special Order.”',
        'Item is used or installed.',
        'Warranty card is filled, product registered, or rebates claimed.',
      ],
    },
    {
      section: 'How to Return a Product',
      content:
        'Email us at support@[yourcompany].com within 15 days of receipt. Once approved, ship the item back to the designated warehouse fully insured and trackable.',
      tips: [
        'Check specifications for compatibility.',
        'Verify dimensions for built-in appliances.',
        'Inspect large products for damages upon delivery.',
        'Measure doorways and spaces for large products.',
      ],
      shippingCost:
        "Please note that return shipping costs are the customer's responsibility, even for items with free shipping.",
    },
    {
      section: 'Delivery Policy',
      content:
        'Normal Delivery Hours: 8 am-7 pm, Monday-Friday. No guaranteed delivery date or time. Adult signature required upon delivery. Inspect products for damages upon delivery.',
    },
    {
      section: 'Order Cancellation Policy',
      content:
        'No cost for cancellations before shipping. After shipping, a return shipping fee applies. “Special Order” or “Final Sale” products cannot be canceled.',
    },
    {
      section: 'Product Image and Specifications Policy',
      content:
        'Product images are for representation; specifications should be verified. Check with our sales associates or the manufacturer’s website for accurate information.',
    },
    {
      section: 'Freight Forwarding Policy',
      content:
        'We are not responsible for damage or loss after acceptance. If goods arrive damaged, refuse them, and notify your freight forwarder. You or your freight forwarder are responsible for compliance with export/import regulations.',
    },
    {
      section: 'Your Consent',
      content:
        'By using our website or making a purchase, you consent to our Return & Refund Policy. Any changes will be posted here.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {policies.map((policy, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{policy.section}</h2>
            <div className="bg-white p-4 rounded shadow">
              <p className="mb-4">{policy.content}</p>
              {policy.requirements && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">
                    Requirements for a Full Refund:
                  </h3>
                  <ul className="list-disc ml-6">
                    {policy.requirements.map((requirement, i) => (
                      <li key={i}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              )}
              {policy.exceptions && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">
                    When a Product Cannot Be Returned:
                  </h3>
                  <ul className="list-disc ml-6">
                    {policy.exceptions.map((exception, i) => (
                      <li key={i}>{exception}</li>
                    ))}
                  </ul>
                </div>
              )}
              {policy.tips && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">
                    How to Return a Product Tips:
                  </h3>
                  <ul className="list-disc ml-6">
                    {policy.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
              {policy.shippingCost && <p>{policy.shippingCost}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RefundReturnPolicy;
