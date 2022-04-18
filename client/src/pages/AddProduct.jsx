import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const inputRef = useRef({ name: "", price: "", category: "" });
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);

  const handleChange = (e) => {
    const name = e.target.name;
    inputRef.current[name] = e.target.value;
  };

  const addItem = () => {
    const { name, price, category } = inputRef.current;
    addProduct(name, price, category);
    navigate("/");
  };

  return (
    <>
      <Button onClick={() => navigate("/")}>Go to products</Button>
      <InputGroup className="w-75" style={{ margin: "150px auto" }}>
        <InputGroup.Text>Name</InputGroup.Text>
        <FormControl onChange={handleChange} name="name" type="text" />
        <InputGroup.Text>Price</InputGroup.Text>
        <FormControl onChange={handleChange} name="price" type="number" />
        <Form.Select
          onChange={handleChange}
          name="category"
          aria-label="Default select example"
          style={{ width: "20%" }}
        >
          <option>Open this select menu</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="dairy">Dairy</option>
        </Form.Select>
        <Button onClick={addItem}>Add</Button>
      </InputGroup>
    </>
  );
};

export default AddProduct;
