// Product data
const products = [
    {
      id: 1,
      name: 'Smartix Immerse ProX Premium ANC Wireless Headphone',
      category: 'audio',
      price: 46429,
      description: 'Experience studio-quality sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium materials for all-day comfort.',
      image: 'img/Products/Wireless Headset/smartix-immerse-pro-premium-anc-wireless-headphone-628176_700x.webp',
      images: [
        'img/Products/Wireless Headset/smartix-immerse-pro-premium-anc-wireless-headphone-628176_700x.webp',
        'img/Products/Wireless Headset/smartix-immerse-pro-premium-anc-wireless-headphone-628176_700x.webp',
        'img/Products/Wireless Headset/smartix-immerse-pro-premium-anc-wireless-headphone-701056_700x.webp'
      ],
      featured: true,
      new: true,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'RunmefitGTS 7 Smart Fitness Watch',
      category: 'accessories',
      price: 38605,
      salePrice: 179.99,
      description: 'Track your fitness goals with precision using our Smart Fitness Watch. Featuring heart rate monitoring, sleep tracking, and 20+ workout modes.',
      image: 'img/Products/gts7_smart_watch_black.webp',
      images: [
        'img/Products/gts7_smart_watch_black.webp',
        'img/Products/gts7_black_strap_-_view_6.webp',
        'img/Products/runmefit_gts7_smart_watch.webp',
        'img/Products/gts7_black_strap_-_view_4.webp'
      ],
      featured: true,
      new: true,
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: 'TV Smart Hisense - 55 inches- 55A6N- 4K ULTRA HD - black- 6 months warranty',
      category: 'tvs',
      price: 260000,
      description: 'Transform your home entertainment with our Ultra HD 4K Smart TV. Experience stunning clarity and vibrant colors with 4K resolution and HDR technology.',
      image: 'img/Products/Hisense Smart Tv/tv_smart_hisense_-_55_pouces_4k_ultra_hd_3_.jpg',
      images: [
        'img/Products/Hisense Smart Tv/tv_smart_hisense_-_55_pouces_4k_ultra_hd_3_.jpg',
        'img/Products/Hisense Smart Tv/tv_smart_hisense_-_55_pouces_4k_ultra_hd_4_.jpg',
        'img/Products/Hisense Smart Tv/tv_smart_hisense_-_55_pouces_4k_ultra_hd_5_.jpg',
        'img/Products/Hisense Smart Tv/tv_smart_hisense_-_55_pouces_4k_ultra_hd_1_.jpg',
        'img/Products/Hisense Smart Tv/tv_smart_hisense_-_55_pouces_4k_ultra_hd_6_.jpg',
        'img/Products/Hisense Smart Tv/tv_smart_hisense_-_55_pouces_4k_ultra_hd_8_.jpg'
      ],
      featured: true,
      new: false,
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'Nikon D850 DSLR Camera - 45.7MP BSI Sensor, 4K UHD Video, 153-Point AF System',
      category: 'cameras',
      price: 1602211,
      description: 'Capture life\'s moments with exceptional clarity using our Professional DSLR Camera. Featuring a 24.2MP sensor, 4K video recording capabilities, and advanced autofocus system.',
      image: 'img/Products/DSLR Camera/Nikon-D850-DSLR-Camera-Body-Only_b26b168a-63ce-4167-8e28-1c4846d360c0.81eb8ad705e57895fd9e00d661582a9f.webp',
      images: [
        'img/Products/DSLR Camera/Nikon-D850-DSLR-Camera-Body-Only_b26b168a-63ce-4167-8e28-1c4846d360c0.81eb8ad705e57895fd9e00d661582a9f.webp',
        'img/Products/DSLR Camera/45a594cc-932b-4b88-9267-b2d6a3bf2d32.cef8b8f71c8beeaf44d0ba80bb50a2e5.webp',
        'img/Products/DSLR Camera/34a7c18e-619b-4f41-a6bd-46fb625ccc68.79468a90d8cebd56de27ea0f8cf2de43.webp'
      ],
      featured: false,
      new: false,
      rating: 4.9,
      reviews: 78
    },
    {
      id: 5,
      name: 'Apple iPhone 13 Pro, 128GB, Graphite - Unlocked (Renewed)',
      category: 'phones',
      price: 198359,
      salePrice: 899.99,
      description: 'Stay connected with our Premium Smartphone featuring cutting-edge technology. The 6.7" OLED display offers stunning visuals, while the triple-camera system captures professional-quality photos.',
      image: 'img/Products/iPhone 13 Pro/51UtM-A3fdL._AC_SL1000_.jpg',
      images: [
        'img/Products/iPhone 13 Pro/51UtM-A3fdL._AC_SL1000_.jpg',
        'img/Products/iPhone 13 Pro/51kVvsTzVhL._AC_SL1000_.jpg',
        'img/Products/iPhone 13 Pro/51u+QLrHn-L._AC_SL1000_.jpg',
        'img/Products/iPhone 13 Pro/418R7s-mnvL._AC_SL1000_.jpg'
      ],
      featured: true,
      new: true,
      rating: 4.8,
      reviews: 203
    },
    {
      id: 6,
      name: 'Hoco - EQ2 true wireless bluetooth headset - bluetooth V5.3 - IPX-5',
      category: 'audio',
      price: 5500,
      description: 'Enjoy immersive sound with our Wireless Earbuds featuring active noise cancellation and crystal-clear audio.',
      image: 'img/Products/Hoco earbuds/_couteurs_hoco_b.jpg',
      images: [
        'img/Products/Hoco earbuds/_couteurs_hoco_b.jpg',
        'img/Products/Hoco earbuds/_couteurs_hoco_g.jpg',
        'img/Products/Hoco earbuds/_couteurs_hoco_a.jpg'
      ],
      featured: false,
      new: true,
      rating: 4.7,
      reviews: 112
    },
    {
      id: 7,
      name: 'ASUS ROG Strix G15 2021 Gaming Laptop, 15.6” 144Hz FHD, NVIDIA RTX 3060, Ryzen 9 5900HX, 16GB DDR4, 512GB SSD, Windows 10, G513QM-ES94',
      category: 'laptops',
      price: 724087,
      description: 'Dominate the gaming world with our high-performance Gaming Laptop. Featuring a 15.6" 144Hz display and the latest-generation processor.',
      image: 'img/Products/Asus Rog Strix Gaming laptop/41enLmR6K4L._SS400_.jpg',
      images: [
        'img/Products/Asus Rog Strix Gaming laptop/41enLmR6K4L._SS400_.jpg',
        'img/Products/Asus Rog Strix Gaming laptop/41DTxVfWIPL._SS400_.jpg',
        'img/Products/Asus Rog Strix Gaming laptop/31N2pwzBVCL._SS400_.jpg',
        'img/Products/Asus Rog Strix Gaming laptop/31LTFODWIyL._SS400_.jpg',
        'img/Products/Asus Rog Strix Gaming laptop/316utD9XqBL._SS400_.jpg'
      ],
      featured: true,
      new: false,
      rating: 4.8,
      reviews: 94
    }
  ];