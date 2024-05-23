const customerReviews = [
  {
    id: 1,
    title: 'Excellent Product Quality',
    href: '#',
    description:
      'The product exceeded my expectations. The quality is top-notch and the customer service was outstanding. Highly recommend!',
    date: 'Apr 12, 2023',
    datetime: '2023-04-12',
    category: { title: 'Product Reviews', href: '#' },
    author: {
      name: 'John Doe',
      role: 'Verified Buyer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Great Customer Service',
    href: '#',
    description:
      'I had an issue with my order and the customer service team resolved it quickly and efficiently. Very satisfied with the experience.',
    date: 'May 08, 2023',
    datetime: '2023-05-08',
    category: { title: 'Service Reviews', href: '#' },
    author: {
      name: 'Jane Smith',
      role: 'Verified Buyer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Value for Money',
    href: '#',
    description:
      'The product offers great value for money. It performs well and is priced reasonably. I am very happy with my purchase.',
    date: 'Jul 15, 2023',
    datetime: '2023-07-15',
    category: { title: 'Value Reviews', href: '#' },
    author: {
      name: 'Bob Brown',
      role: 'Verified Buyer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function CustomerReview() {
  return (
    <div className="p-6 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-blue-700  sm:text-4xl text-center m-10">
          Customer Reviews
        </h2>

        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200   lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {customerReviews.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between bg-white p-3 rounded-sm shadow-2xl"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
