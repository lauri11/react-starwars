import React from 'react';

const Table = ({people, planet}) => {
    const styles = {
        table: {
            width: '800px',
            border: '1px solid black',
            textAlign: 'left',
            margin: '0 auto',
            padding: '15px'

        },
        tableHeader: {
            colspan: 9,
            border: '1px solid black',
        },
        td: {
            border: '1px solid black',
        }
    }

    return (
        <table style={styles.table}>
            <thead>
                {/*<tr>*/}
                {/*    <th>Height</th>*/}
                {/*    <th>Mass</th>*/}
                {/*    <th>Hair Color</th>*/}
                {/*    <th>Skin color</th>*/}
                {/*    <th>Eye Color</th>*/}
                {/*    <th>Birth Year</th>*/}
                {/*    <th>Gender</th>*/}
                {/*    <th>Homeworld</th>*/}

                {/*</tr>*/}
                <tr>
                    <th style={styles.tableHeader}>{planet}</th>
                </tr>
            </thead>
            <tbody>
                {people.map( (person, index) => {
                    return (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.height}</td>
                            <td>{person.mass}</td>
                            <td>{person.hair_color}</td>
                            <td>{person.skin_color}</td>
                            <td>{person.eye_color}</td>
                            <td>{person.birth_year}</td>
                            <td>{person.gender}</td>
                            <td>{person.homeworld}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;