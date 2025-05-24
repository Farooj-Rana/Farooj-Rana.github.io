// Restaurant Website Configuration
const config = {
  // Basic Information
  restaurantName: "Farooj Rana",
  tagline: "Authentic Middle Eastern & International Cuisine",
  address: "الشقيري مدخل الشقيري الشارع العام غرب الورش",
  phone: "0535177327",
  email: "info@faroojrana.com",
  openingHours: {
    monday: "11:00 AM - 11:00 PM",
    tuesday: "11:00 AM - 11:00 PM",
    wednesday: "11:00 AM - 11:00 PM",
    thursday: "11:00 AM - 11:00 PM",
    friday: "11:00 AM - 12:00 AM",
    saturday: "10:00 AM - 12:00 AM",
    sunday: "10:00 AM - 11:00 PM",
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/faroojrana",
    instagram: "https://instagram.com/faroojrana",
    twitter: "https://twitter.com/faroojrana",
    whatsapp: "https://wa.me/966535177327",
  },

  // Hero Section
  hero: {
    heading: "فروج رنا - Farooj Rana",
    subheading:
      "أطباق شرقية وعالمية أصيلة - Authentic Middle Eastern & International Cuisine",
    ctaText: "استكشف قائمتنا - Explore Our Menu",
    backgroundImage: "img/hero-background.jpg",
  },

  // About Section
  about: {
    heading: "قصتنا - Our Story",
    paragraphs: [
      "فروج رنا يقدم أفضل الأطباق الشرقية والعالمية بنكهات أصيلة ومكونات طازجة. نحن نفخر بتقديم الشاورما، البرجر، البيتزا، والمعكرونة بأعلى جودة.",
      "Farooj Rana brings you the finest Middle Eastern and international dishes with authentic flavors and fresh ingredients. We pride ourselves on serving premium shawarma, burgers, pizza, and pasta with the highest quality standards.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
  },

  // Specialties Section
  specialties: [
    {
      name: "شاورما مميزة - Premium Shawarma",
      description:
        "شاورما طازجة محضرة يومياً بأجود أنواع اللحوم والدجاج مع الخضار الطازجة والصلصات الخاصة",
      imageUrl:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
    },
    {
      name: "برجر فاخر - Gourmet Burgers",
      description:
        "برجر طازج مع لحم عالي الجودة وخضار طازجة وصلصات مميزة، محضر حسب الطلب",
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    },
    {
      name: "بيتزا إيطالية - Italian Pizza",
      description:
        "بيتزا طازجة بعجينة محضرة يومياً ومكونات إيطالية أصيلة وجبنة موزاريلا فاخرة",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    },
  ],

  // Menu Categories
  menuCategories: [
    { id: "shawarma", name: "شاورما - Shawarma" },
    { id: "burgers", name: "برجر - Burgers" },
    { id: "pizza", name: "بيتزا - Pizza" },
    { id: "pasta", name: "معكرونة - Pasta" },
    { id: "chicken", name: "دجاج - Chicken" },
    { id: "appetizers", name: "مقبلات - Appetizers" },
    { id: "beverages", name: "مشروبات - Beverages" },
  ],

  // Menu Items based on the images
  menuItems: [
    // Pasta Items
    {
      id: 1,
      name: "باستا نجاتو - Pasta Negato",
      category: "pasta",
      price: 20.0,
      description: "معكرونة بصلصة كريمية مع الدجاج والخضار الطازجة",
      imageUrl:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 2,
      name: "باستا كريسبي - Pasta Crispy",
      category: "pasta",
      price: 22.0,
      description: "معكرونة مقرمشة بالدجاج والجبن والصلصة الخاصة",
      imageUrl:
        "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 3,
      name: "تشيكن فرايز بيناميت - Chicken Fries Dynamite",
      category: "pasta",
      price: 18.0,
      description: "قطع دجاج مقرمشة مع البطاطس والصلصة الحارة",
      imageUrl:
        "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: true,
    },
    {
      id: 4,
      name: "تشيكن فرايز - Chicken Fries",
      category: "pasta",
      price: 16.0,
      description: "قطع دجاج مقرمشة مع البطاطس المقلية والصلصات",
      imageUrl:
        "https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 5,
      name: "باستا الدجاج - Chicken Pasta",
      category: "pasta",
      price: 22.0,
      description: "معكرونة بالدجاج والكريمة والخضار الطازجة",
      imageUrl:
        "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 6,
      name: "باستا الكشار - Pasta Kashar",
      category: "pasta",
      price: 18.0,
      description: "معكرونة بجبن الكشار والصلصة البيضاء",
      imageUrl:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 7,
      name: "باستا مشكل - Mixed Pasta",
      category: "pasta",
      price: 25.0,
      description: "معكرونة مشكلة بالدجاج واللحم والخضار",
      imageUrl:
        "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 8,
      name: "باستا الجبن - Cheese Pasta",
      category: "pasta",
      price: 18.0,
      description: "معكرونة بأنواع الجبن المختلفة والكريمة",
      imageUrl:
        "https://images.unsplash.com/photo-1588013273468-315900bafd4d?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },

    // Pizza Items
    {
      id: 9,
      name: "بيتزا جبنة - Cheese Pizza",
      category: "pizza",
      price: 19.75,
      description: "بيتزا كلاسيكية بالجبن الموزاريلا الطازج",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 10,
      name: "بيتزا لحم - Meat Pizza",
      category: "pizza",
      price: 25.25,
      description: "بيتزا باللحم المفروم والخضار والجبن",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 11,
      name: "بيتزا بابروني - Pepperoni Pizza",
      category: "pizza",
      price: 22.25,
      description: "بيتزا بالبابروني والجبن الموزاريلا",
      imageUrl:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 12,
      name: "بيتزا دجاج رنج - Chicken Ranch Pizza",
      category: "pizza",
      price: 22.25,
      description: "بيتزا بالدجاج وصلصة الرانش والخضار",
      imageUrl:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 13,
      name: "بيتزا دجاج - Chicken Pizza",
      category: "pizza",
      price: 22.25,
      description: "بيتزا بقطع الدجاج والخضار والجبن",
      imageUrl:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 14,
      name: "بيتزا خضار - Vegetable Pizza",
      category: "pizza",
      price: 21.75,
      description: "بيتزا بالخضار الطازجة والجبن",
      imageUrl:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },

    // Shawarma Items
    {
      id: 15,
      name: "تورتيلا زعتر - Zaatar Tortilla",
      category: "shawarma",
      price: 8.0,
      description: "تورتيلا طازجة بالزعتر والزيت والخضار",
      imageUrl:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 16,
      name: "تورتيلا دجاج مايست هراق - Spicy Chicken Tortilla",
      category: "shawarma",
      price: 11.0,
      description: "تورتيلا بالدجاج الحار والخضار والصلصة",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: true,
    },
    {
      id: 17,
      name: "تورتيلا دجاج مسحب - Pulled Chicken Tortilla",
      category: "shawarma",
      price: 10.0,
      description: "تورتيلا بالدجاج المسحب والخضار الطازجة",
      imageUrl:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 18,
      name: "تورتيلا عادي/حراق - Regular/Spicy Tortilla",
      category: "shawarma",
      price: 10.0,
      description: "تورتيلا كلاسيكية بالدجاج أو اللحم مع خيار حار",
      imageUrl:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },

    // Burgers
    {
      id: 19,
      name: "شاورما بسكت - Shawarma Biscuit",
      category: "burgers",
      price: 7.0,
      description: "شاورما في خبز البسكويت مع الخضار والصلصة",
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 20,
      name: "تورتيلا روبيان - Shrimp Tortilla",
      category: "shawarma",
      price: 16.0,
      description: "تورتيلا بالروبيان الطازج والخضار والصلصة الخاصة",
      imageUrl:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 21,
      name: "تورتيلا نيلية سمك - Fish Tortilla",
      category: "shawarma",
      price: 15.0,
      description: "تورتيلا بالسمك الطازج والخضار والصلصة",
      imageUrl:
        "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 22,
      name: "تورتيلا أصابع سمك - Fish Fingers Tortilla",
      category: "shawarma",
      price: 15.0,
      description: "تورتيلا بأصابع السمك المقرمشة والخضار",
      imageUrl:
        "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },

    // Chicken Items
    {
      id: 23,
      name: "بطاطس بهارات - Spiced Potatoes",
      category: "appetizers",
      price: 5.0,
      description: "بطاطس مقلية بالبهارات الخاصة",
      imageUrl:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
      isSpicy: true,
    },
    {
      id: 24,
      name: "حلقات بصل - Onion Rings",
      category: "appetizers",
      price: 8.0,
      description: "حلقات البصل المقرمشة مع الصلصة",
      imageUrl:
        "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 25,
      name: "صحن بطاطس - Potato Plate",
      category: "appetizers",
      price: 4.0,
      description: "صحن بطاطس مقلية طازجة",
      imageUrl:
        "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
      isSpicy: false,
    },
    {
      id: 26,
      name: "بطاطس كريسبي - Crispy Potatoes",
      category: "appetizers",
      price: 6.0,
      description: "بطاطس مقرمشة بالتوابل الخاصة",
      imageUrl:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop&crop=center",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
      isSpicy: false,
    },

    // Additional Burger Items
    {
      id: 27,
      name: "برجر عادي لحم - Regular Beef Burger",
      category: "burgers",
      price: 12.0,
      description: "برجر لحم كلاسيكي مع الخضار والصلصة",
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 28,
      name: "برجر دجاج حار - Spicy Chicken Burger",
      category: "burgers",
      price: 14.0,
      description: "برجر دجاج حار مع الخضار والصلصة الحارة",
      imageUrl:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: true,
    },
    {
      id: 29,
      name: "برجر دجاج عادي - Regular Chicken Burger",
      category: "burgers",
      price: 12.0,
      description: "برجر دجاج طازج مع الخضار والصلصة",
      imageUrl:
        "https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },

    // Chicken Items
    {
      id: 30,
      name: "دجاج مقلي - Fried Chicken",
      category: "chicken",
      price: 18.0,
      description: "قطع دجاج مقلية مقرمشة مع البهارات الخاصة",
      imageUrl:
        "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 31,
      name: "أجنحة دجاج - Chicken Wings",
      category: "chicken",
      price: 16.0,
      description: "أجنحة دجاج مشوية بالصلصة الخاصة",
      imageUrl:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop&crop=center",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "أحمد محمد - Ahmed Mohammed",
      text: "أفضل شاورما في المنطقة! الطعم أصيل والخدمة ممتازة. أنصح الجميع بتجربة فروج رنا.",
      title: "عميل دائم - Regular Customer",
      rating: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "فاطمة العلي - Fatima Al-Ali",
      text: "البيتزا والمعكرونة لذيذة جداً، والأسعار معقولة. مكان عائلي رائع ونظيف.",
      title: "أم لثلاثة أطفال - Mother of Three",
      rating: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "سعد الغامدي - Saad Al-Ghamdi",
      text: "تنوع رائع في القائمة، من الأكل الشرقي للعالمي. جودة عالية وطعم مميز.",
      title: "خبير طعام - Food Expert",
      rating: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "نورا السعيد - Nora Al-Saeed",
      text: "الخدمة سريعة والطعام طازج. أحب البرجر والشاورما هنا، طعم لا يُنسى!",
      title: "طالبة جامعية - University Student",
      rating: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ],

  // Enhanced Gallery Images
  galleryImages: [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&h=600&fit=crop",
  ],

  // Theme Colors matching the menu design
  themeColors: {
    primary: "#FFD700", // Golden yellow from menu
    secondary: "#DC143C", // Red from menu
    accent: "#FF6B35", // Orange accent
    light: "#FFF8DC", // Light cream
    dark: "#2C3E50", // Dark blue-gray
    success: "#28A745",
    warning: "#FFC107",
    info: "#17A2B8",
  },
};
