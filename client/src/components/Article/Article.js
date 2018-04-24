import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Row } from 'reactstrap';
import './Article.css';

const Article = (props) => {
    return(
        <ListGroup>
            {props.results.map(article => (
                 <ListGroupItem>
                    <ListGroupItemHeading>{article.headline.main}</ListGroupItemHeading>
                    <ListGroupItemText>
                        {article.snippet}
                    </ListGroupItemText>
                        {article.pub_date}
                        <Row>
                        <Button id={article._id} outline color="primary">Save</Button>
                        </Row>
                    
                </ListGroupItem>
            ))}
        </ListGroup>
       
           
          
        
    )
}

export default Article;