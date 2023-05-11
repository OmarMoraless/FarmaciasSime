import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/dashboard.css";

import useGetData from "../custom-hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users } = useGetData("users");

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Ventas Totales</h5>
                <span>$65402</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="order__box">
                <h5>Pedidos</h5>
                <span>13</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="products__box">
                <h5>Total de productos</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="users__box">
                <h5>Total de usuarios</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
