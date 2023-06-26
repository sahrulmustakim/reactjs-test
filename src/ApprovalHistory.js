import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function ApprovalHistory() {
    return (
        <Card className='mb-4'>
            <Card.Header className='Header-card-blue'>Approval History</Card.Header>
            <Card.Body>
              <Row>
                <Col className='p-0 m-0 Card-left'>
                    <h1>Judul Nama</h1>
                    <h2>2023</h2>
                    <h3>Deskripsi</h3>
                </Col>
                <div className='p-0 m-0 Card-center'>
                    <div className='Bullet-center'>&nbsp;</div>
                </div>
                <Col className='p-0 m-0 Card-right'>
                    <h1>Lorem Ipsum</h1>
                    <h2>MY VENDOR</h2>
                    <h3>Deskripsi</h3>
                </Col>
              </Row>
              <Row className='pt-2'>
                <Col className='p-0 m-0 Card-left'>
                    <h1>Judul Nama</h1>
                    <h2>2023</h2>
                    <h3>Deskripsi</h3>
                </Col>
                <div className='p-0 m-0 Card-center2'>
                    <div className='Bullet-center'>&nbsp;</div>
                </div>
                <Col className='p-0 m-0 Card-right'>
                    <h1>Lorem Ipsum</h1>
                    <h2>MY VENDOR</h2>
                    <h3>Deskripsi</h3>
                </Col>
              </Row>
              <Row className='pt-2'>
                <Col className='p-0 m-0 Card-left'>
                    <h1>Judul Nama</h1>
                    <h2>2023</h2>
                    <h3>Deskripsi</h3>
                </Col>
                <div className='p-0 m-0 Card-center3'>
                    <div className='Bullet-center'>&nbsp;</div>
                </div>
                <Col className='p-0 m-0 Card-right'>
                    <h1>Lorem Ipsum</h1>
                    <h2>MY VENDOR</h2>
                    <h3>Deskripsi</h3>
                </Col>
              </Row>
            </Card.Body>
        </Card>
    );
}