import React from "react";
import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const DetailPage = () => {
  const { products,deleteProduct } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();


  const deleteItem=()=>{
     deleteProduct(id)
     navigate('/')
  }

  useEffect(() => {
    const currentPrudoct = products.filter((el) => el.id == id);
    setProduct(currentPrudoct[0]);
  }, []);

  return (
    <React.Fragment>
      <Button onClick={() => navigate("/")}> Go to products </Button>
      <Card style={{ width: "40rem", height: "40rem", margin: "100px auto" }}>
        <Card.Img variant="top" src="/vegetable.jpeg" />
        <Card.Body>
          <Card.Title> {product.name} </Card.Title>
          <Card.Text> Price: {product.price} </Card.Text>
          <Card.Text> Category: {product.category} </Card.Text>
        </Card.Body>
        <Card.Body style={{ display: "flex", justifyContent: "center" }}>
          <Button style={{ marginRight: "10px" }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/update/${id}`}
            >
              Update
            </Link>
          </Button>
          <Button onClick={deleteItem} style={{ marginLeft: "10px" }}> Delete </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default DetailPage;
