import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { AiFillMinusCircle } from "react-icons/ai";

export default function InvoiceDetail() {
    return (
        <Card className='mb-4'>
            <Card.Header>Invoice List Detail</Card.Header>
            <Card.Body>
              <Row>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Doc Received No</Form.Label>
                    <Form.Control size="sm" type="text" value="SJ123" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>PO No</Form.Label>
                    <Form.Control size="sm" type="text" value="POR/HMSI/21-2088" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Item</Form.Label>
                    <Form.Control size="sm" type="text" value="UI Path Studio 1" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Quantity</Form.Label>
                    <Form.Control size="sm" type="text" value="1" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Amount DPP</Form.Label>
                    <Form.Control size="sm" type="text" value="200.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>PPN Amount</Form.Label>
                    <Form.Control size="sm" type="text" value="20.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>PPh Prepaid</Form.Label>
                    <Form.Control size="sm" type="text" value="10.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>PPh Payable</Form.Label>
                    <Form.Control size="sm" type="text" value="0" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1' md={2}>
                  <Form.Group>
                    <Form.Label className='Form-label'>Total Before Tax</Form.Label>
                    <Form.Control size="sm" type="text" value="200.000" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1' md={2}>
                  <Form.Group>
                    <Form.Label className='Form-label'>Total After Tax</Form.Label>
                    <Form.Control size="sm" type="text" value="230.000" disabled />
                  </Form.Group>
                </Col>
                <Col sm={1} className='p-1 Col-button text-center'>
                  <AiFillMinusCircle className='Button-minus' />
                </Col>
              </Row>
              <Row>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="SJ123" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="POR/HMSI/21-2088" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="UI Path Studio 1" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="1" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="200.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="20.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="10.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="0" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1' md={2}>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="200.000" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1' md={2}>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="230.000" disabled />
                  </Form.Group>
                </Col>
                <Col sm={1} className='p-1 Col-button text-center'></Col>
              </Row>
              <Row>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="SJ123" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="POR/HMSI/21-2088" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="UI Path Studio 1" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="1" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="200.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="20.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="10.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="0" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1' md={2}>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="200.000" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1' md={2}>
                  <Form.Group>
                    <Form.Control size="sm" type="text" value="230.000" disabled />
                  </Form.Group>
                </Col>
                <Col sm={1} className='p-1 Col-button text-center'></Col>
              </Row>
            </Card.Body>
        </Card>
    );
}