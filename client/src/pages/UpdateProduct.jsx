import { useEffect, useState, useContext } from "react";
import { FormControl, InputGroup, Button, Form } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [inputs, setInputs] = useState({ name: "", price: "", category: "" });
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useContext(ProductContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const updateItem = () => {
    const { name, price, category } = inputs;
    updateProduct(name, price, category, id);
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    // const currentPrudoct = products.filter((el) => el.id == id);
    // setInputs(currentPrudoct[0]);
    const currentPrudoct = products.find((el) => el.id == id);
    setInputs(currentPrudoct);
  }, []);

  return (
    <>
      <Button onClick={() => navigate("/")}>Go to products</Button>
      <InputGroup className="w-75" style={{ margin: "150px auto" }}>
        <InputGroup.Text>Name</InputGroup.Text>
        <FormControl
          onChange={handleChange}
          name="name"
          type="text"
          value={inputs.name}
        />
        <InputGroup.Text>Price</InputGroup.Text>
        <FormControl
          onChange={handleChange}
          value={inputs.price}
          name="price"
          type="number"
        />
        <Form.Select
          onChange={handleChange}
          value={inputs.category}
          name="category"
          aria-label="Default select example"
          style={{ width: "20%" }}
        >
          <option>Open this select menu</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="dairy">Dairy</option>
        </Form.Select>
        <Button onClick={updateItem}>Update</Button>
      </InputGroup>
    </>
  );
};

export default UpdateProduct;
