import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavorite } from "../redux/action";
import { useEffect } from "react";

const Favorites = () => {
  const company = useSelector((state) => state.favorite.company);
  const loading = useSelector((state) => state.searchResult.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOADING_TRUE" });
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <div>
            <h1 className="display-4">Favorites jobs</h1>
            <Link to={'/'}>{"<-"}Back</Link>
          </div>
          {loading && !company ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            company && company.length > 0 ? (
              dispatch({ type: "LOADING_FALSE" }),
              company.map((jobData, i) => (
                <Row
                  className="mx-0 mt-3 p-3"
                  style={{ border: "1px solid #00000033", borderRadius: 4 }}
                  key={i}
                >
                  <Col xs={3}>
                    <Link to={`/${jobData.company_name}`}>
                      {jobData.company_name}
                    </Link>
                  </Col>
                  <Col xs={6}>
                    <a href={jobData.url} target="_blank" rel="noreferrer">
                      {jobData.title}
                    </a>
                  </Col>
                  <Col>
                    <Button onClick={() => dispatch(removeFromFavorite(i))}>
                      Remove From Favorite
                    </Button>
                  </Col>
                </Row>
              ))
            ) : (
              dispatch({ type: "LOADING_FALSE" }),
              <Alert variant="warning" className="">No favorite jobs found.</Alert>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
