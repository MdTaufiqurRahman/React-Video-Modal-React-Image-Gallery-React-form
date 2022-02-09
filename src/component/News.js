import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleNews from './SingleNews';

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
        .then(res=>res.json())
        .then(data=>setNews(data));

    }, []);

    return (
        <Container>
          <div>
          <Row xs={1} md={3} className="g-4">
        
               {
                   news.map(nw => <SingleNews news={nw}></SingleNews>)
               }
            </Row>
            </div>
         </Container>
        
    );
};

export default News;