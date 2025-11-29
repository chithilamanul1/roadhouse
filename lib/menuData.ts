export const MENU_CATEGORIES = [
  { id: "starters", label: "Starters & Short Eats" },
  { id: "mains", label: "Mains & Grills" },
  { id: "rice", label: "Rice & Kottu" },
  { id: "drinks", label: "Juices & Shakes" },
  { id: "dessert", label: "Desserts" },
];

export const MENU_ITEMS = [
  // --- STARTERS ---
  {
    id: "s1",
    category: "starters",
    name: "Cream of Chicken Soup",
    price: "850",
    description: "Served with Croutons/Garlic Bread",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s2",
    category: "starters",
    name: "Hot Battered Mushroom",
    price: "750",
    description: "Deep fried mushrooms with spicy batter",
    image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=800&auto=format&fit=crop" // Fixed
  },
  {
    id: "s3",
    category: "starters",
    name: "Chicken Samosa (3pcs)",
    price: "150",
    description: "Crispy pastry filled with spiced chicken",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s4",
    category: "starters",
    name: "Super Sub",
    price: "1,600",
    description: "The ultimate submarine sandwich loaded with fillings",
    image: "https://images.unsplash.com/photo-1626078299034-7806a38e88bb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s5",
    category: "starters",
    name: "Chicken Burger",
    price: "950",
    description: "Classic grilled chicken patty with fresh veggies",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s6",
    category: "starters",
    name: "Chicken Shawarma",
    price: "1,200",
    description: "Middle-eastern style wrap with grilled chicken",
    image: "https://images.unsplash.com/photo-1633321769407-af3f2fdb3872?q=80&w=800&auto=format&fit=crop"
  },

  // --- MAINS ---
  {
    id: "m1",
    category: "mains",
    name: "BBQ Chicken (Full)",
    price: "1,800",
    description: "Whole chicken marinated in BBQ sauce and grilled",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m2",
    category: "mains",
    name: "Mixed Grill Platter",
    price: "6,000",
    description: "A massive sharing platter with Chicken, Pork, and Sausages",
    image: "https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=800&auto=format&fit=crop" // Fixed
  },
  {
    id: "m3",
    category: "mains",
    name: "Hot Butter Cuttlefish",
    price: "2,100",
    description: "Chef's Special: Crispy fried cuttlefish in butter sauce",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m4",
    category: "mains",
    name: "Kochchi Pork",
    price: "1,700",
    description: "Spicy pork curry cooked with kochchi peppers",
    image: "https://images.unsplash.com/photo-1626804475297-411d8c6b7ebf?q=80&w=800&auto=format&fit=crop" // Fixed
  },

  // --- RICE ---
  {
    id: "r1",
    category: "rice",
    name: "Mixed Fried Rice",
    price: "1,700",
    description: "Wok fried with Chicken, Egg, and Seafood",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "r2",
    category: "rice",
    name: "Chicken Kottu",
    price: "1,200",
    description: "Sri Lankan street food classic with roast chicken",
    image: "https://images.unsplash.com/photo-1626804475315-18747a61d674?q=80&w=800&auto=format&fit=crop" // Fixed
  },
  {
    id: "r3",
    category: "rice",
    name: "Cheese Kottu",
    price: "1,600",
    description: "Our signature Kottu covered in melted cheese",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "r4",
    category: "rice",
    name: "Creamy Cheese Pasta",
    price: "1,900",
    description: "Rich pasta tossed in white cheese sauce",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop"
  },

  // --- DRINKS ---
  {
    id: "d1",
    category: "drinks",
    name: "Lime Juice",
    price: "500",
    description: "Freshly squeezed lime with a hint of mint",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "d2",
    category: "drinks",
    name: "Iced Milo",
    price: "800",
    description: "Thick Milo topped with ice cream",
    image: "https://images.unsplash.com/photo-1592323281739-16b71891b799?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "d3",
    category: "drinks",
    name: "Classic Mojito",
    price: "1,200",
    description: "Refreshing mix of lime, mint, and soda",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32d?q=80&w=800&auto=format&fit=crop"
  },
  
  // --- DESSERT ---
  {
    id: "de1",
    category: "dessert",
    name: "Biscuit Pudding",
    price: "450",
    description: "Layers of marie biscuit and chocolate cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "de2",
    category: "dessert",
    name: "Watalappan",
    price: "500",
    description: "Traditional Sri Lankan jaggery pudding",
    image: "https://images.unsplash.com/photo-1543787220-4180425dc8be?q=80&w=800&auto=format&fit=crop"
  },
];
