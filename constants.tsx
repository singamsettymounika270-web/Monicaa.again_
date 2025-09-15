import React from 'react';
import { User, OutfitItem } from './types';

export const MOCK_USER_CLOSET: OutfitItem[] = [
  { id: 'item1', name: 'White Linen Shirt', category: 'top', imageUrl: 'https://plus.unsplash.com/premium_photo-1673108852141-e1c986381254?q=80&w=1887&auto=format&fit=crop' },
  { id: 'item2', name: 'Classic Blue Jeans', category: 'bottom', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80' },
  { id: 'item3', name: 'Beige Trench Coat', category: 'outerwear', imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16e2d8?w=500&q=80' },
  { id: 'item4', name: 'Floral Sundress', category: 'dress', imageUrl: 'https://images.unsplash.com/photo-1509927083073-265c2f1f58ab?w=500&q=80' },
  { id: 'item5', name: 'Leather Ankle Boots', category: 'shoes', imageUrl: 'https://images.unsplash.com/photo-1608256247940-811c79526785?w=500&q=80' },
  { id: 'item6', name: 'Gold Pendant Necklace', category: 'accessory', imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80' },
  { id: 'item7', name: 'Striped Crewneck Sweater', category: 'top', imageUrl: 'https://images.unsplash.com/photo-1616781293922-353610e78546?w=500&q=80'},
  { id: 'item8', name: 'Black Pleated Skirt', category: 'bottom', imageUrl: 'https://images.unsplash.com/photo-1531925470851-1b58952724bf?w=500&q=80'}
];

export const MOCK_FRIENDS: User[] = [
    { 
        id: 'friend1', 
        name: 'Pavan', 
        avatar: 'https://i.pravatar.cc/100?u=pavan', 
        wardrobe: [
            { id: 'f1item1', name: 'Denim Jacket', category: 'outerwear', imageUrl: 'https://images.unsplash.com/photo-1543072216-7433d2d36794?w=500&q=80' },
            { id: 'f1item2', name: 'Grey Hoodie', category: 'top', imageUrl: 'https://images.unsplash.com/photo-1556821855-0d341b595264?w=500&q=80' },
            { id: 'f1item3', name: 'Black Joggers', category: 'bottom', imageUrl: 'https://images.unsplash.com/photo-1576778112354-db5a1f6ea26a?w=500&q=80' },
        ] 
    },
    { 
        id: 'friend2', 
        name: 'Sashrek', 
        avatar: 'https://i.pravatar.cc/100?u=sashrek',
        wardrobe: [
            { id: 'f2item1', name: 'Leather Biker Jacket', category: 'outerwear', imageUrl: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&q=80' },
            { id: 'f2item2', name: 'White T-Shirt', category: 'top', imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a50493f?w=500&q=80' },
            { id: 'f2item3', name: 'Combat Boots', category: 'shoes', imageUrl: 'https://images.unsplash.com/photo-1585434425313-99882b53644a?w=500&q=80' },
        ]
    },
     { 
        id: 'friend3', 
        name: 'Vishali', 
        avatar: 'https://i.pravatar.cc/100?u=vishali',
        wardrobe: [
            { id: 'f3item1', name: 'Red Satin Dress', category: 'dress', imageUrl: 'https://images.unsplash.com/photo-1595534063121-136f5263a2a9?w=500&q=80' },
            { id: 'f3item2', name: 'High Heels', category: 'shoes', imageUrl: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=500&q=80' },
            { id: 'f3item3', name: 'Clutch Bag', category: 'accessory', imageUrl: 'https://images.unsplash.com/photo-1566455325555-9a740611025a?w=500&q=80' },
        ]
    },
    { 
        id: 'friend4', 
        name: 'Nikhil', 
        avatar: 'https://i.pravatar.cc/100?u=nikhil',
        wardrobe: [
            { id: 'f4item1', name: 'Navy Blue Blazer', category: 'outerwear', imageUrl: 'https://images.unsplash.com/photo-1593032583763-a2d9838332d5?w=500&q=80' },
            { id: 'f4item2', name: 'Chino Trousers', category: 'bottom', imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80' },
            { id: 'f4item3', name: 'Brown Loafers', category: 'shoes', imageUrl: 'https://images.unsplash.com/photo-1543163521-b342465d6835?w=500&q=80' },
        ]
    },
    { 
        id: 'friend5', 
        name: 'Abhinav', 
        avatar: 'https://i.pravatar.cc/100?u=abhinav',
        wardrobe: [
            { id: 'f5item1', name: 'Graphic T-Shirt', category: 'top', imageUrl: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=500&q=80' },
            { id: 'f5item2', name: 'Ripped Jeans', category: 'bottom', imageUrl: 'https://images.unsplash.com/photo-1565084888279-aca607283c04?w=500&q=80' },
            { id: 'f5item3', name: 'High-Top Sneakers', category: 'shoes', imageUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80' },
        ]
    },
];

const iconStyle = "w-full h-full transition-transform group-hover:scale-110";

export const MyClosetIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5m3-15H5.25a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V5.25A2.25 2.25 0 0 0 18.75 3Z" />
</svg>
);
export const AddIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
);
export const CameraIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039H9.74a2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
</svg>
);
export const SyncIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.664 0l3.181-3.183m-3.181-4.991-3.182-3.182a8.25 8.25 0 0 0-11.664 0l-3.181 3.182m3.181 4.991h4.992" />
</svg>
);
export const SurpriseIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
</svg>
);
export const UserIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
);
export const StarIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
);
export const HeartIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
);
export const ShoppingBagIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconStyle}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
</svg>
);
export const BackIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
);

export const WeatherIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" />
</svg>
);

export const EditIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
);

export const Logo = () => (
    <div className="flex items-center space-x-2 cursor-pointer">
      <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center p-1 shadow-inner">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hanger */}
          <path d="M15 6.5C15 5.17157 13.8284 4 12.5 4C11.1716 4 10 5.17157 10 6.5" stroke="#cfa240" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12.5 4V2.5" stroke="#cfa240" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 10.2974C6.55621 9.51231 8.05537 8 12.5 8C16.9446 8 18.4438 9.51231 19 10.2974" stroke="#cfa240" strokeWidth="1.5" strokeLinecap="round"/>
          
          {/* Shirt */}
          <path d="M8.33325 10L5.33325 21.5H19.6666L16.6666 10" fill="#9f1239" stroke="#9f1239" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33325 10C8.33325 10 9.66659 12.5 12.5 12.5C15.3333 12.5 16.6666 10 16.6666 10" stroke="white" strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className="text-2xl font-bold text-gray-100">SmartWardrobe</span>
    </div>
);