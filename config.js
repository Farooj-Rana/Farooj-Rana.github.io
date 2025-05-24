// Restaurant Website Configuration
const config = {
  // Basic Information
  restaurantName: "Farooj Rana",
  tagline: "Authentic Middle Eastern Cuisine",
  address: "123 Culinary Street, Foodville, FD 12345",
  phone: "+1 (123) 456-7890",
  email: "info@faroojrana.com",
  openingHours: {
    monday: "11:00 AM - 10:00 PM",
    tuesday: "11:00 AM - 10:00 PM",
    wednesday: "11:00 AM - 10:00 PM",
    thursday: "11:00 AM - 10:00 PM",
    friday: "11:00 AM - 11:00 PM",
    saturday: "10:00 AM - 11:00 PM",
    sunday: "10:00 AM - 9:00 PM",
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/faroojrana",
    instagram: "https://instagram.com/faroojrana",
    twitter: "https://twitter.com/faroojrana",
    yelp: "https://yelp.com/faroojrana",
  },

  // Hero Section
  hero: {
    heading: "Experience Authentic Middle Eastern Cuisine",
    subheading: "Fresh ingredients, traditional recipes, unforgettable taste",
    ctaText: "View Our Menu",
    backgroundImage: "img/hero-background.jpg",
  },

  // About Section
  about: {
    heading: "Our Story",
    paragraphs: [
      "Founded in 2010, Farooj Rana brings the authentic flavors of Middle Eastern cuisine to your table. Our recipes have been passed down through generations, preserving the traditional taste and cooking methods.",
      "We take pride in using only the freshest ingredients, locally sourced whenever possible, and preparing everything from scratch daily. Our commitment to quality and authenticity has made us a favorite dining destination in the community.",
    ],
    imageUrl: "img/about-image.jpg",
  },

  // Specialties Section
  specialties: [
    {
      name: "Shawarma",
      description:
        "Tender marinated meat, slow-roasted on a vertical rotisserie, served with fresh vegetables and our special sauce.",
      imageUrl:
        "https://source.unsplash.com/400x300/?shawarma,middle-eastern-food",
    },
    {
      name: "Grilled Kababs",
      description:
        "Premium cuts of meat, marinated in our special blend of spices, grilled to perfection.",
      imageUrl:
        "https://source.unsplash.com/400x300/?kabab,grilled-meat,middle-eastern",
    },
    {
      name: "Falafel",
      description:
        "Crispy on the outside, fluffy on the inside, our falafel is made fresh daily with a perfect blend of chickpeas and herbs.",
      imageUrl:
        "https://source.unsplash.com/400x300/?falafel,chickpeas,vegetarian",
    },
  ],

  // Menu Categories
  menuCategories: [
    {
      id: "appetizers",
      name: "Appetizers",
    },
    {
      id: "main-courses",
      name: "Main Courses",
    },
    {
      id: "sides",
      name: "Sides",
    },
    {
      id: "desserts",
      name: "Desserts",
    },
    {
      id: "beverages",
      name: "Beverages",
    },
  ],

  // Menu Items
  menuItems: [
    {
      id: 1,
      name: "Hummus",
      category: "appetizers",
      price: 6.99,
      description:
        "Creamy chickpea dip with tahini, olive oil, and spices. Served with fresh pita bread.",
      imageUrl:
        "https://source.unsplash.com/300x200/?hummus,chickpeas,mediterranean",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 2,
      name: "Baba Ganoush",
      category: "appetizers",
      price: 7.99,
      description:
        "Smoky eggplant dip with tahini, garlic, and lemon juice. Served with fresh pita bread.",
      imageUrl:
        "https://source.unsplash.com/300x200/?baba-ganoush,eggplant,mediterranean",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 3,
      name: "Chicken Shawarma Plate",
      category: "main-courses",
      price: 15.99,
      description:
        "Marinated chicken, slow-roasted on a vertical rotisserie, served with rice, salad, and pita bread.",
      imageUrl:
        "https://source.unsplash.com/300x200/?chicken-shawarma,middle-eastern,rice",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 4,
      name: "Beef Kabab Plate",
      category: "main-courses",
      price: 17.99,
      description:
        "Premium beef, marinated in our special blend of spices, grilled to perfection. Served with rice, salad, and pita bread.",
      imageUrl:
        "https://source.unsplash.com/300x200/?beef-kabab,grilled-meat,skewer",
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 5,
      name: "Falafel Plate",
      category: "main-courses",
      price: 13.99,
      description:
        "Crispy falafel balls made with chickpeas and herbs. Served with tahini sauce, rice, salad, and pita bread.",
      imageUrl:
        "https://source.unsplash.com/300x200/?falafel-plate,vegetarian,middle-eastern",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 6,
      name: "Rice Pilaf",
      category: "sides",
      price: 4.99,
      description:
        "Fragrant basmati rice cooked with aromatic spices and herbs.",
      imageUrl:
        "https://source.unsplash.com/300x200/?rice-pilaf,basmati-rice,aromatic",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
      isSpicy: false,
    },
    {
      id: 7,
      name: "Baklava",
      category: "desserts",
      price: 5.99,
      description:
        "Layers of flaky pastry filled with chopped nuts and sweetened with honey syrup.",
      imageUrl:
        "https://source.unsplash.com/300x200/?baklava,pastry,honey,nuts",
      isVegetarian: true,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
    },
    {
      id: 8,
      name: "Turkish Coffee",
      category: "beverages",
      price: 3.99,
      description: "Strong, rich coffee served in a traditional coffee pot.",
      imageUrl:
        "https://source.unsplash.com/300x200/?turkish-coffee,traditional,pot",
      isVegetarian: true,
      isVegan: true,
      isGlutenFree: true,
      isSpicy: false,
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      text: "The best Middle Eastern food I've had outside of the Middle East. Authentic flavors and great service! Every bite transports you to the heart of the Mediterranean.",
      title: "Food Blogger",
      rating: 5,
      imageUrl:
        "https://source.unsplash.com/100x100/?woman,portrait,professional",
    },
    {
      name: "Michael Rodriguez",
      text: "Their shawarma is to die for! I come here at least once a week for my fix. The meat is perfectly seasoned and the vegetables are always fresh. Highly recommend!",
      title: "Regular Customer",
      rating: 5,
      imageUrl: "https://source.unsplash.com/100x100/?man,portrait,casual",
    },
    {
      name: "Jennifer Lee",
      text: "Delicious food, generous portions, and reasonable prices. The staff is incredibly welcoming and the atmosphere is perfect for both family dinners and date nights.",
      title: "Local Resident",
      rating: 4,
      imageUrl: "https://source.unsplash.com/100x100/?woman,portrait,smile",
    },
    {
      name: "Ahmed Hassan",
      text: "As someone from the Middle East, I can say this is authentic cuisine at its finest. The spices are perfectly balanced and remind me of home. Exceptional quality!",
      title: "Cultural Expert",
      rating: 5,
      imageUrl:
        "https://source.unsplash.com/100x100/?man,portrait,middle-eastern",
    },
  ],

  // Enhanced Gallery Images
  galleryImages: [
    "https://source.unsplash.com/600x600/?middle-eastern-restaurant,interior",
    "https://source.unsplash.com/600x600/?shawarma,food,delicious",
    "https://source.unsplash.com/600x600/?chef,cooking,kitchen",
    "https://source.unsplash.com/600x600/?restaurant,dining,atmosphere",
    "https://source.unsplash.com/600x600/?kabab,grilled,meat",
    "https://source.unsplash.com/600x600/?falafel,vegetarian,middle-eastern",
    "https://source.unsplash.com/600x600/?hummus,appetizer,mediterranean",
    "https://source.unsplash.com/600x600/?baklava,dessert,pastry",
    "https://source.unsplash.com/600x600/?restaurant,outdoor,seating",
  ],

  // Theme Colors (CSS variables)
  themeColors: {
    primary: "#e63946", // A rich red color
    secondary: "#1d3557", // Dark blue
    accent: "#f1faee", // Off-white
    light: "#f1faee",
    dark: "#1d3557",
    success: "#2a9d8f",
    warning: "#e9c46a",
    info: "#457b9d",
  },
};
