import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";
import dermaImg from "../assets/images/demaimgs.png";
import mayo from "../assets/images/cintillo-Mayo23-novedades.jpg";
import promos from "../assets/images/cintillo-medicinal-d-v2.jpg";
import madres from "../assets/images/diamadres.jpg";

import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      item => item.category === "Medicamento"
    );

    const filteredBestSalesProducts = products.filter(
      item => item.category === "Material Quirurgico"
    );

    const filteredMobileProducts = products.filter(
      item => item.category === "Primeros Auxilios"
    );

    const filteredWirelessProducts = products.filter(
      item => item.category === "Cuidado Personal"
    );

    const filteredPopularProducts = products.filter(
      item => item.category === "Suplemento Alimenticio"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Tendencias en {year}</p>
                <h2>Lo mejor para que tu te sientas bien</h2>
                <p>
                ¡Visítanos y encuentra todo lo que necesitas para cuidar tu salud y bienestar!
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">Comprar ahora</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    <br />
    <img src={promos} alt="" />

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Productos en tendencia</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Cargando....</h5>
            ) : (
              <ProductsList data={trendingProducts} />
            )}
          </Row>
        </Container>
      </section>

      <img src={mayo} alt="" />

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Más vendidos</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Cargando....</h5>
            ) : (
              <ProductsList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Ofertas por tiempo limitado</h4>
                <h3 className="text-white fs-5 mb-3">Material y Herramientas Quirurgicas</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn "
              >
                <Link to="/shop">Visitanos</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>



      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center ">
              <h2 className="section__title">Nuevos productos</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Cargando....</h5>
            ) : (
              <ProductsList data={mobileProducts} />
            )}
            {loading ? (
              <h5 className="fw-bold">Cargando....</h5>
            ) : (
              <ProductsList data={wirelessProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Productos Dermatologicos</h4>
                <h3 className="text-white fs-5 mb-3">Lo mejor para el cuidado de tu piel</h3>
              </div>
              

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn "
              >
                <Link to="/shop">Conoce los productos</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end derma__img">
              <img src={dermaImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

              <img src={madres} alt="" />

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Populares en</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Cargando....</h5>
            ) : (
              <ProductsList data={popularProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
