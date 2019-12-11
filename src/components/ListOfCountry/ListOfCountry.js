import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ListOfCountry extends Component {

    render() {
        return (
            <ListGroup flush className="list">
                <ListGroupItem  onClick={this.props.clicked} tag="a" href="#"><h3>{this.props.title}</h3></ListGroupItem>
            </ListGroup>
        );
    }
}

export default ListOfCountry;
