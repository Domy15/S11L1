import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavorite } from "../redux/action";

const Favorites = () => {
  const company = useSelector((state) => state.favorite.company);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="my-3">
        <div>
          <h1 className="display-4">Favorites jobs</h1>
          <Link to={'/'}>{"<-"}Back</Link>
          </div>
          {company && company.map((jobData, i) => (
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
                <Button
                  onClick={() => dispatch(removeFromFavorite(i))}
                >
                  Remove From Favorite
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
