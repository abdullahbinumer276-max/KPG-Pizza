/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CravingCategories } from './components/CravingCategories';
import { DealsSection } from './components/DealsSection';
import { MenuSection } from './components/MenuSection';
import { FreeDeliveryBanner } from './components/FreeDeliveryBanner';
import { AboutSection } from './components/AboutSection';
import { LocationContact } from './components/LocationContact';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { Footer } from './components/Footer';
import { FlameEffects } from './components/FlameEffects';
import { CartItem, MenuItem, ExtraOption, OrderDetails } from './types';
import { CheckCircle, Flame } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState<OrderDetails | null>(null);
  const [selectedCravingCategory, setSelectedCravingCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add Item to Cart
  const handleAddToCart = (
    item: MenuItem,
    selectedSize?: string,
    sizePrice?: number,
    selectedExtras: ExtraOption[] = [],
    quantity: number = 1
  ) => {
    const itemUnitPrice = (sizePrice !== undefined ? sizePrice : item.price || 0) +
      selectedExtras.reduce((sum, e) => sum + e.price, 0);

    const cartItemId = `${item.id}-${selectedSize || 'default'}-${selectedExtras
      .map((e) => e.id)
      .sort()
      .join('-')}`;

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((ci) => ci.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: updated[existingIndex].itemPrice * newQty,
        };
        return updated;
      } else {
        const newItem: CartItem = {
          cartItemId,
          item,
          selectedSize,
          selectedSizePrice: sizePrice,
          selectedExtras,
          quantity,
          itemPrice: itemUnitPrice,
          totalPrice: itemUnitPrice * quantity,
        };
        return [...prevItems, newItem];
      }
    });

    showToast(`Added ${quantity}x ${item.name} to cart!`);
  };

  // Buy Now Action
  const handleBuyNow = (
    item: MenuItem,
    selectedSize?: string,
    sizePrice?: number,
    selectedExtras: ExtraOption[] = [],
    quantity: number = 1
  ) => {
    handleAddToCart(item, selectedSize, sizePrice, selectedExtras, quantity);
    setIsCartOpen(true);
  };

  // Cart Management
  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((ci) => {
        if (ci.cartItemId === cartItemId) {
          return {
            ...ci,
            quantity: newQty,
            totalPrice: ci.itemPrice * newQty,
          };
        }
        return ci;
      })
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigation Helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCravingCategory = (catName: string) => {
    setSelectedCravingCategory(catName);
    scrollToSection('menu');
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = (order: OrderDetails) => {
    setActiveOrder(order);
    setIsCheckoutOpen(false);
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-100 flex flex-col font-sans relative selection:bg-red-600 selection:text-white">
      {/* Background Flame Particles */}
      <FlameEffects />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs uppercase px-5 py-3 rounded-2xl shadow-2xl border border-yellow-400 flex items-center gap-2.5 animate-bounce">
          <CheckCircle className="w-5 h-5 text-yellow-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        <Hero
          onOrderNow={() => scrollToSection('menu')}
          onViewMenu={() => scrollToSection('menu')}
        />

        <CravingCategories
          onSelectCategory={handleSelectCravingCategory}
          selectedCategory={selectedCravingCategory}
        />

        <DealsSection onAddToCart={(item) => handleAddToCart(item)} />

        <MenuSection
          selectedCategoryFromHome={selectedCravingCategory}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        <FreeDeliveryBanner onOrderNow={() => scrollToSection('menu')} />

        <AboutSection />

        <LocationContact />
      </main>

      {/* Slide-out Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
        onClearCart={handleClearCart}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderComplete={handleOrderComplete}
      />

      {/* Live Order Tracker Modal */}
      <OrderTrackerModal
        order={activeOrder}
        onClose={() => setActiveOrder(null)}
      />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
