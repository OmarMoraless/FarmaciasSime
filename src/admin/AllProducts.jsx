import React from "react";
import { Container, Row, Col } from "reactstrap";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import useGetData from "../custom-hooks/useGetData";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async id => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Eliminado!");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Titulo</th>
                  <th>Categoria</th>
                  <th>Precio</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h4 className="py-5 text-center fw-bold ">Cargando.....</h4>
                ) : (
                  productsData.map(item => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt="" />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                          className="btn btn-danger"
                        >
                          Eliminar
                        </button>
                        <button
                          onClick={() => {
                            console.log(item.id);
                          }}
                          className="btn btn-success"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
