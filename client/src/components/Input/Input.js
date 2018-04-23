import React from "react";
import { FormGroup, Label} from 'reactstrap';
import "./Input.css"


const Input = props => {
    return(
    <FormGroup>
        <Label for={props.name}>{props.inputtitle}</Label>
        <input {...props} />
    </FormGroup>           
    )}

export default Input