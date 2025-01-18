import React from "react";

const ErrorMessageBox = (props) => {
    return (
        <div>
            {props.err && (
                <div class="errMessageBox" >
                    {props.err}
                </div>
            )}
        </div>
    );
};

export default ErrorMessageBox;