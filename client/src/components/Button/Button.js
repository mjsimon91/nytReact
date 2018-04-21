import React from 'react';
import { Button } from 'reactstrap';

//creating a component for a button that will take on a prop of either save or remove

const PrimaryButton = (props) => {
    return(
        <div>
            <Button outline color="secondary">{props.state}</Button>
        </div>
    )
}

export default PrimaryButton;