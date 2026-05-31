import type { Product } from '../types';
import { ProductCategory } from '../types';

// Import local images
import bananaImg from '../assets/banana.png';
import appleImg from '../assets/apple.png';
import capsicumImg from '../assets/capsicum.png';
import gingerImg from '../assets/ginger.png';
import lambChopsImg from '../assets/lamb-chops.png'; // Ensure you renamed this file!
import chickenImg from '../assets/chicken.png';
import lycheeImg from '../assets/lychee.png';
import choppedFishImg from '../assets/choped-fish.png';
import dietCokeImg from '../assets/diet-coke.png';
import spriteImg from '../assets/sprite.png';
import appleJuiceImg from '../assets/apple-juice.png';
import orangeJuiceImg from '../assets/orange-juice.png';
import cocaColaImg from '../assets/coca-cola.png';
import pepsiImg from '../assets/pepsi.png';
import eggRedImg from '../assets/egg-red.png';
import eggWhiteImg from '../assets/egg-white.png';
import eggPastaImg from '../assets/egg-pasta.png';
import eggNoodlesImg from '../assets/egg-noodles.png';
import mayoImg from '../assets/mayo.png';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    description: 'Fresh organic bananas directly from the farm.',
    price: 4.99,
    imageUrl: bananaImg,
    category: ProductCategory.FRESH_PRODUCE,
    unit: '7pcs, Priceg'
  },
  {
    id: '2',
    name: 'Red Apple',
    description: 'Crisp and sweet red apples.',
    price: 4.99,
    imageUrl: appleImg,
    category: ProductCategory.FRESH_PRODUCE,
    unit: '1kg, Priceg'
  },
  {
    id: '3',
    name: 'Bell Pepper Red',
    description: 'Fresh red bell peppers.',
    price: 4.99,
    imageUrl: capsicumImg,
    category: ProductCategory.FRESH_PRODUCE,
    unit: '1kg, Priceg'
  },
  {
    id: '4',
    name: 'Ginger',
    description: 'Fresh organic ginger.',
    price: 4.99,
    imageUrl: gingerImg,
    category: ProductCategory.FRESH_PRODUCE,
    unit: '250gm, Priceg'
  },
  {
    id: '5',
    name: 'Lamb Chops', // Updated per your request
    description: 'Premium cut lamb chops.',
    price: 4.99,
    imageUrl: lambChopsImg,
    category: ProductCategory.MEAT,
    unit: '1kg, Priceg'
  },
  {
    id: '6',
    name: 'Broiler Chicken',
    description: 'Fresh broiler chicken.',
    price: 4.99,
    imageUrl: chickenImg,
    category: ProductCategory.MEAT,
    unit: '1kg, Priceg'
  },
  {
    id: '7',
    name: 'Lychee',
    description: 'Fresh sweet lychee.',
    price: 3.99,
    imageUrl: lycheeImg,
    category: ProductCategory.FRESH_PRODUCE,
    unit: '500g, Price'
  },
  {
    id: '8',
    name: 'Chopped Fish',
    description: 'Freshly chopped fish.',
    price: 6.99,
    imageUrl: choppedFishImg,
    category: ProductCategory.MEAT,
    unit: '1kg, Price'
  },
  {
    id: '9',
    name: 'Diet Coke',
    description: 'Crisp, cold Diet Coke.',
    price: 1.99,
    imageUrl: dietCokeImg,
    category: ProductCategory.BEVERAGES,
    unit: '355ml, Price'
  },
  {
    id: '10',
    name: 'Sprite Can',
    description: 'Refreshing Sprite.',
    price: 1.50,
    imageUrl: spriteImg,
    category: ProductCategory.BEVERAGES,
    unit: '325ml, Price'
  },
  {
    id: '11',
    name: 'Apple & Grape Juice',
    description: 'Natural mixed fruit juice.',
    price: 15.99,
    imageUrl: appleJuiceImg,
    category: ProductCategory.BEVERAGES,
    unit: '2L, Price'
  },
  {
    id: '12',
    name: 'Orenge Juice', // Spelling matching Figma
    description: 'Fresh squeezed orange juice.',
    price: 15.99,
    imageUrl: orangeJuiceImg,
    category: ProductCategory.BEVERAGES,
    unit: '2L, Price'
  },
  {
    id: '13',
    name: 'Coca Cola Can',
    description: 'Classic Coca Cola.',
    price: 4.99,
    imageUrl: cocaColaImg,
    category: ProductCategory.BEVERAGES,
    unit: '325ml, Price'
  },
  {
    id: '14',
    name: 'Pepsi Can',
    description: 'Classic Pepsi.',
    price: 4.99,
    imageUrl: pepsiImg,
    category: ProductCategory.BEVERAGES,
    unit: '330ml, Price'
  },
  {
    id: '15',
    name: 'Egg Chicken Red',
    description: 'Farm fresh red eggs.',
    price: 1.99,
    imageUrl: eggRedImg,
    category: ProductCategory.DAIRY,
    unit: '4pcs, Price'
  },
  {
    id: '16',
    name: 'Egg Chicken White',
    description: 'Farm fresh white eggs.',
    price: 1.50,
    imageUrl: eggWhiteImg,
    category: ProductCategory.DAIRY,
    unit: '180g, Price'
  },
  {
    id: '17',
    name: 'Egg Pasta',
    description: 'Premium egg pasta.',
    price: 15.99,
    imageUrl: eggPastaImg,
    category: ProductCategory.BAKERY, // Or whatever category fits best
    unit: '30gm, Price'
  },
  {
    id: '18',
    name: 'Egg Noodles',
    description: 'Classic egg noodles.',
    price: 15.99,
    imageUrl: eggNoodlesImg,
    category: ProductCategory.BAKERY,
    unit: '2L, Price'
  },
  {
    id: '19',
    name: 'Mayonnaise Eggless',
    description: 'Creamy eggless mayonnaise.',
    price: 4.99,
    imageUrl: mayoImg,
    category: ProductCategory.DAIRY,
    unit: '250g, Price'
  }
];