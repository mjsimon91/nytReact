import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class SearchForm extends React.Component {
    render(){
        return (
            <Form>
              <FormGroup>
                <Label for="topic">Topic</Label>
                <Input type="text" name="topic" id="searchTopic" placeholder="Baseball" />
              </FormGroup>

              <FormGroup>
                <Label for="startYear">Start Year</Label>
                <Input type="text" name="startYear" id="startYear" placeholder="2018" />
              </FormGroup>
              
              <FormGroup>
                <Label for="endYear">End Year</Label>
                <Input type="text" name="endYear" id="endYear" placeholder="2018" />
              </FormGroup>

              <Button id="submitSearch">Submit</Button>
            </Form>
          ); 
    }
}

export default SearchForm;