import React from "react";

const MessageBox = (props) => {
    return (
        <div>
            {props.err && (
                <div style={{backgroundColor: 'red', color: 'white', padding: '10px', marginTop: '10px'}}>
                    {props.err}
                </div>
            )}
            {props.data && (
                <div style={{backgroundColor: 'green', color: 'white', padding: '10px', marginTop: '10px'}}>
                    {props.data}
                </div>
            )}
        </div>
    );
};

export default MessageBox;