import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{borderTop: '1px solid black'}}>
            {props.children}
        </div>
    );
};

export default Scroll;