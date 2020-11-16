import './App.css';
import React from 'react';
import Table from "./Table/Table";
import _ from 'lodash';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleDataGrouped: [],
            isLoaded: false,
            error: null
        };
    }

    async componentDidMount() {
        const peopleRoute = 'https://swapi.dev/api/people/';

        let peopleResponseJson = [];
        let peopleResponsePageJson = [];
        let page = 1;

        do{
            peopleResponsePageJson = await (await fetch(`${peopleRoute}?page=${page}`)).json();
            peopleResponseJson = peopleResponseJson.concat(peopleResponsePageJson.results);
            page++;
        }while (peopleResponsePageJson.next !== null);
        console.log(peopleResponseJson);

        try {
            const peopleObjectArr = await Promise.all(peopleResponseJson.map(async person => {
                const planetResponse = await fetch(person['homeworld']);
                const planetJson = await planetResponse.json();
                person['homeworld'] = planetJson.name;
                return person;
            }));

            console.log(peopleObjectArr);
            const peopleObjectGroupedArr = _.groupBy(peopleObjectArr, 'homeworld');
            console.log(peopleObjectGroupedArr);

            this.setState({
                isLoaded: true,
                peopleDataGrouped: peopleObjectGroupedArr
            });
        } catch (error) {
            this.setState({
                isLoaded: true,
                error
            });
        }

        // fetch(peopleRoute)
        //     .then(response => response.json())
        //     .then(responseJson => {
        //         return Promise.all(responseJson.results.map(person => {
        //             return fetch(person['homeworld'])
        //                 .then(planetsResponse => planetsResponse.json())
        //                 .then(planetsJson => {
        //                     person['homeworld'] = planetsJson.name;
        //                     return person;
        //                 });
        //         }))
        //             .then(peopleObjectArr => _.groupBy(peopleObjectArr, 'homeworld'))
        //             .then(peopleObjectGroupedArr => {
        //                 console.log(peopleObjectGroupedArr);
        //                 this.setState({
        //                     isLoaded: true,
        //                     peopleDataGrouped: peopleObjectGroupedArr
        //                 });
        //             })
        //     }, error => {
        //         this.setState({
        //             isLoaded: true,
        //             error
        //         });
        //     })
    }


    render() {
        const {error, isLoaded, peopleDataGrouped} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="App">
                    <Table peopleGrouped={peopleDataGrouped}/>
                </div>
            );
        }
    }
}

export default App;
