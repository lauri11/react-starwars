import React from 'react';

const GroupedFragment = ({people}) => {

    people.sort((aObj, bObj) => {
        if(aObj.name < bObj.name){
            return -1;
        }
        if(aObj.name > bObj.name){
            return 1;
        }

        return 0;
    });

    return (
        <>
            {people.map((person, index) => {
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
        </>
    )
}

export default GroupedFragment