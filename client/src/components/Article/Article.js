import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
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
                        {props.pub_date}
                </ListGroupItem>
            ))}
        </ListGroup>
       
           
          
        
    )
}

export default Article;