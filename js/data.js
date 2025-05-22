// Product data
const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      category: 'audio',
      price: 299.99,
      salePrice: 249.99,
      description: 'Experience studio-quality sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium materials for all-day comfort.',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      images: [
        'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
        'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg',
        'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg'
      ],
      featured: true,
      new: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      category: 'accessories',
      price: 199.99,
      salePrice: 179.99,
      description: 'Track your fitness goals with precision using our Smart Fitness Watch. Featuring heart rate monitoring, sleep tracking, and 20+ workout modes.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg',
      images: [
        'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg',
        'https://images.pexels.com/photos/4487477/pexels-photo-4487477.jpeg',
        'https://images.pexels.com/photos/4397811/pexels-photo-4397811.jpeg'
      ],
      featured: true,
      new: true,
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: 'Ultra HD 4K Smart TV',
      category: 'tvs',
      price: 899.99,
      salePrice: 799.99,
      description: 'Transform your home entertainment with our Ultra HD 4K Smart TV. Experience stunning clarity and vibrant colors with 4K resolution and HDR technology.',
      image: 'https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg',
      images: [
        'https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg',
        'https://images.pexels.com/photos/6976101/pexels-photo-6976101.jpeg',
        'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg'
      ],
      featured: true,
      new: false,
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'Professional DSLR Camera',
      category: 'cameras',
      price: 1299.99,
      description: 'Capture life\'s moments with exceptional clarity using our Professional DSLR Camera. Featuring a 24.2MP sensor, 4K video recording capabilities, and advanced autofocus system.',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      images: [
        'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
        'https://images.pexels.com/photos/347714/pexels-photo-347714.jpeg',
        'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg'
      ],
      featured: false,
      new: false,
      rating: 4.9,
      reviews: 78
    },
    {
      id: 5,
      name: 'Premium Smartphone',
      category: 'phones',
      price: 999.99,
      salePrice: 899.99,
      description: 'Stay connected with our Premium Smartphone featuring cutting-edge technology. The 6.7" OLED display offers stunning visuals, while the triple-camera system captures professional-quality photos.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      images: [
        'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
        'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg',
        'https://images.pexels.com/photos/33488/navigation-car-drive-road.jpg'
      ],
      featured: true,
      new: true,
      rating: 4.8,
      reviews: 203
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      category: 'audio',
      price: 149.99,
      salePrice: 129.99,
      description: 'Enjoy immersive sound with our Wireless Earbuds featuring active noise cancellation and crystal-clear audio.',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
      images: [
        'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
        'https://images.pexels.com/photos/4925201/pexels-photo-4925201.jpeg',
        'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg'
      ],
      featured: false,
      new: true,
      rating: 4.7,
      reviews: 112
    },
    {
      id: 7,
      name: 'Gaming Laptop',
      category: 'laptops',
      price: 1599.99,
      description: 'Dominate the gaming world with our high-performance Gaming Laptop. Featuring a 15.6" 144Hz display and the latest-generation processor.',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg',
      images: [
        'https://images.pexels.com/photos/7974/pexels-photo.jpg',
        'https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg',
        'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg'
      ],
      featured: true,
      new: false,
      rating: 4.8,
      reviews: 94
    }
  ];