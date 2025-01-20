import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Job = (props) => {
  const dispatch = useDispatch()
  

  return (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${props.data.company_name}`}>{props.data.company_name}</Link>
    </Col>
    <Col xs={6}>
      <a href={props.data.url} target="_blank" rel="noreferrer">
        {props.data.title}
      </a>
    </Col>
    <Col>
    <Button onClick={() => dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: props.data
    })}>Add To Favorite</Button>
    </Col>
  </Row>
  )
}


export default Job
