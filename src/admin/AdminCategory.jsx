import { useEffect, useState } from "react";
import http from "../service/http"; // axios instance

export default function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newSubcategory, setNewSubcategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [error, setError] = useState("");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSubcategoryModal, setShowSubcategoryModal] = useState(false);

  // -----------------------------
  // FETCH CATEGORIES
  // -----------------------------
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await http.get("/categories");
      setCategories(res.data.data || []);
    } catch (err) {
      console.log(err);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // ADD CATEGORY
  // -----------------------------
  const handleAddCategory = async () => {
    if (!newCategory.trim()) {
      setError("Category name is required!");
      return;
    }

    try {
      setLoading(true);
      await http.post("/category/store", { name: newCategory });
      setNewCategory("");
      setShowCategoryModal(false);
      setError("");
      fetchCategories();
    } catch (err) {
      console.log(err);
      setError("Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // DELETE CATEGORY
  // -----------------------------
  const deleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    try {
      setLoading(true);
      await http.delete(`/category/delete/${id}`);
      fetchCategories();
    } catch (err) {
      console.log(err);
      setError("Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // ADD SUBCATEGORY
  // -----------------------------
  const handleAddSubcategory = async () => {
    if (!newSubcategory.trim()) {
      setError("Subcategory name is required!");
      return;
    }

    try {
      setLoading(true);
      await http.post("/subcategory/store", {
        category_id: selectedCategoryId,
        name: newSubcategory
      });
      setNewSubcategory("");
      setShowSubcategoryModal(false);
      setSelectedCategoryId(null);
      setError("");
      fetchCategories();
    } catch (err) {
      console.log(err);
      setError("Failed to add subcategory");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // DELETE SUBCATEGORY
  // -----------------------------
  const deleteSubcategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subcategory?"))
      return;

    try {
      setLoading(true);
      await http.delete(`/subcategory/delete/${id}`);
      fetchCategories();
    } catch (err) {
      console.log(err);
      setError("Failed to delete subcategory");
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e, action) => {
    if (e.key === "Enter") {
      action();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Manage Categories
            </h1>
            <p className="text-gray-600">
              Create and organize your product categories
            </p>
          </div>
          <button
            onClick={() => {
              setShowCategoryModal(true);
              setError("");
              setNewCategory("");
            }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Category
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 shadow-md flex items-center gap-3">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">{error}</span>
            <button
              onClick={() => setError("")}
              className="ml-auto text-red-700 hover:text-red-900"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Categories Grid */}
        {!loading && categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">
                      {cat.name}
                    </h2>
                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors duration-200"
                      title="Delete category"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <h3 className="font-semibold text-gray-700">
                      Subcategories
                    </h3>
                    <span className="ml-auto bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {cat.subcategories.length}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedCategoryId(cat.id);
                        setShowSubcategoryModal(true);
                        setError("");
                        setNewSubcategory("");
                      }}
                      className="text-indigo-600 hover:text-indigo-800 p-1 hover:bg-indigo-50 rounded transition-colors duration-200"
                      title="Add subcategory"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>

                  {cat.subcategories.length > 0 ? (
                    <ul className="space-y-2">
                      {cat.subcategories.map((sub) => (
                        <li
                          key={sub.id}
                          className="flex items-center justify-between gap-2 text-gray-700 bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-indigo-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{sub.name}</span>
                          </div>
                          <button
                            onClick={() => deleteSubcategory(sub.id)}
                            className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors duration-200"
                            title="Delete subcategory"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center py-6">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-300 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                      <p className="text-gray-400 text-sm mb-2">
                        No subcategories yet
                      </p>
                      <button
                        onClick={() => {
                          setSelectedCategoryId(cat.id);
                          setShowSubcategoryModal(true);
                          setError("");
                          setNewSubcategory("");
                        }}
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      >
                        Add first subcategory
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && categories.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-lg">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Categories Yet
            </h3>
            <p className="text-gray-500 mb-6">
              Get started by creating your first category
            </p>
            <button
              onClick={() => setShowCategoryModal(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Create Category
            </button>
          </div>
        )}
      </div>

      {/* Add Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Add New Category
                </h2>
                <button
                  onClick={() => setShowCategoryModal(false)}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <label
                  htmlFor="categoryName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Category Name
                </label>
                <input
                  id="categoryName"
                  type="text"
                  placeholder="Enter category name..."
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleAddCategory)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  autoFocus
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setShowCategoryModal(false)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCategory}
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Add Category
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Subcategory Modal */}
      {showSubcategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  Add New Subcategory
                </h2>
                <button
                  onClick={() => {
                    setShowSubcategoryModal(false);
                    setSelectedCategoryId(null);
                  }}
                  className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <label
                  htmlFor="subcategoryName"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subcategory Name
                </label>
                <input
                  id="subcategoryName"
                  type="text"
                  placeholder="Enter subcategory name..."
                  value={newSubcategory}
                  onChange={(e) => setNewSubcategory(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleAddSubcategory)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors duration-200"
                  autoFocus
                />
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowSubcategoryModal(false);
                    setSelectedCategoryId(null);
                  }}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSubcategory}
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Add Subcategory
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}