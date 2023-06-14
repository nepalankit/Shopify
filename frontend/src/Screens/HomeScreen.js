import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";

import Loader from "../components/Loader";
import Messageinfo from "../components/Messageinfo";
import Product from "../components/Product";
import { listProducts } from "../actions/productactions";
const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1> Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Messageinfo variant="danger">{error}</Messageinfo>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
