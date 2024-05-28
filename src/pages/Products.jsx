import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

export default function Products() {
  const { addToCart, cart } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    // Check if the item already exists in the cart
    const alreadyAdded = cart.some((item) => item.id === product.id);

    // If not already added, add it to the cart
    if (!alreadyAdded) {
      addToCart(product);
      // Add the item to the addedItems state to disable the button
      setAddedItems((prevItems) => [...prevItems, product.id]);
    }
  };

  return (
    <main className="py-10">
      <div className="flex justify-center items-center flex-col mt-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Our Top Categories Products
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[95%] p-4">
          {printers.map(
            ({ id, name, price, imageUrl, addToCartText, category }) => (
              <Card key={id} className="shadow-lg">
                <Card.Img
                  src={imageUrl || 'https://via.placeholder.com/150'}
                  className="h-50 w-full border border-gray-200"
                />
                <Card.Body className="text-center p-2">
                  <Card.Title className="text-blue-800 font-bold">
                    {category}
                  </Card.Title>
                  <Card.Text>Refurbished {name}</Card.Text>
                  <Card.Text className="font-bold">Price: ${price}</Card.Text>
                  <button
                    onClick={() =>
                      handleAddToCart({ id, name, price, imageUrl })
                    }
                    className={`bg-blue-800 text-white py-1 px-2 rounded hover:bg-blue-700 ${
                      addedItems.includes(id)
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                    disabled={addedItems.includes(id)}
                  >
                    {addedItems.includes(id) ? 'Added' : addToCartText}
                  </button>
                </Card.Body>
              </Card>
            ),
          )}
        </section>
      </div>
    </main>
  );
}

const printers = [
  {
    id: 1,
    category: 'HP PRINTER',
    name: 'HP Laserjet Pro M29w All-in-One Wireless Monochrome Laser Printer with Mobile Printing',
    price: 399.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/8-221.jpg',
  },
  {
    id: 2,
    category: 'HP PRINTER',
    name: 'HP OfficeJet 4650 Wireless All-in-One Photo Printer with Mobile Printing, HP Instant Ink & Amazon Dash Replenishment Ready (F1J03A)',
    price: 45.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-341.jpg',
  },
  {
    id: 3,
    category: 'HP PRINTER',
    name: 'HP OfficeJet Pro 8720 All-in-One Wireless Printer with Mobile Printing, HP Instant Ink & Amazon Dash Replenishment ready – White (M9L75A)',
    price: 99.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-361.jpg',
  },
  {
    id: 4,
    category: 'HP PRINTER',
    name: 'HP Laserjet Pro M402n Monochrome Printer',
    price: 350.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-441.jpg',
  },
  {
    id: 5,
    category: 'HP PRINTER',
    name: 'HP DeskJet 3755 Compact All-in-One Wireless Printer with Mobile Printing, HP Instant Ink Seagrass Accent (J9V92A)',
    price: 299.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-311.jpg',
  },
  {
    id: 6,
    category: 'HP PRINTER',
    name: 'HP LaserJet Pro M15w Wireless Laser Printer',
    price: 299.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/11-51.jpg',
  },
  {
    id: 7,
    category: 'HP PRINTER',
    name: 'HP Laserjet Pro M426fdw Multifunction Wireless Laser Printer with Duplex Printing',
    price: 799.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-31.jpg',
  },
  {
    id: 8,
    category: 'HP PRINTER',
    name: 'HP Office Jet 4650 Wireless All-in-One Photo Printer, Copier and Scanner – Black',
    price: 46.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-61.jpg',
  },
  {
    id: 9,
    category: 'HP PRINTER',
    name: 'HP Laserjet Pro M477fdw Multifunction Wireless Color Laser Printer with Duplex Printing',
    price: 1500.0,
    originalPrice: 1500.0,
    currentPrice: 1200.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/3-61.jpg',
  },
  {
    id: 10,
    category: 'HP PRINTER',
    name: 'HP Laserjet Pro M477fdw Multifunction Wireless Color Laser Printer with Duplex Printing',
    price: 1200.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/2-71.jpg',
  },
  {
    id: 11,
    category: 'HP PRINTER',
    name: 'HP OfficeJet Pro 8210 Wireless Printer with Mobile Printing, HP Instant Ink',
    price: 299.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-371.jpg',
  },
  {
    id: 12,
    category: 'HP PRINTER',
    name: 'HP OfficeJet 3830 All-in-One Wireless Printer with Mobile Printing, HP Instant Ink',
    price: 299.0,
    originalPrice: 299.0,
    currentPrice: 149.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-381.jpg',
  },
  {
    id: 13,
    category: 'HP PRINTER',
    name: 'HP Laserjet Pro M477fdw Multifunction Wireless Color Laser Printer with Duplex Printing',
    price: 1200.0,
    originalPrice: 1500.0,
    currentPrice: 1200.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-411.jpg',
  },
  {
    id: 14,
    category: 'HP PRINTER',
    name: 'HP Laserjet Pro M452nw Wireless Color Laser Printer with Built-in Ethernet',
    price: 949.0,
    originalPrice: 999.0,
    currentPrice: 949.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-331.jpg',
  },
  {
    id: 15,
    category: 'HP PRINTER',
    name: 'HP OfficeJet Pro 6978 All-in-One Wireless Printer Mobile Printing',
    price: 199.0,
    originalPrice: 399.0,
    currentPrice: 199.0,
    addToCartText: 'Add To Cart',
    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/11-51.jpg',
  },
  {
    id: 16,
    category: 'HP PRINTER',
    name: 'HP OfficeJet Pro 8025 All-in-One Wireless Printer, Smart Home Office Productivity',
    price: 169.99,
    originalPrice: 199.99,
    currentPrice: 169.99,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/premium-vector/realistic-inkjet-printer-isoalted-white-background_208593-71.jpg?w=740',
  },
  {
    id: 17,
    category: 'HP PRINTER',
    name: 'HP ENVY Pro 6455 Wireless All-in-One Printer, Mobile Print, Scan & Copy, Auto Document Feeder',
    price: 119.99,
    originalPrice: 149.99,
    currentPrice: 119.99,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/premium-vector/realistic-inkjet-printer-isoalted-white-background_208593-72.jpg?w=826',
  },
  {
    id: 18,
    category: 'HP PRINTER',
    name: 'HP OfficeJet 5255 Wireless All-in-One Printer, HP Instant Ink, Works with Alexa',
    price: 129.89,
    originalPrice: 159.99,
    currentPrice: 129.89,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/free-photo/home-printer-based-toner_23-2149287468.jpg?t=st=1716615908~exp=1716619508~hmac=55a35e9c461b70cabad5c0431d24b33d1e42630713cea29b310ce45f99a1aa19&w=826',
  },
  {
    id: 19,
    category: 'HP PRINTER',
    name: 'HP OfficeJet Pro 9025e All-in-One Wireless Color Printer, with bonus 6 months free Instant Ink with HP+ (1G5M0A)',
    price: 329.99,
    originalPrice: 349.99,
    currentPrice: 329.99,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/free-photo/front-view-smiley-woman-using-printer-work_23-2149628869.jpg?t=st=1716615981~exp=1716619581~hmac=3449385c8b90de4b74f58c56d388629c5eb5edafa7cc635d61cfa656ee3ed026&w=826',
  },
  {
    id: 20,
    category: 'HP PRINTER',
    name: 'HP DeskJet 4155e All-in-One Wireless Color Printer, with bonus 6 months free Instant Ink with HP+ (26Q90A)',
    price: 129.99,
    originalPrice: 149.99,
    currentPrice: 129.99,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/premium-photo/printer_23785-345.jpg?w=740',
  },
  {
    id: 21,
    category: 'HP PRINTER',
    name: 'HP Neverstop Laser Printer 1001nw',
    price: 329.89,
    originalPrice: 349.99,
    currentPrice: 329.89,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/free-photo/front-view-smiley-woman-using-printer-work_23-2149628869.jpg?t=st=1716615981~exp=1716619581~hmac=3449385c8b90de4b74f58c56d388629c5eb5edafa7cc635d61cfa656ee3ed026&w=826',
  },
  {
    id: 22,
    category: 'HP PRINTER',
    name: 'HP ENVY Pro 6455 Wireless All-in-One Printer, Mobile Print, Scan & Copy, Auto Document Feeder, Works with Alexa (5SE45A)',
    price: 149.89,
    originalPrice: 169.99,
    currentPrice: 149.89,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/free-photo/home-printer-based-toner_23-2149287464.jpg?t=st=1716616103~exp=1716619703~hmac=b1fb9a7b78cf7260dcde0bd93679ea897e5a32582c1036faa12a049d45d89947&w=826',
  },
  {
    id: 23,
    category: 'HP PRINTER',
    name: 'HP Tango X Smart Wireless Printer with Indigo Linen cover – Mobile Remote Print, Scan, Copy, HP Instant Ink, Works with Alexa (3DP64A)',
    price: 219.99,
    originalPrice: 249.99,
    currentPrice: 219.99,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/free-photo/laptop-wooden-table-with-printer_1232-568.jpg?t=st=1716616121~exp=1716619721~hmac=5f4827bb0c4ead07ba4cdcf60dd9feff3ea56825eefd4db248733842ca1be4cd&w=740',
  },
  {
    id: 24,
    category: 'HP PRINTER',
    name: 'HP OfficeJet 250 All-in-One Portable Printer with Wireless & Mobile Printing (CZ992A), Black, Normal',
    price: 379.89,
    originalPrice: 399.99,
    currentPrice: 379.89,
    addToCartText: 'Add To Cart',
    imageUrl:
      'https://img.freepik.com/premium-photo/printer-scanner-laser-copy-machine-supplies-office_34936-1498.jpg?w=826',
  },
];
