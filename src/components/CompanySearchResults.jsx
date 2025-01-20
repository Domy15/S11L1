import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const company = useSelector((state) => state.favorite.company);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="display-4">Job posting for: {params.company}</h1>
            <Button
              className="h-50"
              onClick={() => {
                navigate("/favorites");
              }}
            >
              <i className="bi bi-star-fill"></i> {company.length}
            </Button>
          </div>
          <Link to={'/'}>{"<-"}Back</Link>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
