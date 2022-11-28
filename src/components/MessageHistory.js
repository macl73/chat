import React from 'react';
import PropTypes from 'prop-types';
import Message from "./Message.js";
import Response from "./Response.js";
import Typing from "./Typing.js";

function MessageHistory(props) {
    const {list} = props;

    function renderMessage(obj) {
        if (obj.type === "response") {
            return <Response el={obj} />
        } else if (obj.type === "message") {
            return <Message el={obj} />
        } else {
            return <Typing el={obj} />
        };
    };

    return (
        <div className="item-list">
            {list.map(el => <ul className="item" key={el.id}>{renderMessage(el)}</ul>)}
        </div>
    );
};

MessageHistory.propTypes = {
    list: PropTypes.array
};

export default MessageHistory;