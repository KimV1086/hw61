import React, {Component} from 'react';
import axios from 'axios';

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

    render() {
        return (
            <div>
<h1>test</h1>
            </div>
        );
    }
}

export default Country;
