import React, { useState } from 'react';
import { X, Save, RotateCcw, Download, Plus, Trash2, Sliders, Check } from 'lucide-react';
import {
  StoreConfig,
  CategoryItem,
  ProductItem,
  LookbookItem,
  ReviewItem,
  INITIAL_STORE_CONFIG,
  INITIAL_CATEGORIES,
  INITIAL_PRODUCTS,
} from '../data/storeData';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: StoreConfig;
  categories: CategoryItem[];
  products: ProductItem[];
  onSaveConfig: (newConfig: StoreConfig) => void;
  onSaveCategories: (newCats: CategoryItem[]) => void;
  onSaveProducts: (newProds: ProductItem[]) => void;
  onResetDefaults: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  config,
  categories,
  products,
  onSaveConfig,
  onSaveCategories,
  onSaveProducts,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'categories' | 'products'>('info');
  const [formData, setFormData] = useState<StoreConfig>({ ...config });
  const [formCategories, setFormCategories] = useState<CategoryItem[]>([...categories]);
  const [formProducts, setFormProducts] = useState<ProductItem[]>([...products]);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSaveAll = () => {
    onSaveConfig(formData);
    onSaveCategories(formCategories);
    onSaveProducts(formProducts);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleExportJson = () => {
    const backup = {
      config: formData,
      categories: formCategories,
      products: formProducts,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `macaw-blink-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Category management
  const handleAddCategory = () => {
    const newCat: CategoryItem = {
      id: `cat-${Date.now()}`,
      name: 'NEW CATEGORY',
      subtitle: 'Modern tailoring & essentials',
      tag: 'EXPLORE',
      imageUrl: '/src/assets/images/category_menswear_detail_1791124867792.jpg',
    };
    setFormCategories([...formCategories, newCat]);
  };

  const handleDeleteCategory = (id: string) => {
    setFormCategories(formCategories.filter((c) => c.id !== id));
  };

  // Product management
  const handleAddProduct = () => {
    const newProd: ProductItem = {
      id: `prod-${Date.now()}`,
      name: 'New Menswear Item',
      category: 'SHIRTS',
      tag: 'NEW ARRIVAL',
      sizes: ['M', 'L', 'XL'],
      price: 'Price on Request',
      description: 'Contemporary design with fine stitching and breathable comfort.',
      imageUrl: '/src/assets/images/lookbook_casual_men_1791124840875.jpg',
    };
    setFormProducts([newProd, ...formProducts]);
  };

  const handleDeleteProduct = (id: string) => {
    setFormProducts(formProducts.filter((p) => p.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-3 sm:p-6 backdrop-blur-xs">
      <div className="bg-white max-w-4xl w-full h-[92vh] flex flex-col border border-zinc-200 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-zinc-950 text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-zinc-300" />
            <div>
              <h2 className="font-editorial text-xl text-white font-semibold">
                Store Owner CMS Editor
              </h2>
              <p className="text-[11px] text-zinc-400">
                Update store details, contact info, categories & products in real-time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {savedNotice && (
              <span className="text-xs text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Saved!
              </span>
            )}
            <button
              onClick={handleSaveAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CMS"
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-200 bg-zinc-50 px-6 gap-2 pt-2">
          <button
            onClick={() => setActiveTab('info')}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'info'
                ? 'border-zinc-950 text-zinc-950 bg-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            Store Info & Hours
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'categories'
                ? 'border-zinc-950 text-zinc-950 bg-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            Categories ({formCategories.length})
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'products'
                ? 'border-zinc-950 text-zinc-950 bg-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-800'
            }`}
          >
            Products ({formProducts.length})
          </button>
        </div>

        {/* Form Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: Store Info & Hours */}
          {activeTab === 'info' && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                    Store Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                    WhatsApp Number (country code prefix, digits only)
                  </label>
                  <input
                    type="text"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                    Hours Display Text
                  </label>
                  <input
                    type="text"
                    value={formData.hoursDisplay}
                    onChange={(e) => setFormData({ ...formData, hoursDisplay: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                    Opening Time (24h format, e.g. 10:30)
                  </label>
                  <input
                    type="text"
                    value={formData.openingTime}
                    onChange={(e) => setFormData({ ...formData, openingTime: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                    Closing Time (24h format, e.g. 22:30)
                  </label>
                  <input
                    type="text"
                    value={formData.closingTime}
                    onChange={(e) => setFormData({ ...formData, closingTime: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                    Google Rating (out of 5)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.googleRating}
                    onChange={(e) => setFormData({ ...formData, googleRating: parseFloat(e.target.value) || 4.9 })}
                    className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                    Google Review Count
                  </label>
                  <input
                    type="number"
                    value={formData.reviewCount}
                    onChange={(e) => setFormData({ ...formData, reviewCount: parseInt(e.target.value, 10) || 1080 })}
                    className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <h4 className="text-xs uppercase font-semibold text-zinc-900 tracking-wider mb-3">
                  Address Details (Ahmedabad Flagship)
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      value={formData.addressLine1}
                      onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                      Address Line 2 (Road)
                    </label>
                    <input
                      type="text"
                      value={formData.addressLine2}
                      onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                      Landmark
                    </label>
                    <input
                      type="text"
                      value={formData.addressLandmark}
                      onChange={(e) => setFormData({ ...formData, addressLandmark: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <label className="block text-xs font-semibold uppercase text-zinc-700 mb-1">
                  Hero Supporting Tagline
                </label>
                <textarea
                  rows={2}
                  value={formData.subTagline}
                  onChange={(e) => setFormData({ ...formData, subTagline: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-zinc-300 focus:border-zinc-950 focus:outline-none"
                />
              </div>

            </div>
          )}

          {/* TAB 2: Categories */}
          {activeTab === 'categories' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                <span className="text-xs text-zinc-500">
                  Manage the categories displayed in "THE LATEST EDIT"
                </span>
                <button
                  onClick={handleAddCategory}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Category</span>
                </button>
              </div>

              <div className="space-y-3">
                {formCategories.map((cat, idx) => (
                  <div
                    key={cat.id}
                    className="p-4 border border-zinc-200 bg-zinc-50 flex flex-col sm:flex-row items-center gap-4"
                  >
                    <img
                      src={cat.imageUrl}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-cover border border-zinc-300 shrink-0"
                    />

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                      <div>
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Category Name
                        </label>
                        <input
                          type="text"
                          value={cat.name}
                          onChange={(e) => {
                            const updated = [...formCategories];
                            updated[idx].name = e.target.value;
                            setFormCategories(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Subtitle Description
                        </label>
                        <input
                          type="text"
                          value={cat.subtitle}
                          onChange={(e) => {
                            const updated = [...formCategories];
                            updated[idx].subtitle = e.target.value;
                            setFormCategories(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteCategory(cat.id)}
                      className="p-2 text-red-600 hover:bg-red-50 transition-colors"
                      title="Delete category"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Products */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                <span className="text-xs text-zinc-500">
                  Manage clothing items and ready-to-wear placeholders
                </span>
                <button
                  onClick={handleAddProduct}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Product</span>
                </button>
              </div>

              <div className="space-y-4">
                {formProducts.map((prod, idx) => (
                  <div
                    key={prod.id}
                    className="p-4 border border-zinc-200 bg-zinc-50 flex flex-col sm:flex-row gap-4"
                  >
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-24 object-cover border border-zinc-300 shrink-0"
                    />

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Product Name
                        </label>
                        <input
                          type="text"
                          value={prod.name}
                          onChange={(e) => {
                            const updated = [...formProducts];
                            updated[idx].name = e.target.value;
                            setFormProducts(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Category
                        </label>
                        <input
                          type="text"
                          value={prod.category}
                          onChange={(e) => {
                            const updated = [...formProducts];
                            updated[idx].category = e.target.value;
                            setFormProducts(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Tag Label
                        </label>
                        <select
                          value={prod.tag}
                          onChange={(e) => {
                            const updated = [...formProducts];
                            updated[idx].tag = e.target.value as any;
                            setFormProducts(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        >
                          <option value="NEW ARRIVAL">NEW ARRIVAL</option>
                          <option value="CURATED EDIT">CURATED EDIT</option>
                          <option value="STORE EXCLUSIVE">STORE EXCLUSIVE</option>
                          <option value="COMING SOON">COMING SOON</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Price Display
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Price on Request"
                          value={prod.price || ''}
                          onChange={(e) => {
                            const updated = [...formProducts];
                            updated[idx].price = e.target.value;
                            setFormProducts(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Sizes (comma separated)
                        </label>
                        <input
                          type="text"
                          value={prod.sizes.join(', ')}
                          onChange={(e) => {
                            const updated = [...formProducts];
                            updated[idx].sizes = e.target.value.split(',').map((s) => s.trim());
                            setFormProducts(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Image URL
                        </label>
                        <input
                          type="text"
                          value={prod.imageUrl}
                          onChange={(e) => {
                            const updated = [...formProducts];
                            updated[idx].imageUrl = e.target.value;
                            setFormProducts(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        />
                      </div>

                      <div className="sm:col-span-3">
                        <label className="block text-[10px] uppercase font-semibold text-zinc-600 mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          value={prod.description}
                          onChange={(e) => {
                            const updated = [...formProducts];
                            updated[idx].description = e.target.value;
                            setFormProducts(updated);
                          }}
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-zinc-300"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteProduct(prod.id)}
                      className="p-2 text-red-600 hover:bg-red-50 transition-colors self-start"
                      title="Delete product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-zinc-100 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={handleExportJson}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 hover:bg-zinc-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON Backup</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm('Reset all content to verified original defaults?')) {
                  onResetDefaults();
                  setFormData({ ...INITIAL_STORE_CONFIG });
                  setFormCategories([...INITIAL_CATEGORIES]);
                  setFormProducts([...INITIAL_PRODUCTS]);
                  setSavedNotice(true);
                  setTimeout(() => setSavedNotice(false), 3000);
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-red-700 bg-white border border-red-200 hover:bg-red-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-700 hover:bg-zinc-200"
            >
              Close
            </button>
            <button
              onClick={handleSaveAll}
              className="px-6 py-2 bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 shadow-sm"
            >
              Save All Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
