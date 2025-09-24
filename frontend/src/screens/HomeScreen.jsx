import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";

import { useGetProductsQuery } from "../slices/productsApiSlice";

export const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error?.data?.message || "Ooooups, something went wrong"}</h1>;
  }

  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
