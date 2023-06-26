import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Components
import Header from './Header.js';
import InvoiceList from './InvoiceList.js';
import InvoiceDetail from './InvoiceDetail.js';
import ApprovalHistory from './ApprovalHistory.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Form>
        <Container className='pl-4 pr-4 pt-2 m-0 My-container'>
          <Row>
            <Col sm={4} md={4} className="p-2">
              <Row className='pt-2 pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>BDS Doc No</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Control type="text" value="BDS/02/2022/0090" disabled />
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>BDS Doc Date</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Control type="text" value="2022-10-05" disabled />
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Supplier</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Control type="text" value="PT Metrodata" disabled />
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Supplier Tax ID</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Control type="text" value="101.333-2222.33333" disabled />
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Transaction Type</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Select disabled>
                    <option>Others</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
            <Col sm={5} md={5} className="p-2">
              <Row className='pt-2 pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Bank Name</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Select>
                    <option value="BCA">BCA</option>
                    <option value="BRI">BRI</option>
                    <option value="Mandiri">Mandiri</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Bank Account</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Select>
                    <option value="122222222">122222222</option>
                    <option value="122222223">122222223</option>
                    <option value="122222224">122222224</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Bank Account Name</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Control type="text" value="PT Metrodata" disabled />
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Support Doc</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Control type="file" />
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Payment Plan Date</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Control type="text" value="2022-10-01" disabled />
                </Col>
              </Row>
              <Row className='pb-3'>
                <Col sm={4} md={4} className="pt-1">
                  <Form.Label>Paid Date</Form.Label>
                </Col>
                <Col sm={8} md={8}>
                  <Form.Control type="text" value="2022-10-01" disabled />
                </Col>
              </Row>
            </Col>
            <Col sm={3} md={3} className="p-3">
              <ApprovalHistory />
            </Col>
          </Row>
          <InvoiceList />
          <InvoiceDetail />
          <Row>
            <Col className='text-center'>
              <Button variant="primary">Save</Button>{' '}
              <Button variant="success">Submit</Button>{' '}
              <Button variant="secondary">Back</Button>{' '}
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default App;
