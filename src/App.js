import React from 'react';

const App = () => {
  const categories = [
    'Cars', 'Motorcycles', 'Mobile Phones', 'For Sale: Houses & Apartments',
    'Scooters', 'Commercial & Other Vehicles', 'For Rent: Houses & Apartments'
  ];

  const recommendations = [
    {
      image: '/api/placeholder/200/150',
      price: '₹ 4,21,101',
      title: 'Toyota Innova 2009-2011 2.5 VX 8 STR',
      details: '2010 - 68,000 km',
      location: 'RABINDRA SADAN, KOLKATA',
      timeAgo: '3 DAYS AGO',
      featured: true
    },
    {
      image: '/api/placeholder/200/150',
      price: '₹ 15,60,000',
      title: 'Good news 1200to 4000 sqft plot available',
      location: 'JAGATPUR, CUTTACK',
      timeAgo: 'SEP 12',
      featured: true
    },
    {
      image: '/api/placeholder/200/150',
      price: '₹ 6,500',
      title: 'iPhone 11 i',
      location: 'SAMUDRAAPUR, MAHARASHTRA',
      timeAgo: 'TODAY'
    },
    {
      image: '/api/placeholder/200/150',
      price: '₹ 21,000',
      title: 'iPhone 13 with accessories in reasonable price',
      location: 'SAMUDRAAPUR, MAHARASHTRA',
      timeAgo: 'TODAY'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/api/placeholder/40/40" alt="OLX Logo" className="h-10" />
            <div className="relative">
              <select className="appearance-none border rounded py-2 px-3 pr-8 leading-tight focus:outline-none focus:shadow-outline">
                <option>India</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            <input type="text" placeholder="Find Cars, Mobile Phones and more..." className="border rounded py-2 px-3 w-64" />
          </div>
          <div className="flex items-center space-x-4">
            <select className="appearance-none bg-transparent font-semibold">
              <option>ENGLISH</option>
            </select>
            <button className="font-semibold">Login</button>
            <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded">+ SELL</button>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex space-x-6">
            <li className="font-semibold">ALL CATEGORIES</li>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <img src="/api/placeholder/1200/200" alt="Stake's Daily Races" className="w-full rounded-lg" />
        </div>

        <h2 className="text-2xl font-bold mb-4">Fresh recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendations.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                {item.featured && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    FEATURED
                  </span>
                )}
                <button className="absolute top-2 right-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{item.price}</h3>
                <p className="text-gray-700 text-sm mb-2">{item.title}</p>
                <p className="text-gray-500 text-xs">{item.details}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 text-xs">{item.location}</span>
                  <span className="text-gray-500 text-xs">{item.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;