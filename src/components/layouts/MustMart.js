import React from 'react';

const styles = {
    must: {
        backgroundColor: '#f2994a',
        display: 'inline-block',
        padding: '2px 4px',
        color: '#fff',
        fontSize: '12px',
        lineHeight: '1em',
        fontWeight: 'bold',
        verticalAlign: 'baseline',
        whiteSpace: 'nowrap',
        borderRadius: '3px',
    }
}

export default () =>
    <React.Fragment>
        <span style={styles.must}>
            必須
        </span>
    </React.Fragment>