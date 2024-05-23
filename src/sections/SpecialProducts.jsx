import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const products = [
  {
    id: 1,
    category: 'HP PRINTER',
    name: 'HP Envy 4520 Wireless All-in-One Photo Printer with Mobile Printing, HP Instant Ink',
    originalPrice: 599.0,
    currentPrice: 350.0,

    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/9-91.jpg',
  },
  {
    id: 2,
    category: 'HP PRINTER',
    name: 'HP OfficeJet 3830 All-in-One Wireless Printer with Mobile Printing, HP Instant Ink',
    originalPrice: 299.0,
    currentPrice: 149.0,

    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-381.jpg',
  },
  {
    id: 3,
    category: 'HP PRINTER',
    name: 'HP OfficeJet 4650 Wireless All-in-One Photo Printer with Mobile Printing, HP Instant Ink & Amazon Dash Replenishment Ready (F1J03A)',
    originalPrice: 45.0,
    currentPrice: 45.0,

    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-341.jpg',
  },
  {
    id: 4,
    category: 'HP PRINTER',
    name: 'HP OfficeJet Pro 7740 Wide Format All-in-One Printer with Wireless & Mobile Printing, HP Instant Ink',
    originalPrice: 380.0,
    currentPrice: 380.0,

    imageUrl: 'https://www.printonlin.com/wp-content/uploads/2023/08/1-451.jpg',
  },
];

const SpecialProducts = () => {
  return (
    <main className=" flex flex-col  justify-center items-center ">
      <div className="m-4">
        <h1 className="text-4xl text-center border-b-2 border-yellow-500 text-yellow-500">
          Latest Printers
        </h1>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[95%] py-5 bg-white px-4 rounded shadow-2xl">
        {products.map(
          ({ id, category, originalPrice, name, currentPrice, imageUrl }) => {
            return (
              <Card
                key={id}
                className=" border-2 border-gray-200 rounded-lg shadow-md text-center"
              >
                <Card.Img
                  variant="top"
                  src={imageUrl}
                  className="rounded-t-lg h-52 w-full object-contain p-2 border"
                />
                <Card.Body className="px-3 py-2 ">
                  <p className="text-gray-600 font-bold mb-2">{category}</p>
                  <p>{name}</p>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-yellow-500 font-bold text-xl mr-5">
                      ${currentPrice}
                    </span>
                    <span className="text-gray-400 text-lg line-through">
                      ${originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center"></div>

                  <button className="bg-black text-white px-2 py-1 rounded ">
                    Add To Cart
                  </button>
                </Card.Body>
              </Card>
            );
          },
        )}
      </section>
    </main>
  );
};

export default SpecialProducts;
