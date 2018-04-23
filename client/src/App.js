import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import "./App.css";
import Navbar from "./components/Navbar";
import CardWrapper from "./components/CardWrapper";
import Article from "./components/Article/Article";
import SearchForm from "./components/SearchForm";
import Input from "./components/Input"
import Button from "./components/Button"
import API from "./utils/API"


class App extends Component {

  state = {
    search: "",
    startDate: "",
    endDate:"",
    results: []
  };


  //Writing the search query
  searchNYT = query => {
    API.search(query)
      // .then(res => this.setState({results: res.data.data}))
      .then(res => this.setState({ results: res.data.response.docs}))
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
    this.searchNYT(this.state.search);
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
                      <SearchForm>
                        
                        {/* Add an inout for the search term */}
                        <Input 
                        inputtitle = "Search Term"
                        name = "search"
                        value = {this.state.search}
                        onChange = {this.handleInputChange}
                        placeholder = "Search a topic"
                        type = "text"
                        />

                        {/* Add an input for the start date */}
                        <Input 
                        inputtitle = "Start Year"
                        name = "startDate"
                        value = {this.state.startDate}
                        onChange = {this.handleInputChange}
                        placeholder = "2018"
                        type =  "date"
                        />

                         {/* Add an input for the end date */}
                         <Input 
                        inputtitle = "End Year"
                        name = "endDate"
                        value = {this.state.endDate}
                        onChange = {this.handleInputChange}
                        placeholder = "2018"
                        type = "date"
                        />

                        {/* Button to search */}
                        <Button
                        onClick = {this.handleFormSubmit}
                        type = "submit"
                        text = "Search"
                        />

                      </SearchForm>
                    
                    </CardWrapper>
                  </div>
              </Col>
            </Row>
          </Container>

        {/* Add a card which will display all results */}
  
          <Container id= "resultsCard">
        
                  <div id="results">
                    <CardWrapper header = "Results">
                      <Article 
                      results = {this.state.results}
                      />
                    </CardWrapper>
                  </div>
            
          </Container>
      

        {/* Add a card that will hold all of the saved articles */}
        {/* <Container id= "savedArticles">
            <Row>
                <Col>
                  <div>
                    <CardWrapper header = "Saved Articles">
                      <Article 
                    
                      />
                    </CardWrapper>
                  </div>
              </Col>
            </Row>
          </Container>
       */}
      
     </div>

    );
  }
}

export default App;
