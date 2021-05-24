import React, { useState } from 'react';
import Stream from './stream';
import './streamWrapper.css';

var PARENT_LINK;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    PARENT_LINK = "localhost";
} else {
    // production code 
    PARENT_LINK = "www.twitchmultiview.tv";
}

const StreamWrapper = ({ data }) => {
    const [isShown, setIsShown] = useState(false);


    return (
        <div className="Stream-display">
            {data.map(stream => {
                return (
                    <Stream
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        key={stream.id} stream={stream.name} parent={PARENT_LINK} />
                )
            })}
            {isShown && (
                <div>
                    I'll appear when you hover over the button.
                </div>
            ) && console.log("yes")}
        </div>
    );
};

export default StreamWrapper;