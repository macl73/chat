import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
    const {el} = props;

    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{el.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{el.from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">{el.text}</div>
        </li>
    );
};

Message.propTypes = {
    el: PropTypes.object
};

export default Message;