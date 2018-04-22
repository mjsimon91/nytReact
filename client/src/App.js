import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./App.css";
import Navbar from "./components/Navbar";
import CardWrapper from "./components/CardWrapper";
import Article from "./components/Article/Article";
import SearchForm from "./components/SearchForm";
import API from "./utils/API"


class App extends Component {

  state = {
    search: "",
    results: []
  };


  //Writing the search query
  searchNYT = query => {
    API.search(query)
      // .then(res => this.setState({results: res.data.data}))
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  //handle the typing of a character
  handleInputChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  
  };

  //handle the submission of the form with what is in this.set.state
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search)
    // this.searchNYT(this.state.search);
  };

  render() {
    return (
      <div>

      {/* This will hold the navigation bar */}
        <div className="navigation">
          <Navbar />
        </div>

        {/* Add the first card which will hold the search criteria  */}

        <Container id="searchCard">
            <Row>
                <Col>
                  <div>
                    <CardWrapper header = "Search">
                      <SearchForm
                      handleInputChange = {this.state.handleInputChange}
                      search = {this.state.search}
                      handleFormSubmit = {this.handleFormSubmit}
                      />
                    </CardWrapper>
                  </div>
              </Col>
            </Row>
          </Container>

        {/* Add a card which will display all results */}
  
          <Container id= "resultsCard">
            <Row>
                <Col>
                  <div id="results">
                    <CardWrapper header = "Results">
                      <Article 
                      articleTitle = "This is the title of an article"
                      leadParagraph = "This is a paragraph in an article. It contains a large amount of text"
                      />
                    </CardWrapper>
                  </div>
              </Col>
            </Row>
          </Container>
      

        {/* Add a card that will hold all of the saved articles */}
        <Container id= "savedArticles">
            <Row>
                <Col>
                  <div>
                    <CardWrapper header = "Saved Articles">
                      <Article 
                      articleTitle = "This is the title of an article"
                      leadParagraph = "This is a paragraph in an article. It contains a large amount of text"
                      date = "04/11/18"
                      />
                    </CardWrapper>
                  </div>
              </Col>
            </Row>
          </Container>
      
      
     </div>

    );
  }
}

export default App;
