import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApiSlice";

export const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Message variant="danger">{error?.data?.message}</Message>;
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
