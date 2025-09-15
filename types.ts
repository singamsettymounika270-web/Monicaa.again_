export enum View {
  Home = 'HOME',
  MyCloset = 'MY_CLOSET',
  AddItem = 'ADD_ITEM',
  ARTryOn = 'AR_TRY_ON',
  WardrobeSync = 'WARDROBE_SYNC',
  Profile = 'PROFILE',
  Wishlist = 'WISHLIST',
  Favorites = 'FAVORITES',
  Shopping = 'SHOPPING',
  SurpriseMe = 'SURPRISE_ME',
}

export type ClothingCategory = 'top' | 'bottom' | 'dress' | 'outerwear' | 'accessory' | 'shoes' | 'jewelry' | 'watch' | 'hairstyle';

export interface OutfitItem {
  id: string;
  name: string;
  category: ClothingCategory;
  imageUrl: string;
  description?: string;
}

export interface Review {
  rating: number; // 0-5
  comment?: string;
}

export interface AISuggestion {
  id: string;
  title: string;
  items: { name: string; category: ClothingCategory }[];
  reason: string;
  rating?: number;
  review?: Review;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  wardrobe: OutfitItem[];
}

export interface UserProfile {
  name: string;
  height?: string;
  weight?: string;
  bodyType?: string;
  location?: string;
}