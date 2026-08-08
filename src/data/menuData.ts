import { MenuItem, ExtraOption } from '../types';

export const HERO_PIZZA_IMAGE = '/src/assets/images/kpg_hero_pizza_1786198233804.jpg';
export const DEAL_BANNER_IMAGE = '/src/assets/images/kpg_deal_banner_1786198255134.jpg';
export const KPG_LOGO_IMAGE = '/src/assets/images/kpg_logo_image_1786198278488.jpg';

export const PIZZA_EXTRA_TOPPINGS: Record<string, number> = {
  'S': 100,
  'M': 120,
  'L': 150,
  'XL': 200,
};

export const COMMON_EXTRAS: ExtraOption[] = [
  { id: 'extra-cheese', name: 'Extra Cheese Slice', price: 70 },
  { id: 'dip-sauce', name: 'Garlic Mayo Dip Sauce', price: 70 },
  { id: 'spicy-dip', name: 'Spicy Chili Dip Sauce', price: 70 },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- REGULAR FLAVORS PIZZAS ---
  {
    id: 'pizza-tikka',
    name: 'Tikka Pizza',
    category: 'Pizza - Regular',
    description: 'Traditional Tikka spiced tender chicken, red onions, mozzarella, signature tomato base.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'pizza-fajita',
    name: 'Fajita Pizza',
    category: 'Pizza - Regular',
    description: 'Smoky Fajita chicken chunks, crisp green bell peppers, onions, melted mozzarella cheese.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    badge: 'Bestseller',
    isPopular: true
  },
  {
    id: 'pizza-achari',
    name: 'Achari Pizza',
    category: 'Pizza - Regular',
    description: 'Tangy Pakistani pickle spices, spiced marinated chicken, fresh green chilies, onions, cheese.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    isSpicy: true
  },
  {
    id: 'pizza-hot-spicy',
    name: 'Hot & Spicy Pizza',
    category: 'Pizza - Regular',
    description: 'Jalapenos, spicy chicken boti, red chilies, fiery tomato sauce, double mozzarella.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    badge: '🔥 Hot',
    isSpicy: true
  },
  {
    id: 'pizza-tandoori',
    name: 'Tandoori Pizza',
    category: 'Pizza - Regular',
    description: 'Tandoori grilled chicken boti, garlic sauce swirl, onions, bell peppers, fresh herbs.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'pizza-supreme',
    name: 'Supreme Pizza',
    category: 'Pizza - Regular',
    description: 'Loaded with chicken boti, pepperoni slices, bell peppers, black olives, onions, rich mozzarella.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pizza-vegetable',
    name: 'Vegetable Pizza',
    category: 'Pizza - Regular',
    description: 'Fresh mushrooms, green peppers, sweet corn, black olives, ripe tomatoes, red onions.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pizza-cheezious',
    name: 'Cheezious Pizza',
    category: 'Pizza - Regular',
    description: 'Double layer mozzarella & cheddar cheese blend with savory garlic herb butter crust.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80',
    badge: 'Cheese Lovers'
  },
  {
    id: 'pizza-peri-peri',
    name: 'Peri Peri Pizza',
    category: 'Pizza - Regular',
    description: 'Spicy zesty Peri-Peri marinated chicken, red paprika, bell peppers, spicy mayo drizzle.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 499, M: 999, L: 1299, XL: 1849 },
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    isSpicy: true
  },

  // --- GLOBAL FAVORITES PIZZAS ---
  {
    id: 'pizza-kpg-special',
    name: 'KPG Special Pizza',
    category: 'Pizza - Global',
    description: "Chef's signature creation loaded with chicken boti, seekh kabab chunks, jalapenos, mushrooms, olives & garlic cream sauce.",
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 700, M: 1099, L: 1399, XL: 1949 },
    image: HERO_PIZZA_IMAGE,
    badge: 'KPG Signature',
    isPopular: true
  },
  {
    id: 'pizza-kababish',
    name: 'Kababish Pizza',
    category: 'Pizza - Global',
    description: 'BBQ Seekh Kabab slices, tender chicken chunks, green peppers, onions, aromatic Pakistani spices.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 700, M: 1099, L: 1399, XL: 1949 },
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef Special'
  },
  {
    id: 'pizza-mughlai',
    name: 'Mughlai Pizza',
    category: 'Pizza - Global',
    description: 'Mughlai royal white sauce base, mild spiced cream chicken, almonds, green bell pepper, cheese.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 700, M: 1099, L: 1399, XL: 1949 },
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pizza-malai-boti',
    name: 'Malai Boti Pizza',
    category: 'Pizza - Global',
    description: 'Creamy Malai Boti chicken chunks, mild green chilies, cream sauce, bell pepper, mozzarella.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { S: 700, M: 1099, L: 1399, XL: 1949 },
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    badge: 'Creamy'
  },

  // --- PREMIUM PIZZAS ---
  {
    id: 'pizza-newyork-stuff',
    name: 'Newyork Stuff Pizza',
    category: 'Pizza - Premium',
    description: 'Stuffed cheese & minced chicken ring crust, rich tomato sauce, premium mozzarella, spicy chicken chunks.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { M: 1200, L: 1700, XL: 2100 },
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80',
    badge: 'Stuffed Crust'
  },
  {
    id: 'pizza-crown-crust',
    name: 'Crown Crust Pizza',
    category: 'Pizza - Premium',
    description: 'Crown-shaped golden crust stuffed with cream cheese bites, loaded with supreme chicken boti & veggies.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { M: 1200, L: 1700, XL: 2100 },
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=800&q=80',
    badge: '👑 Crown Crust',
    isPopular: true
  },
  {
    id: 'pizza-kabab-crust',
    name: 'Kabab Crust Pizza',
    category: 'Pizza - Premium',
    description: 'Crust rim stuffed with juicy Seekh Kababs, topped with spicy chicken, jalapenos & BBQ sauce.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { M: 1200, L: 1700, XL: 2100 },
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    badge: 'Kabab Stuffed'
  },
  {
    id: 'pizza-cheese-crust',
    name: 'Cheese Crust Pizza',
    category: 'Pizza - Premium',
    description: 'Outer crust stuffed to the brim with oozing mozzarella cheese, topped with choice chicken toppings.',
    hasSizes: true,
    sizeType: 'pizza',
    sizePrices: { M: 1200, L: 1700, XL: 2100 },
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    badge: 'Extra Cheese'
  },

  // --- DEALS ---
  {
    id: 'deal-1',
    name: 'Deal 1',
    category: 'Deals',
    description: '1 Zinger Burger + Regular Fries + 1 Regular Drink',
    price: 500,
    image: DEAL_BANNER_IMAGE,
    isDeal: true,
    dealNumber: 1,
    dealItems: ['Zinger Burger', 'Fries', 'Regular Drink'],
    badge: 'Super Saver'
  },
  {
    id: 'deal-2',
    name: 'Deal 2',
    category: 'Deals',
    description: '1 Patty Burger + Regular Fries + 1 Regular Drink',
    price: 400,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 2,
    dealItems: ['Patty Burger', 'Fries', 'Regular Drink']
  },
  {
    id: 'deal-3',
    name: 'Deal 3',
    category: 'Deals',
    description: '1 Paratha Roll + 5 Pc Nuggets + 1 Regular Drink',
    price: 580,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 3,
    dealItems: ['Paratha Roll', '5 Pc Nuggets', 'Regular Drink']
  },
  {
    id: 'deal-4',
    name: 'Deal 4',
    category: 'Deals',
    description: '1 Chicken Shawarma + 5 Pc Nuggets + 1 Regular Drink',
    price: 480,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 4,
    dealItems: ['Chicken Shawarma', '5 Pc Nuggets', 'Regular Drink']
  },
  {
    id: 'deal-5',
    name: 'Deal 5',
    category: 'Deals',
    description: '3 Zinger Burgers + 5 Pc Nuggets + Dip Sauce + 1 Liter Drink',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 5,
    dealItems: ['3 Zinger Burgers', '5 Pc Nuggets', 'Dip Sauce', '1 Liter Drink'],
    badge: 'Popular Combo',
    isPopular: true
  },
  {
    id: 'deal-6',
    name: 'Deal 6',
    category: 'Deals',
    description: '1 Medium Pizza + 2 Zinger Burgers + Regular Fries + 1 Liter Drink',
    price: 1900,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 6,
    dealItems: ['1 Medium Pizza', '2 Zinger Burgers', 'Fries', '1 Liter Drink'],
    badge: 'Value Pack'
  },
  {
    id: 'deal-7',
    name: 'Deal 7',
    category: 'Deals',
    description: '2 Large Pizzas + 6 Hot Wings + 5 Zinger Burgers + 1.5 Liter Drink',
    price: 4900,
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 7,
    dealItems: ['2 Large Pizzas', '6 Hot Wings', '5 Zinger Burgers', '1.5 Liter Drink'],
    badge: 'Mega Feast'
  },
  {
    id: 'deal-8',
    name: 'Deal 8',
    category: 'Deals',
    description: '2 Medium Pizzas + Regular Fries + 1.5 Liter Drink',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 8,
    dealItems: ['2 Medium Pizzas', 'Fries', '1.5 Liter Drink']
  },
  {
    id: 'deal-9',
    name: 'Deal 9',
    category: 'Deals',
    description: '2 Large Pizzas + 1.5 Liter Drink',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 9,
    dealItems: ['2 Large Pizzas', '1.5 Liter Drink'],
    badge: 'Pizza BOGO'
  },
  {
    id: 'deal-10',
    name: 'Deal 10',
    category: 'Deals',
    description: "2 Small Pizza's + 1 Liter Drink",
    price: 1050,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 10,
    dealItems: ["2 Small Pizza's", '1 Liter Drink']
  },
  {
    id: 'deal-11',
    name: 'Deal 11',
    category: 'Deals',
    description: '4 Chicken Shawarmas + 1 Liter Drink',
    price: 850,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 11,
    dealItems: ['4 Chicken Shawarmas', '1 Liter Drink']
  },
  {
    id: 'deal-12',
    name: 'Deal 12',
    category: 'Deals',
    description: '4 Zinger Burgers + 1 Liter Drink',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 12,
    dealItems: ['4 Zinger Burgers', '1 Liter Drink']
  },
  {
    id: 'deal-13',
    name: 'Deal 13',
    category: 'Deals',
    description: '4 Wraps + 1 Liter Drink + 1 Dip Sauce',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    isDeal: true,
    dealNumber: 13,
    dealItems: ['4 Wraps', '1 Liter Drink', '1 Dip Sauce']
  },

  // --- BURGERS ---
  {
    id: 'burger-zinger',
    name: 'Zinger Burger',
    category: 'Burgers',
    description: 'Crispy fried chicken zinger fillet, iceberg lettuce, mayo, soft sesame bun.',
    price: 330,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Crispy Favorite',
    isPopular: true
  },
  {
    id: 'burger-patty',
    name: 'Patty Burger',
    category: 'Burgers',
    description: 'Juicy seasoned chicken patty, fresh tomatoes, lettuce, creamy mayo sauce.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'burger-mighty',
    name: 'Mighty Burger',
    category: 'Burgers',
    description: 'Double crispy zinger fillets, double cheese slice, mayo, spicy hot sauce.',
    price: 520,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    badge: 'Double Loaded'
  },
  {
    id: 'burger-tower',
    name: 'Tower Burger',
    category: 'Burgers',
    description: 'Zinger fillet + crispy hash brown/patty, melted cheese slice, lettuce, special KPG sauce.',
    price: 550,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80',
    badge: 'Huge Stack'
  },
  {
    id: 'burger-grill',
    name: 'Grill Burger',
    category: 'Burgers',
    description: 'Flame-grilled seasoned chicken breast, caramelized onions, BBQ glaze, melted cheese.',
    price: 400,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'burger-chappali',
    name: 'Chappali Burger',
    category: 'Burgers',
    description: 'Authentic traditional Chapli Kabab patty, spicy green mint chutney, onions, fresh tomatoes.',
    price: 300,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f6?auto=format&fit=crop&w=800&q=80',
    isSpicy: true
  },
  {
    id: 'burger-kpg-special',
    name: 'KPG Special Burger',
    category: 'Burgers',
    description: 'Signature loaded burger with zinger fillet, fried egg, cheese, secret sauce (Optionally extra cheese +50).',
    price: 400,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    badge: 'KPG Special',
    isPopular: true
  },

  // --- SHAWARMA & PARATHA ROLLS ---
  {
    id: 'shawarma-chicken',
    name: 'Chicken Shawarma',
    category: 'Shawarma & Paratha',
    description: 'Spiced shredded chicken, garlic sauce, pickles wrapped in warm pita bread.',
    price: 200,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 'shawarma-zinger',
    name: 'Zinger Shawarma',
    category: 'Shawarma & Paratha',
    description: 'Crispy zinger strips, spicy sauce, pickles, mayo in pita bread.',
    price: 330,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'paratha-chicken',
    name: 'Chicken Paratha Roll',
    category: 'Shawarma & Paratha',
    description: 'Crispy fried layered Paratha wrapped around spiced chicken boti, ring onions, green chutney.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'paratha-zinger',
    name: 'Zinger Paratha',
    category: 'Shawarma & Paratha',
    description: 'Zinger strips wrapped inside golden crispy layered Paratha with garlic mayo.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    badge: 'Must Try'
  },
  {
    id: 'paratha-kabab',
    name: 'Paratha Kabab Roll',
    category: 'Shawarma & Paratha',
    description: 'Grilled Seekh Kabab wrapped in hot buttery Paratha with chutney and ring onions.',
    price: 270,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shawarma-kababish',
    name: 'Shawarma Kababish Roll',
    category: 'Shawarma & Paratha',
    description: 'Kababish spiced chicken shawarma fill in soft pita wrap.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roll-kpg-special',
    name: 'KPG Special Roll',
    category: 'Shawarma & Paratha',
    description: 'Loaded with double chicken, cheese slice, garlic sauce, special spices in crispy Paratha.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    badge: 'KPG Special'
  },

  // --- WRAPS ---
  {
    id: 'wrap-crispy-zinger',
    name: 'Crispy Zinger Wrap',
    category: 'Wraps',
    description: 'Crispy chicken tenders, lettuce, cheese, mayo wrapped in warm tortilla.',
    price: 370,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wrap-seekh-kabab',
    name: 'Seekh Kabab Wrap',
    category: 'Wraps',
    description: 'Charbroiled Seekh Kabab, onions, mint sauce, cheese in grilled tortilla.',
    price: 370,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wrap-arabic',
    name: 'Arabic Wrap',
    category: 'Wraps',
    description: 'Middle-Eastern style seasoned chicken, garlic paste, fries inside pita/tortilla.',
    price: 370,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },

  // --- WINGS & APPETIZERS ---
  {
    id: 'app-nuggets',
    name: 'Nuggets',
    category: 'Wings & Appetizers',
    description: 'Golden crispy chicken nuggets served with garlic mayo dip sauce.',
    hasSizes: true,
    sizeType: 'wings',
    sizePrices: { '5pc': 300, '10pc': 550 },
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'app-hot-wings',
    name: 'Hot Wings',
    category: 'Wings & Appetizers',
    description: 'Spicy crispy coated fried chicken wings.',
    hasSizes: true,
    sizeType: 'wings',
    sizePrices: { '5pc': 300, '10pc': 550 },
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
    isSpicy: true
  },
  {
    id: 'app-malai-wings',
    name: 'Malai Wings',
    category: 'Wings & Appetizers',
    description: 'Creamy malai marinated baked/fried juicy wings.',
    hasSizes: true,
    sizeType: 'wings',
    sizePrices: { '5pc': 350, '10pc': 600 },
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'app-bbq-wings',
    name: 'BBQ Wings',
    category: 'Wings & Appetizers',
    description: 'Crispy wings glazed in smoky sweet BBQ sauce.',
    hasSizes: true,
    sizeType: 'wings',
    sizePrices: { '5pc': 350, '10pc': 600 },
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'app-hot-shots',
    name: 'Hot Shots',
    category: 'Wings & Appetizers',
    description: 'Bite-sized crunchy spicy popcorn chicken shots.',
    hasSizes: true,
    sizeType: 'wings',
    sizePrices: { '5pc': 300, '10pc': 550 },
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'app-oven-bake-wings',
    name: 'Oven Bake Wings',
    category: 'Wings & Appetizers',
    description: 'Tender oven-baked spicy wings with herbs.',
    hasSizes: true,
    sizeType: 'wings',
    sizePrices: { '5pc': 350, '10pc': 600 },
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80'
  },

  // --- FRIES & LOADED FRIES ---
  {
    id: 'fries-simple',
    name: 'Simple Fries',
    category: 'Fries & Loaded Fries',
    description: 'Crispy salted golden potato fries.',
    hasSizes: true,
    sizeType: 'fries',
    sizePrices: { S: 200, L: 350 },
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fries-mayo',
    name: 'Mayo Fries',
    category: 'Fries & Loaded Fries',
    description: 'Golden fries smothered in garlic mayo sauce.',
    hasSizes: true,
    sizeType: 'fries',
    sizePrices: { S: 250, L: 400 },
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fries-pizza',
    name: 'Pizza Fries',
    category: 'Fries & Loaded Fries',
    description: 'Loaded fries topped with pizza sauce, melted mozzarella, pepperoni & chicken boti.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
    isPopular: true
  },
  {
    id: 'fries-cheese',
    name: 'Cheese Fries',
    category: 'Fries & Loaded Fries',
    description: 'Piping hot fries smothered in liquid warm cheddar cheese & herbs.',
    price: 500,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fries-loaded',
    name: 'Loaded Fries',
    category: 'Fries & Loaded Fries',
    description: 'Signature fries with chicken chunks, jalapenos, cheese sauce, garlic mayo & paprika.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    badge: 'Heavy Load'
  },

  // --- SPECIAL PASTAS ---
  {
    id: 'pasta-alfredo',
    name: 'Alfredo Pasta',
    category: 'Pasta',
    description: 'Penne pasta tossed in rich creamy white parmesan garlic sauce with grilled chicken.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    badge: 'Creamy Delicacy'
  },
  {
    id: 'pasta-crunchy-chicken',
    name: 'Crunchy Chicken Pasta',
    category: 'Pasta',
    description: 'Creamy baked pasta topped with crunchy zinger chicken chunks & melted mozzarella cheese.',
    price: 700,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281270?auto=format&fit=crop&w=800&q=80',
    badge: 'Baked Special',
    isPopular: true
  },

  // --- DRINKS ---
  {
    id: 'drink-mint-margarita',
    name: 'Mint Margarita',
    category: 'Drinks',
    description: 'Chilled refreshing fresh mint, lime juice & sparkling soda slush.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    badge: 'Cold Chiller'
  },
  {
    id: 'drink-blueberry',
    name: 'Blueberry Mocktail',
    category: 'Drinks',
    description: 'Ice cold blueberry sparkling mocktail with crushed ice.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drink-regular',
    name: 'Regular Drink',
    category: 'Drinks',
    description: 'Chilled 250ml Pepsi / 7Up / Mirinda bottle.',
    price: 100,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drink-1liter',
    name: '1 Liter Drink',
    category: 'Drinks',
    description: '1 Liter chilled Pepsi / 7Up / Mirinda bottle.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'drink-1-5liter',
    name: '1.5 Liter Drink',
    category: 'Drinks',
    description: '1.5 Liter chilled Pepsi / 7Up / Mirinda bottle.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },

  // --- EXTRAS ---
  {
    id: 'extra-dip-sauce',
    name: 'Dip Sauce',
    category: 'Extras',
    description: 'Signature garlic mayo or fiery spicy dip sauce.',
    price: 70,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'extra-crown-cheese-stick',
    name: 'Crown Cheese-Stick',
    category: 'Extras',
    description: 'Golden cheese filled dough sticks served with marinara dip.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'extra-spring-roll',
    name: 'Spring Roll',
    category: 'Extras',
    description: 'Crispy chicken & vegetable stuffed spring rolls.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'extra-cheese-slice',
    name: 'Extra Cheese Slice',
    category: 'Extras',
    description: 'Melted cheddar or mozzarella cheese slice addon.',
    price: 70,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  }
];

export const RESTAURANT_INFO = {
  name: 'KPG Pizza',
  tagline: 'HOT. FRESH. LOADED.',
  subtagline: 'Delicious pizzas, burgers, shawarmas & more — freshly prepared for every craving.',
  phones: ['0326-7938936', '0319-0075246'],
  rawPhones: ['923267938936', '923190075246'],
  whatsapp: '923267938936',
  owner: 'Malik Khizar',
  location: 'Opposite Arif Khan Shopping Mall, Kharian Kotla road, Sidh',
  mapsUrl: 'https://maps.google.com/?q=Opposite+Arif+Khan+Shopping+Mall+Kharian+Kotla+road+Sidh',
  hours: '12:00 PM – 2:00 AM Daily',
  freeDeliveryPromo: 'FREE HOME DELIVERY — Your favorite pizza, delivered hot to your door.'
};
