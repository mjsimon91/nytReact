import React from 'react';
import { Card, CardHeader, CardBody, ListGroup} from 'reactstrap';
import "./CardWrapper.css"

  const CardWrapper = (props) => {
      return(
         
        <div>
            <Card>
                <CardHeader>{props.header}</CardHeader>
                <CardBody>
                    <ListGroup>
                        {props.children}
                    </ListGroup>
                </CardBody>
            </Card>
        </div>        
          
      )
  }

  export default CardWrapper;