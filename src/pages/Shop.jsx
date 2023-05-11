import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import ProductsList from "../components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const { data: products} = useGetData("products");
 

  return (
    <Helmet title="Shop">
      <CommonSection title="Productos" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select>
                        <option option value="med">Medicamento</option>
                        <option value="matq">Material Quirurgico</option>
                        <option value="fisa">Primeros Auxilios</option>
                        <option value="perc">Cuidado Personal</option>
                        <option value="suple">Suplementos</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Ordenar</option>
                  <option value="ascending">Ascenciente</option>
                  <option value="descending">Descendiente</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Buscar......"
                 
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {products.length === 0 ? (
              <h1 className="text-center fs-4">No se encontraron productos!</h1>
            ) : (
              <ProductsList data={products} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
