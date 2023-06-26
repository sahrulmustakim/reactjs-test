import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { AiFillRightCircle } from "react-icons/ai";

export default function InvoiceList() {
    return (
        <Card className='mb-4'>
            <Card.Header>Invoice List</Card.Header>
            <Card.Body>
              <Row>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Invoice Doc</Form.Label>
                    <Form.Control size="sm" type="text" value="Doc122" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Invoice Date</Form.Label>
                    <Form.Control size="sm" type="date" value="2023-10-01" />
                  </Form.Group>
                </Col>
                <Col className='p-1' sm={1}>
                  <Form.Group>
                    <Form.Label className='Form-label'>Top</Form.Label>
                    <Form.Control size="sm" type="text" value="30" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Invoice Due Date</Form.Label>
                    <Form.Control size="sm" type="date" value="2023-11-01" disabled />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Faktur Pajak No</Form.Label>
                    <Form.Control size="sm" type="text" value="111.2222.222-22" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>PPN Rate (%)</Form.Label>
                    <Form.Control size="sm" type="text" value="10" />
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>Description</Form.Label>
                    <Form.Control size="sm" type="text" value="SOFTWARE & LICENSE" />
                  </Form.Group>
                </Col>
                <Col className='p-1' md={2}>
                  <Form.Group>
                    <Form.Label className='Form-label'>Grand Total Before Tax</Form.Label>
                    <table>
                      <tr>
                        <td>
                          <Form.Select siza="sm" className='Select-small'>
                            <option value="IDR">IDR</option>
                          </Form.Select>
                        </td>
                        <td>
                          <Form.Control size="sm" type="text" value="800.000" disabled />
                        </td>
                      </tr>
                    </table>
                  </Form.Group>
                </Col>
                <Col className='p-1'>
                  <Form.Group>
                    <Form.Label className='Form-label'>PPh Prepaid</Form.Label>
                    <Form.Control size="sm" type="text" value="10.000" />
                  </Form.Group>
                </Col>
                <Col className='p-1' md={2}>
                  <Form.Group>
                    <Form.Label className='Form-label'>Grand Total After Tax</Form.Label>
                    <Form.Control size="sm" type="text" value="890.000" disabled />
                  </Form.Group>
                </Col>
                <Col sm={1} className='p-1 Col-button text-center'>
                  <AiFillRightCircle className='Button-right' />
                </Col>
              </Row>
            </Card.Body>
        </Card>
    );
}