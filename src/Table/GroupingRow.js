import React from 'react';

const styles = {
    td: {
        colspan: 9,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: '5px',
        color: '#4a4545'
    }
}

const GroupingRow = ({planet}) => {
    return <tr><td style={styles.td}>{planet}</td></tr>
}

export default GroupingRow