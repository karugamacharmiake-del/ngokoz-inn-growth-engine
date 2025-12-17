export interface Review {
  id: string;
  name: string;
  email: string;
  phone: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'chicken' | 'shawarma' | 'burgers' | 'platters' | 'drinks';
  image?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  ingredients?: string[];
  prepTime?: string;
}

export const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Mary W.',
    email: 'mary@email.com',
    phone: '+254712345678',
    rating: 5,
    comment: 'Best chicken in Rongai! The spicy wings are 🔥🔥🔥. My whole family loves coming here.',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'James K.',
    email: 'james@email.com',
    phone: '+254723456789',
    rating: 5,
    comment: 'The shawarma is massive and so tasty. Drive-in service is super convenient!',
    date: '2024-01-14',
  },
  {
    id: '3',
    name: 'Grace M.',
    email: 'grace@email.com',
    phone: '+254734567890',
    rating: 4,
    comment: 'Great food and vibes. The kids love the family packages. Will definitely come back!',
    date: '2024-01-13',
    image: 'https://images.unsplash.com/photo-1568901346341-c289b81c0c8b?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    name: 'Peter O.',
    email: 'peter@email.com',
    phone: '+254745678901',
    rating: 5,
    comment: 'Finally a proper burger spot in Rongai! The Ngokoz Special is my go-to.',
    date: '2024-01-12',
  },
  {
    id: '5',
    name: 'Faith N.',
    email: 'faith@email.com',
    phone: '+254756789012',
    rating: 5,
    comment: 'Love the TikTok content and the food is even better in person! 😍',
    date: '2024-01-11',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop',
  },
  {
    id: '6',
    name: 'David M.',
    email: 'david@email.com',
    phone: '+254767890123',
    rating: 5,
    comment: 'The family feast platter is perfect for weekend gatherings. Everyone loved it!',
    date: '2024-01-10',
  },
];

export const menuItems: MenuItem[] = [
  // Chicken
  {
    id: 'c1',
    name: 'Spicy Wings (6pc)',
    description: 'Our famous hot & crispy wings with signature Ngokoz spice blend',
    price: 450,
    category: 'chicken',
    isPopular: true,
    isSpicy: true,
    ingredients: ['Chicken wings', 'Ngokoz spice blend', 'Hot sauce', 'Garlic butter'],
    prepTime: '15-20 mins',
  },
  {
    id: 'c2',
    name: 'Whole Chicken',
    description: 'Perfectly roasted whole chicken with herbs and spices',
    price: 1200,
    category: 'chicken',
    ingredients: ['Whole chicken', 'Rosemary', 'Thyme', 'Garlic', 'Lemon'],
    prepTime: '25-30 mins',
  },
  {
    id: 'c3',
    name: 'Chicken Strips',
    description: 'Crispy golden strips served with dipping sauce',
    price: 350,
    category: 'chicken',
    ingredients: ['Chicken breast', 'Breadcrumbs', 'Special seasoning', 'Dipping sauce'],
    prepTime: '10-15 mins',
  },
  {
    id: 'c4',
    name: 'Drumsticks (4pc)',
    description: 'Juicy seasoned drumsticks, flame-grilled to perfection',
    price: 500,
    category: 'chicken',
    isPopular: true,
    ingredients: ['Chicken drumsticks', 'BBQ marinade', 'Spices'],
    prepTime: '20-25 mins',
  },
  // Shawarma
  {
    id: 's1',
    name: 'Classic Chicken Shawarma',
    description: 'Tender chicken with fresh veggies and garlic sauce in soft pita',
    price: 350,
    category: 'shawarma',
    isPopular: true,
    ingredients: ['Marinated chicken', 'Fresh veggies', 'Garlic sauce', 'Soft pita'],
    prepTime: '10-15 mins',
  },
  {
    id: 's2',
    name: 'Spicy Beef Shawarma',
    description: 'Seasoned beef with jalapeños and special hot sauce',
    price: 400,
    category: 'shawarma',
    isSpicy: true,
    ingredients: ['Seasoned beef', 'Jalapeños', 'Hot sauce', 'Fresh veggies', 'Pita'],
    prepTime: '10-15 mins',
  },
  {
    id: 's3',
    name: 'Mixed Shawarma',
    description: 'Best of both worlds - chicken and beef combo',
    price: 450,
    category: 'shawarma',
    ingredients: ['Chicken', 'Beef', 'Mixed sauces', 'Fresh veggies', 'Pita'],
    prepTime: '12-18 mins',
  },
  // Burgers
  {
    id: 'b1',
    name: 'Ngokoz Special Burger',
    description: 'Double beef patty, cheese, bacon, and secret sauce',
    price: 550,
    category: 'burgers',
    isPopular: true,
    ingredients: ['Double beef patty', 'Cheddar cheese', 'Bacon', 'Secret sauce', 'Brioche bun'],
    prepTime: '15-20 mins',
  },
  {
    id: 'b2',
    name: 'Classic Chicken Burger',
    description: 'Crispy chicken fillet with fresh toppings',
    price: 400,
    category: 'burgers',
    ingredients: ['Crispy chicken fillet', 'Lettuce', 'Tomato', 'Mayo', 'Sesame bun'],
    prepTime: '12-15 mins',
  },
  {
    id: 'b3',
    name: 'Inferno Burger',
    description: 'For the brave! Ghost pepper sauce and jalapeños 🔥',
    price: 500,
    category: 'burgers',
    isSpicy: true,
    ingredients: ['Beef patty', 'Ghost pepper sauce', 'Jalapeños', 'Pepper jack cheese'],
    prepTime: '15-20 mins',
  },
  // Platters
  {
    id: 'p1',
    name: 'Family Feast',
    description: 'Whole chicken, 2 shawarmas, fries, coleslaw - feeds 4-5',
    price: 2500,
    category: 'platters',
    isPopular: true,
    ingredients: ['Whole roasted chicken', '2 Classic shawarmas', 'Large fries', 'Coleslaw', 'Dips'],
    prepTime: '30-35 mins',
  },
  {
    id: 'p2',
    name: "Couple's Combo",
    description: 'Half chicken, 2 burgers, large fries, 2 drinks',
    price: 1500,
    category: 'platters',
    ingredients: ['Half chicken', '2 Burgers of choice', 'Large fries', '2 Drinks'],
    prepTime: '25-30 mins',
  },
  {
    id: 'p3',
    name: 'Solo Treat',
    description: 'Quarter chicken, fries, coleslaw, and drink',
    price: 650,
    category: 'platters',
    ingredients: ['Quarter chicken', 'Fries', 'Coleslaw', 'Drink of choice'],
    prepTime: '15-20 mins',
  },
  {
    id: 'p4',
    name: 'Wing Platter (12pc)',
    description: 'A dozen of our famous wings with 3 dipping sauces',
    price: 850,
    category: 'platters',
    isSpicy: true,
    ingredients: ['12 Spicy wings', 'BBQ sauce', 'Ranch', 'Hot sauce', 'Celery sticks'],
    prepTime: '20-25 mins',
  },
  {
    id: 'p5',
    name: 'Party Pack',
    description: 'Perfect for gatherings! 2 whole chickens, 4 shawarmas, large fries, salads - feeds 8-10',
    price: 4500,
    category: 'platters',
    isPopular: true,
    ingredients: ['2 Whole chickens', '4 Shawarmas', '2 Large fries', 'Garden salad', 'Coleslaw', 'Assorted dips'],
    prepTime: '45-50 mins',
  },
  {
    id: 'p6',
    name: 'Burger Bonanza',
    description: '4 mixed burgers, double fries, onion rings, 4 drinks',
    price: 2200,
    category: 'platters',
    ingredients: ['2 Ngokoz Special burgers', '2 Chicken burgers', 'Double fries', 'Onion rings', '4 Drinks'],
    prepTime: '25-30 mins',
  },
  {
    id: 'p7',
    name: 'Shawarma Sampler',
    description: 'Try all 3 shawarma varieties with fries and drinks',
    price: 1300,
    category: 'platters',
    ingredients: ['Classic chicken shawarma', 'Spicy beef shawarma', 'Mixed shawarma', 'Fries', '2 Drinks'],
    prepTime: '20-25 mins',
  },
  // Drinks
  {
    id: 'd1',
    name: 'Fresh Juice',
    description: 'Mango, Passion, or Mixed',
    price: 150,
    category: 'drinks',
    prepTime: '5 mins',
  },
  {
    id: 'd2',
    name: 'Soft Drinks',
    description: 'Coca-Cola, Fanta, Sprite',
    price: 100,
    category: 'drinks',
    prepTime: 'Instant',
  },
  {
    id: 'd3',
    name: 'Milkshake',
    description: 'Vanilla, Chocolate, or Strawberry',
    price: 250,
    category: 'drinks',
    prepTime: '5-8 mins',
  },
];

export const walkthroughSteps = [
  {
    id: 1,
    title: 'Customer Visits',
    description: 'A hungry customer arrives at Ngokoz Inn for an amazing drive-in dining experience.',
    icon: '🚗',
  },
  {
    id: 2,
    title: 'Enjoys the Meal',
    description: 'They feast on our famous hot & spicy chicken, shawarmas, or burgers.',
    icon: '🍗',
  },
  {
    id: 3,
    title: 'Staff Collects Review',
    description: 'Before leaving, our friendly staff asks for a quick review on the tablet.',
    icon: '📱',
  },
  {
    id: 4,
    title: 'Rating Matters',
    description: 'The system routes feedback based on the rating received.',
    icon: '⭐',
  },
  {
    id: 5,
    title: 'Happy Customer (4-5 ⭐)',
    description: 'Great reviews are stored. Later, customer receives a request to share on Google Maps.',
    icon: '🎉',
  },
  {
    id: 6,
    title: 'Needs Attention (1-3 ⭐)',
    description: 'Lower ratings go to management. Issue is resolved, then customer is invited to update.',
    icon: '🛠️',
  },
  {
    id: 7,
    title: 'Growth Engine',
    description: 'More public reviews = More customers = More growth. Simple!',
    icon: '📈',
  },
];
