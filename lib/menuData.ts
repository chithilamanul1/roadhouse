export const MENU_CATEGORIES = [
  { id: "starters", label: "Starters & Short Eats" },
  { id: "subs_burgers", label: "Subs & Burgers" },
  { id: "mains", label: "BBQ & Grill" },
  { id: "rice_kottu", label: "Rice & Kottu" },
  { id: "portions", label: "Meat Portions" },
  { id: "drinks", label: "Juice Bar" },
  { id: "dessert", label: "Desserts" },
];

export const MENU_ITEMS = [
  // --- STARTERS, SOUPS & FINGER FOOD ---
  {
    id: "soup1",
    category: "starters",
    name: "Cream of Vegetable Soup",
    price: "750",
    description: "Served with Croutons/Garlic Bread",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "soup2",
    category: "starters",
    name: "Cream of Chicken Soup",
    price: "850",
    description: "Served with Croutons/Garlic Bread",
    image: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "soup3",
    category: "starters",
    name: "Tom Yum Soup",
    price: "1,100",
    description: "Spicy and sour Thai soup",
    image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "soup4",
    category: "starters",
    name: "Sweet Corn Soup",
    price: "750",
    description: "Classic sweet corn broth",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXKnJphI7C9VANJyYOUksyY6PQn5zCroJ7A&s"
  },
  {
    id: "ff1",
    category: "starters",
    name: "French Fries",
    price: "700",
    description: "Classic salted fries",
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "ff2",
    category: "starters",
    name: "Loaded Fries",
    price: "1,100",
    description: "Fries topped with cheese and meat",
    image: "https://therecipecritic.com/wp-content/uploads/2023/02/loaded-fries-4.jpg"
  },
  {
    id: "ff3",
    category: "starters",
    name: "Hot Battered Mushroom",
    price: "750",
    description: "Deep fried mushrooms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTenpzfmJpM2qIYf8dxTVAi39x8STC3mqeg&s"
  },
  {
    id: "se1",
    category: "starters",
    name: "Chicken Samosa",
    price: "150",
    description: "Crispy pastry filled with spiced chicken",
    image: "https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "se2",
    category: "starters",
    name: "Fish / Egg Rolls",
    price: "160",
    description: "Sri Lankan style rolls",
    image: "https://www.thespruceeats.com/thmb/Yepl0s9b4UVhGu-7RPmVSVfuZ7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-egg-roll-recipe-694514-4f9643906aa44fa0b8a8f3ed3b85e860.jpg"
  },
  {
    id: "se3",
    category: "starters",
    name: "Chicken Pie",
    price: "200",
    description: "Baked pastry with chicken filling",
    image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chicken_pie_24044_16x9.jpg"
  },

  // --- SUBS & BURGERS ---
  {
    id: "sub1",
    category: "subs_burgers",
    name: "Super Sub",
    price: "1,600",
    description: "Our signature submarine",
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "sub2",
    category: "subs_burgers",
    name: "BBQ Super Sub",
    price: "1,700",
    description: "Loaded sub with BBQ sauce",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "burg1",
    category: "subs_burgers",
    name: "Chicken Burger",
    price: "950",
    description: "Classic grilled chicken patty",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "burg2",
    category: "subs_burgers",
    name: "BBQ Chicken Burger",
    price: "1,100",
    description: "Grilled chicken with BBQ glaze",
    image: "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "burg3",
    category: "subs_burgers",
    name: "BBQ Pork Burger",
    price: "1,200",
    description: "Juicy pork patty with BBQ sauce",
    image: "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "wrap1",
    category: "subs_burgers",
    name: "Chicken Shawarma",
    price: "1,200",
    description: "Middle-eastern style wrap",
    image: "https://images.pexels.com/photos/5779368/pexels-photo-5779368.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "sand1",
    category: "subs_burgers",
    name: "Club Sandwich",
    price: "1,300",
    description: "Triple layered sandwich with fries",
    image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  // --- BBQ & GRILL ---
  {
    id: "bbq1",
    category: "mains",
    name: "BBQ Chicken (Full)",
    price: "1,800",
    description: "Whole chicken marinated and grilled",
    image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "bbq2",
    category: "mains",
    name: "BBQ Pork",
    price: "2,200",
    description: "Grilled pork chops/steaks",
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "bbq3",
    category: "mains",
    name: "Grilled Fish",
    price: "2,100",
    description: "Seasoned grilled fish fillet",
    image: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "plat1",
    category: "mains",
    name: "Meat Grill Platter",
    price: "4,500",
    description: "Assorted grilled meats for sharing",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "plat2",
    category: "mains",
    name: "Mixed Grill Platter",
    price: "6,000",
    description: "Chicken, Pork, Sausages & Wedges",
    image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  // --- RICE & KOTTU ---
  {
    id: "rice1",
    category: "rice_kottu",
    name: "Mixed Fried Rice",
    price: "1,600",
    description: "Wok fried with Chicken, Egg, and Seafood",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "rice2",
    category: "rice_kottu",
    name: "Chicken Fried Rice",
    price: "1,100",
    description: "Classic fried rice with chicken",
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "kottu1",
    category: "rice_kottu",
    name: "Chicken Kottu",
    price: "1,200",
    description: "Sri Lankan street food classic",
    image: "https://cdn.pixabay.com/photo/2021/06/03/01/37/kottu-6305693_960_720.jpg"
  },
  {
    id: "kottu2",
    category: "rice_kottu",
    name: "Cheese Kottu (Any Meat)",
    price: "1,600",
    description: "Signature Kottu covered in cheese",
    image: "https://hotelsawsiri.com/wp-content/uploads/2023/07/cheese-kottu1-min.jpg"
  },
  {
    id: "pasta1",
    category: "rice_kottu",
    name: "Creamy Cheese Pasta",
    price: "1,900",
    description: "Rich pasta in white sauce",
    image: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  // --- MEAT PORTIONS ---
  {
    id: "dev1",
    category: "portions",
    name: "Devilled Chicken",
    price: "1,500",
    description: "Spicy stir-fried chicken",
    image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "dev2",
    category: "portions",
    name: "Hot Butter Cuttlefish",
    price: "2,100",
    description: "Chef's Special: Crispy & Spicy",
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "dev3",
    category: "portions",
    name: "Kochchi Pork",
    price: "1,700",
    description: "Chef's Special: Spicy Pork Curry",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "dev4",
    category: "portions",
    name: "Devilled Beef",
    price: "1,800",
    description: "Spicy stir-fried beef",
    image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  // --- JUICE BAR ---
  {
    id: "d1",
    category: "drinks",
    name: "Lime Juice",
    price: "500",
    description: "Freshly squeezed",
    image: "https://cdn.pixabay.com/photo/2017/08/07/11/31/glass-2602865_1280.jpg"
  },
  {
    id: "d2",
    category: "drinks",
    name: "Iced Milo (Bumba)",
    price: "800",
    description: "Thick Milo with ice cream",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpRI1RTKvmIfFnNQrwWcbxVtLLydB8Aw2-A&s"
  },
  {
    id: "d3",
    category: "drinks",
    name: "Classic Mojito",
    price: "1,200",
    description: "Refreshing mint and lime",
    image: "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "d4",
    category: "drinks",
    name: "Avocado Juice",
    price: "850",
    description: "Fresh blended avocado",
    image: "https://cdn.pixabay.com/photo/2020/03/27/07/51/drink-4972711_1280.jpg"
  },
  {
    id: "d5",
    category: "drinks",
    name: "Chocolate Milkshake",
    price: "1,100",
    description: "Rich chocolate shake",
    image: "https://cdn.pixabay.com/photo/2015/11/23/11/54/chocolate-smoothie-1058191_1280.jpg"
  },

  // --- DESSERTS ---
  {
    id: "de1",
    category: "dessert",
    name: "Chocolate Biscuit Pudding",
    price: "450",
    description: "Layers of biscuit and chocolate",
    image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "de2",
    category: "dessert",
    name: "Watalappan",
    price: "500",
    description: "Traditional jaggery pudding",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1KALc7ZrCWOZAhsE2oBO0thQgXq-jJCIJjw&s"
  },
  {
    id: "de3",
    category: "dessert",
    name: "Waffles (Nutella)",
    price: "1,200",
    description: "Fresh waffles with Nutella",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvDYMvOa1E2OTdwYxw3qc49YvAqgPu4seZQ&s"
  }
];
