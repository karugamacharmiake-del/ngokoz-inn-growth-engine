export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
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
}

export const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Mary W.',
    rating: 5,
    comment: 'Best chicken in Rongai! The spicy wings are 🔥🔥🔥. My whole family loves coming here.',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'James K.',
    rating: 5,
    comment: 'The shawarma is massive and so tasty. Drive-in service is super convenient!',
    date: '2024-01-14',
  },
  {
    id: '3',
    name: 'Grace M.',
    rating: 4,
    comment: 'Great food and vibes. The kids love the family packages. Will definitely come back!',
    date: '2024-01-13',
  },
  {
    id: '4',
    name: 'Peter O.',
    rating: 5,
    comment: 'Finally a proper burger spot in Rongai! The Ngokoz Special is my go-to.',
    date: '2024-01-12',
  },
  {
    id: '5',
    name: 'Faith N.',
    rating: 5,
    comment: 'Love the TikTok content and the food is even better in person! 😍',
    date: '2024-01-11',
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
  },
  {
    id: 'c2',
    name: 'Whole Chicken',
    description: 'Perfectly roasted whole chicken with herbs and spices',
    price: 1200,
    category: 'chicken',
  },
  {
    id: 'c3',
    name: 'Chicken Strips',
    description: 'Crispy golden strips served with dipping sauce',
    price: 350,
    category: 'chicken',
  },
  {
    id: 'c4',
    name: 'Drumsticks (4pc)',
    description: 'Juicy seasoned drumsticks, flame-grilled to perfection',
    price: 500,
    category: 'chicken',
    isPopular: true,
  },
  // Shawarma
  {
    id: 's1',
    name: 'Classic Chicken Shawarma',
    description: 'Tender chicken with fresh veggies and garlic sauce in soft pita',
    price: 350,
    category: 'shawarma',
    isPopular: true,
  },
  {
    id: 's2',
    name: 'Spicy Beef Shawarma',
    description: 'Seasoned beef with jalapeños and special hot sauce',
    price: 400,
    category: 'shawarma',
    isSpicy: true,
  },
  {
    id: 's3',
    name: 'Mixed Shawarma',
    description: 'Best of both worlds - chicken and beef combo',
    price: 450,
    category: 'shawarma',
  },
  // Burgers
  {
    id: 'b1',
    name: 'Ngokoz Special Burger',
    description: 'Double beef patty, cheese, bacon, and secret sauce',
    price: 550,
    category: 'burgers',
    isPopular: true,
  },
  {
    id: 'b2',
    name: 'Classic Chicken Burger',
    description: 'Crispy chicken fillet with fresh toppings',
    price: 400,
    category: 'burgers',
  },
  {
    id: 'b3',
    name: 'Inferno Burger',
    description: 'For the brave! Ghost pepper sauce and jalapeños 🔥',
    price: 500,
    category: 'burgers',
    isSpicy: true,
  },
  // Platters
  {
    id: 'p1',
    name: 'Family Feast',
    description: 'Whole chicken, 2 shawarmas, fries, coleslaw - feeds 4-5',
    price: 2500,
    category: 'platters',
    isPopular: true,
  },
  {
    id: 'p2',
    name: 'Couple\'s Combo',
    description: 'Half chicken, 2 burgers, large fries, 2 drinks',
    price: 1500,
    category: 'platters',
  },
  {
    id: 'p3',
    name: 'Solo Treat',
    description: 'Quarter chicken, fries, coleslaw, and drink',
    price: 650,
    category: 'platters',
  },
  // Drinks
  {
    id: 'd1',
    name: 'Fresh Juice',
    description: 'Mango, Passion, or Mixed',
    price: 150,
    category: 'drinks',
  },
  {
    id: 'd2',
    name: 'Soft Drinks',
    description: 'Coca-Cola, Fanta, Sprite',
    price: 100,
    category: 'drinks',
  },
  {
    id: 'd3',
    name: 'Milkshake',
    description: 'Vanilla, Chocolate, or Strawberry',
    price: 250,
    category: 'drinks',
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
