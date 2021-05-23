import React, { useState } from 'react';
import Stream from './stream';
import './streamWrapper.css';


const StreamWrapper = ({ data }) => {
    const [isShown, setIsShown] = useState(false);


    return (
        <div className="Stream-display">
            {data.map(stream => {
                return (
                    <Stream
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        key={stream.key} stream={stream.name} />
                )
            })}
            {isShown && (
                <div>
                    I'll appear when you hover over the button.
                </div>
            )}
        </div>
    );
};

export default StreamWrapper;