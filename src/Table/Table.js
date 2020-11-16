import React from 'react';
import GroupedFragment from "./GroupedFragment";
import GroupingRow from "./GroupingRow";

const Table = ({peopleGrouped}) => {
    const styles = {
        table: {
            width: '1000px',
            textAlign: 'left',
            margin: '0 auto',
            padding: '15px',
            position: 'relative',

        },
        th: {
            position: 'sticky',
            top: 0,
            background: 'green',
            color: 'white',
            textAlign: 'center',
            padding: '5px'
        },
    }

    const planets = Object.keys(peopleGrouped).sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        }
        return 0;
    });

    return (
        <table style={styles.table}>
            <thead>
                <tr>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Height</th>
                    <th style={styles.th}>Mass</th>
                    <th style={styles.th}>Hair Color</th>
                    <th style={styles.th}>Skin color</th>
                    <th style={styles.th}>Eye Color</th>
                    <th style={styles.th}>Birth Year</th>
                    <th style={styles.th}>Gender</th>
                    <th style={styles.th}>Homeworld</th>
                </tr>
            </thead>
            <tbody>
                {
                    planets.map((planet, index) => {
                        return ([
                            <GroupingRow planet={planet}/>,
                            <GroupedFragment people={peopleGrouped[planet]}/>
                        ])
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;