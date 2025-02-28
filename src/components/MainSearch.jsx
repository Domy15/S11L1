import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchResult } from "../redux/action";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const jobs = useSelector((state) => state.searchResult.result);
  const company = useSelector((state) => state.favorite.company);
  const loading = useSelector((state) => state.searchResult.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true)
    dispatch(getSearchResult(query));
    dispatch({ type: "LOADING_TRUE" });
  };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1 className="display-1">Remote Jobs Search</h1>
          <Button
            className="h-50"
            onClick={() => {
              navigate("/favorites");
            }}
          >
            <i className="bi bi-star-fill"></i> {company.length}
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {loading ? (
          <Col xs={10} className="mx-auto my-3 d-flex justify-content-center">
            <Spinner animation="border" />
          </Col>
        ) : (
          <Col xs={10} className="mx-auto mb-5">
            {error && (!jobs || jobs.length === 0) && !loading ? (
              <Alert variant="warning">No Jobs Found</Alert>
            ) : (
              jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
            )}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
