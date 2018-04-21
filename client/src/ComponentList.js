import React, { Component } from "react";
import Button from './components/Button';
import CardWrapper from "./components/CardWrapper"
import Article from "./components/Article"

class ComponentList extends Component {
    render() {
        return(
            <div>
                <Button state = "save" />
              
                <CardWrapper header="Title"> 
                    <Article 
                    articleTitle = "This is a Title"
                    leadParagraph = "This is a paragraph for my component"
                    />
                    <Button state = "save" />
                </CardWrapper>


            </div>
        )
    }
    
}

export default ComponentList