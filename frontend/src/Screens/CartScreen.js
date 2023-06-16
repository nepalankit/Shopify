import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart } from "../actions/cartactions";

import Messageinfo from "../components/Messageinfo";
const CartScreen = (location) => {
  const productId = useParams();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1> This is the cart</h1>
    </div>
  );
};

export default CartScreen;
