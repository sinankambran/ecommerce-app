import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);

  const [collections, setCollections] = useState([]);

  const [category, setCategory] = useState([]);

  const [subCategory, setSubCategory] = useState([]);

  const [sortOrder, setSortOrder] = useState("relavent");

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    let filteredProducts = products;

    if (search && showSearch) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    filteredProducts = handleSortOrder(sortOrder, filteredProducts);

    setCollections(filteredProducts);
  }, [products, category, subCategory, sortOrder, search, showSearch]);

  const handleCategory = (value) => {
    if (!category.includes(value)) {
      setCategory((prev) => [...prev, value]);
    } else {
      setCategory((prev) => prev.filter((c) => c != value));
    }
  };

  const handleSubCategory = (value) => {
    if (!subCategory.includes(value)) {
      setSubCategory((prev) => [...prev, value]);
    } else {
      setSubCategory((prev) => prev.filter((c) => c != value));
    }
  };

  const handleSortOrder = (order, filteredProducts) => {
    let sortedProducts = [...filteredProducts];

    if (order === "low-to-high") {
      return sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "high-to-low") {
      return sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 border-t border-gray-300 pt-5">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold">Filters</p>

        <div className="pl-3 flex flex-col md:flex-row lg:flex-col gap-4 items-start py-2">
          <div className="flex flex-col gap-2 border-2 border-gray-300 py-3 px-3 w-full md:max-w-60 lg:min-w-60">
            <p className="text-lg font-medium">Categories</p>

            <div className="pl-3 flex flex-col gap-2 text-base font-medium text-gray-700">
              <label className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  onChange={() => handleCategory("Men")}
                />
                Men
              </label>

              <label className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  onChange={() => handleCategory("Women")}
                />
                Women
              </label>

              <label className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  onChange={() => handleCategory("Kids")}
                />
                Kids
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-2 border-gray-300 py-3 px-3 w-full md:max-w-60 lg:min-w-60">
            <p className="text-lg font-medium">Type</p>

            <div className="pl-3 flex flex-col gap-2 text-base font-medium text-gray-700">
              <label className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  onChange={() => handleSubCategory("Topwear")}
                />
                Topwear
              </label>

              <label className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  onChange={() => handleSubCategory("Bottomwear")}
                />
                Bottomwear
              </label>

              <label className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-3 cursor-pointer"
                  onChange={() => handleSubCategory("Winterwear")}
                />
                Winterwear
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 gap-5 flex-col">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 justify-between text-2xl mb-2 sm:mb-0">
          <Title text1={"All"} text2={"COLLECTIONS"} />

          <select
            className="border-2 border-gray-300 text-base font-medium py-2 px-2"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>

        {collections.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-7">
            {collections.map((collection, index) => (
              <ProductItem
                key={index}
                id={collection._id}
                image={collection.image}
                name={collection.name}
                price={collection.price}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-xl">No products found</p>
        )}
      </div>
    </div>
  );
}

export default Collection;
