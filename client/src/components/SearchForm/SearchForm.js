import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class SearchForm extends React.Component {
    render(){
        return (
            <Form>
              {this.props.children}
            </Form>
          ); 
    }
}

export default SearchForm;