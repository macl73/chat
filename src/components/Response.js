import React from 'react';
import PropTypes from 'prop-types';

function Response(props) {
    const {el} = props;

    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{el.from.name}</span>
                <span className="message-data-time">{el.time}</span>
            </div>
            <div className="message my-message">{el.text}</div>
        </li>
    );
};

Response.propTypes = {
    el: PropTypes.object
};

export default Response;