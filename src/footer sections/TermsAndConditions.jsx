import React from 'react';

export default function TermsAndConditions() {
  const termsAndConditionsData = [
    {
      section: 'Introduction',
      content:
        'By accessing and placing an order with us, you confirm that you are in agreement with and bound by the terms of website contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and us.',
    },
    {
      section: 'Limitation of Liability',
      content:
        'Under no circumstances shall our team be liable for any direct, indirect, special, incidental, or consequential damages, including but not limited to loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if our team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair, or correction of equipment or data, you assume any costs thereof.',
    },
    {
      section: 'Policy Changes',
      content:
        'We will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy at any moment.',
    },
    {
      section: 'License',
      content:
        'We grant you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement.',
    },
    {
      section: 'Definitions and Key Terms',
      content:
        'To help explain things as clearly as possible in this Terms & Conditions, every time any of these terms are referenced, they are strictly defined as follows:',
    },
    {
      section: 'Restrictions',
      content: 'You agree not to, and you will not permit others to:',
    },
    {
      section: 'Return and Refund Policy',
      content:
        'As with any shopping experience, there are terms and conditions that apply to transactions with us. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase with us, you agree to the terms along with our Privacy Policy. If, for any reason, you are not completely satisfied with any good that we provide, don’t hesitate to contact us and we will discuss any of the issues you are going through with our product.',
    },
    {
      section: 'Your Suggestions',
      content:
        'Any feedback, comments, ideas, improvements, or suggestions (collectively, “Suggestions”) provided by you to us with respect to the website shall remain the sole and exclusive property of ours. We shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.',
    },
    {
      section: 'Your Consent',
      content:
        'We’ve updated our Terms & Conditions to provide you with complete transparency into what is being set when you visit our site and how it’s being used. By using our website, registering an account, or making a purchase, you hereby consent to our Terms & Conditions.',
    },
    {
      section: 'Links to Other Websites Cookies',
      content:
        'We use “Cookies” to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our website but are non-essential to their use. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies.',
    },
    {
      section: 'Changes To Our Terms & Condition',
      content:
        'You acknowledge and agree that we reserve the right to cease providing the website (or any features within the website) to you or to users, either permanently or temporarily, at our sole discretion, without prior notice. You may discontinue using the website at any time, and you are not required to notify us when you choose to do so. If we disable access to your account, you may lose access to the website, your account details, or any associated files or materials. If we make changes to our Terms & Conditions, we will post those updates on this page and update the modification date below. Please review this page periodically for any modifications to stay informed about our policies.',
    },
    {
      section: 'Modifications to Our website',
      content:
        'We reserves the right to modify, suspend, or discontinue, temporarily or permanently, the website to which it connects, with or without notice and without liability to you.',
    },
    {
      section: 'Updates to Our website',
      content:
        'We may from time to time provide enhancements or improvements to the features/ functionality of the website, which may include patches, bug fixes, updates, upgrades, and other modifications (“Updates”). Updates may modify or delete certain features and/or functionalities of the website. You agree that we have no obligation to (i) provide any Updates or (ii) continue to provide or enable any particular features and/or functionalities of the website to you. You further agree that all Updates will be (i) deemed to constitute an integral part of the website, and (ii) subject to the terms and conditions of this Agreement.',
    },
    {
      section: 'Term and Termination',
      content:
        'This Agreement shall remain in effect until terminated by you or us. We may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice. This Agreement will terminate immediately, without prior notice from us, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the website and all copies thereof from your computer. Upon termination of this Agreement, you shall cease all use of the website and delete all copies of the website from your computer. Termination of this Agreement will not limit any of our rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement.',
    },
    {
      section: 'Copyright Infringement Notice',
      content:
        'If you are a copyright owner or such owner’s agent and believe any material on our website constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing; (c) your contact information, including your address, telephone number, and an email; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner.',
    },
    {
      section: 'No Warranties',
      content:
        'Without limiting the foregoing, neither we nor any of our provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the website, or the information, content, and materials or products included thereon; (ii) that the website will be uninterrupted',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Terms & Conditions
        </h1>

        {termsAndConditionsData.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.section}</h2>
            <div className="bg-white p-4 rounded shadow">
              <p className="mb-4">{section.content}</p>
              {section.terms && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">
                    Definitions and Key Terms
                  </h3>
                  <ul className="list-disc ml-6">
                    {section.terms.map((term, i) => (
                      <li key={i}>
                        <strong>{term.term}:</strong> {term.definition}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.items && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">
                    Information We Collect
                  </h3>
                  <ul className="list-disc ml-6">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
