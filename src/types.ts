export type PizzaSize = 'S' | 'M' | 'L' | 'XL';
export type WingSize = '5pc' | '10pc';
export type FriesSize = 'S' | 'L';

export interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 
    | 'Pizza - Regular'
    | 'Pizza - Global'
    | 'Pizza - Premium'
    | 'Deals'
    | 'Burgers'
    | 'Shawarma & Paratha'
    | 'Wraps'
    | 'Wings & Appetizers'
    | 'Fries & Loaded Fries'
    | 'Pasta'
    | 'Drinks'
    | 'Extras';
  description: string;
  price?: number; // Base price or single price
  sizePrices?: Partial<Record<PizzaSize | WingSize | FriesSize, number>>;
  hasSizes?: boolean;
  sizeType?: 'pizza' | 'wings' | 'fries';
  image: string;
  badge?: string;
  isSpicy?: boolean;
  isPopular?: boolean;
  isDeal?: boolean;
  dealNumber?: number;
  dealItems?: string[];
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  selectedSize?: string;
  selectedSizePrice?: number;
  selectedExtras: ExtraOption[];
  quantity: number;
  itemPrice: number;
  totalPrice: number;
  notes?: string;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phone: string;
  whatsapp: string;
  address: string;
  instructions?: string;
  paymentMethod: 'Cash on Delivery';
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: 'Received' | 'Preparing' | 'Baking' | 'Out for Delivery' | 'Delivered';
  createdAt: string;
  estimatedDeliveryMinutes: number;
}
