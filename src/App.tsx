/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  INITIAL_STORE_CONFIG,
  INITIAL_CATEGORIES,
  INITIAL_PRODUCTS,
  INITIAL_LOOKBOOK,
  INITIAL_REVIEWS,
  StoreConfig,
  CategoryItem,
  ProductItem,
} from './data/storeData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { BrandStory } from './components/BrandStory';
import { CollectionEdit } from './components/CollectionEdit';
import { FeaturedProducts } from './components/FeaturedProducts';
import { LookbookSection } from './components/LookbookSection';
import { WhyMacawBlink } from './components/WhyMacawBlink';
import { ReviewsSection } from './components/ReviewsSection';
import { StoreExperience } from './components/StoreExperience';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { AdminModal } from './components/AdminModal';

export default function App() {
  // LocalStorage state initialization
  const [config, setConfig] = useState<StoreConfig>(() => {
    try {
      const saved = localStorage.getItem('macaw_blink_config');
      return saved ? JSON.parse(saved) : INITIAL_STORE_CONFIG;
    } catch {
      return INITIAL_STORE_CONFIG;
    }
  });

  const [categories, setCategories] = useState<CategoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('macaw_blink_categories');
      return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
    } catch {
      return INITIAL_CATEGORIES;
    }
  });

  const [products, setProducts] = useState<ProductItem[]>(() => {
    try {
      const saved = localStorage.getItem('macaw_blink_products');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Save Handlers
  const handleSaveConfig = (newConfig: StoreConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('macaw_blink_config', JSON.stringify(newConfig));
    } catch (e) {
      console.error('Failed to save config to localStorage', e);
    }
  };

  const handleSaveCategories = (newCategories: CategoryItem[]) => {
    setCategories(newCategories);
    try {
      localStorage.setItem('macaw_blink_categories', JSON.stringify(newCategories));
    } catch (e) {
      console.error('Failed to save categories to localStorage', e);
    }
  };

  const handleSaveProducts = (newProducts: ProductItem[]) => {
    setProducts(newProducts);
    try {
      localStorage.setItem('macaw_blink_products', JSON.stringify(newProducts));
    } catch (e) {
      console.error('Failed to save products to localStorage', e);
    }
  };

  const handleResetDefaults = () => {
    try {
      localStorage.removeItem('macaw_blink_config');
      localStorage.removeItem('macaw_blink_categories');
      localStorage.removeItem('macaw_blink_products');
    } catch (e) {
      console.error('Failed to reset localStorage', e);
    }
    setConfig(INITIAL_STORE_CONFIG);
    setCategories(INITIAL_CATEGORIES);
    setProducts(INITIAL_PRODUCTS);
  };

  const handleCategoryCardClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-zinc-900 font-body selection:bg-zinc-900 selection:text-white pb-14 lg:pb-0">
      
      {/* 1. Header (Sticky Top Bar Contract) */}
      <Header
        config={config}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero config={config} />

        {/* 3. Trust Strip (Google Rating & Reviews) */}
        <TrustStrip config={config} />

        {/* 4. Brand Introduction / Philosophy */}
        <BrandStory config={config} />

        {/* 5. Collection Discovery (The Latest Edit) */}
        <CollectionEdit
          categories={categories}
          onSelectCategory={handleCategoryCardClick}
        />

        {/* 6. Featured Catalog / Products */}
        <FeaturedProducts
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          config={config}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 7. Editorial Fashion Lookbook */}
        <LookbookSection lookbook={INITIAL_LOOKBOOK} />

        {/* 8. Why Macaw Blink (The In-Store Advantage) */}
        <WhyMacawBlink />

        {/* 9. Social Proof / Verified Google Reviews */}
        <ReviewsSection reviews={INITIAL_REVIEWS} config={config} />

        {/* 10. Store Experience & Google Map */}
        <StoreExperience config={config} />

        {/* 11. Contact & Enquiry */}
        <ContactSection config={config} />
      </main>

      {/* 12. Footer */}
      <Footer
        config={config}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Mobile Bottom Sticky Bar (<= 15% viewport height) */}
      <MobileStickyBar config={config} />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp config={config} />

      {/* Product Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        config={config}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Store Owner CMS Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        config={config}
        categories={categories}
        products={products}
        onSaveConfig={handleSaveConfig}
        onSaveCategories={handleSaveCategories}
        onSaveProducts={handleSaveProducts}
        onResetDefaults={handleResetDefaults}
      />

    </div>
  );
}
