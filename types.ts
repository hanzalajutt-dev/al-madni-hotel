export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment?: string;
  subRatings?: {
    food?: number;
    service?: number;
  };
  verified: boolean;
}

export type MenuCategoryKey =
  | 'all'
  | 'karahi_handi'
  | 'bbq'
  | 'rice'
  | 'desi_chinese'
  | 'tandoor'
  | 'drinks';

export interface FoodItem {
  id: string;
  name: string;
  categoryId: MenuCategoryKey;
  categoryName: string;
  image: string;
  description: string;
  servingPortion: string;
  pricePlaceholder: string;
  isCustomPrice?: boolean;
  statusNotice: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

export interface BusinessDetails {
  brandName: string;
  mapsListingName: string;
  category: string;
  locationAddress: string;
  plusCode: string;
  locatedIn: string;
  googleRating: number;
  totalReviews: number;
  mapsSearchUrl: string;
  services: {
    dineIn: boolean;
    takeout: boolean;
    delivery: boolean;
  };
  contactPlaceholders: {
    phoneLabel: string;
    hoursLabel: string;
  };
}
