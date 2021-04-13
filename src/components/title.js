import React from 'react';
import PropTypes from "prop-types"

const title = ({children}) => {
    return (
        <div className="relative flex justify-start ml-14 items-center my-8">
            <h1 className="lowercase mr-6 text-2xl">{children}</h1>
            <div className="h-1 bg-white flex-grow"></div>
        </div>
    );
}

title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default title;