import React, {Component} from 'react';
import axios from 'axios';
import ListOfCountry from "../components/ListOfCountry/ListOfCountry";
import NameOfCountry from "../components/NameOfCountry/NameOfCountry";
import {Container, Col, Row} from "reactstrap";

class Country extends Component {

    state = {
        countries: [],
        countryByName: [],
        borders: '',
        countryShown: false,
    };

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name').then(response => {
            this.setState({
                countries: response.data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    countrySelectedHandler = name => {
        axios.get(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
            const borders = response.data[0].borders;
            const promises = borders.map(code => {
                return axios.get('https://restcountries.eu/rest/v2/alpha/' + code);
            });
            Promise.all(promises).then(response => {
                const namesCountry = response.map(country => {
                    return country.data.name;
                });
                if (namesCountry.length === 0) {
                    this.setState({
                        borders: "No borders"
                    })
                } else if (namesCountry.length > 0) {
                    this.setState({/*flex-basis: 300px;*/
                        borders: namesCountry.join(', ')
                    })
                }
            });
            this.setState({
                countryByName: response.data, countryShown: true
            })
        })
    };

    render() {
        return (
            <Container className="app">
                <Row>
                    <Col xs="6" className="box left-box">
                        {this.state.countries.map((country, id) => (
                            <ListOfCountry
                                key={id}
                                title={country.name}
                                clicked={() => this.countrySelectedHandler(country.name)}
                            />
                        ))}
                    </Col>
                    <Col xs="6" className="box right-box">
                        {this.state.countryByName.map((country, id) => (
                            <NameOfCountry
                                key={id}
                                title={country.name}
                                flag={country.flag}
                                capital={country.capital}
                                population={country.population}
                                borders={this.state.borders}
                            />
                        ))}
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Country;
