import { useState, createContext } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([
    {
      name: "Fairy Eggplant",
      price: 1,
      category: "vegetable",
      id: Math.ceil(Math.random() * 500),
    },
    {
      name: "Organic Goddes Melon",
      price: 5,
      category: "fruit",
      id: Math.ceil(Math.random() * 500),
    },
    {
      name: "Orange",
      price: 3,
      category: "fruit",
      id: Math.ceil(Math.random() * 500),
    },
    {
      name: "Chocolate Whole Milk",
      price: 6,
      category: "dairy",
      id: Math.ceil(Math.random() * 500),
    },
    {
      name: "Organic Celery",
      price: 5.9,
      category: "vegetable",
      id: Math.ceil(Math.random() * 500),
    },
  ]);

  const deleteProduct = (id) => {
    const newProduct = products.filter((el) => el.id != id);
    setProducts(newProduct);
  };

  const addProduct = (name, price, category) => {
    products.push({
      name: name,
      price: price,
      category: category,
      id: Math.ceil(Math.random() * 500),
    });
    setProducts(products);
  };

  const updateProduct = (name, price, category, id) => {
    products.map((el) => {
      if (el.id == id) {
        el.name = name;
        el.price = price;
        el.category = category;
      }
    });
    setProducts(products);
  };

  return (
    <ProductContext.Provider
      value={{ products, deleteProduct, addProduct, updateProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
