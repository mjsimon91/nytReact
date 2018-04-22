import React from "react";
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import './Article.css';

const Article = (props) => {
    return(
        <ListGroupItem>
          <ListGroupItemHeading>{props.articleTitle}</ListGroupItemHeading>
          <ListGroupItemText>
          {props.leadParagraph}
          </ListGroupItemText>
          {props.date}
        </ListGroupItem>
    )
}

export default Article;