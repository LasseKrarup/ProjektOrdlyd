import React from 'react';
import PropTypes from "prop-types"

const title = ({children}) => {
    return (
        <div className="relative flex justify-start ml-14 sm:ml-80 lg:ml-96 items-center sm:justify-end my-8 md:mt-16 lg:mr-36 xl:mr-64 2xl:mr-96">
            <h1 className="lowercase mr-6 text-2xl md:text-3xl 2xl:text-5xl">{children}</h1>
            <div className="h-1 bg-white flex-grow"></div>
        </div>
    );
}

title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default title;