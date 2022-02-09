import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleNews = (props) => {
    const {author, download_url} = props.news;
    return (
        
        <Col>
      <Card >
        <Card.Img style={{height: '18rem' }}  variant="top" src={download_url} />
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Text>
            {/* {description} */}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
      
    );
};

export default SingleNews;