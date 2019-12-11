import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

class NameOfCountry extends Component {

    render() {
        return (
            <Card>
                <CardImg top width="100%" src={this.props.flag} alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>Capital: {this.props.capital}</CardText>
                    <CardText>Population: {this.props.population}</CardText>
                    <CardText>Borders: {this.props.borders}</CardText>
                </CardBody>
            </Card>
        )
    }
}

export default NameOfCountry;
