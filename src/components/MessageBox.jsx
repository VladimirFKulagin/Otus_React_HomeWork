import React from "react";

const MessageBox = (props) => {
    return (
        <div>
            {props.data && (
                <div class="MessageBox">
                    {props.data}
                </div>
            )}
        </div>
    );
};

export default MessageBox;