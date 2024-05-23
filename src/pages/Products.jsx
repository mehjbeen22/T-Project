import React from 'react';
import { Card } from 'react-bootstrap';

export default function Products() {
  return (
    <main className=" py-10">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Our Top Categories Products
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 w-[95%]  p-4">
          {printers.map(
            ({ id, name, price, imageUrl, addToCartText, category }) => {
              return (
                <Card key={id} className="shadow-lg">
                  <Card.Img
                    src={imageUrl || 'https://via.placeholder.com/150'}
                    className="h-50 w-full border border-gray-200"
                  />
                  <Card.Body className="text-center p-2">
                    <Card.Title className="text-blue-800 font-bold">
                      {category}
                    </Card.Title>
                    <Card.Text>{name}</Card.Text>
                    <Card.Text className="font-bold">Price: ${price}</Card.Text>
                    <button className="bg-blue-800 text-white py-1 px-2 rounded hover:bg-blue-700">
                      {addToCartText}
                    </button>
                  </Card.Body>
                </Card>
              );
            },
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
];
