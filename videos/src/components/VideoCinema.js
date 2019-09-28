import React from "react";

const VideoCinema = (props) => {
    const style = {
        display: (props.isActive ? "inline-block" : "none")
    }
    return (
        <div
            className="video-cinema"
            style={style}
        >
            {props.children}
        </div>
    );
};

export default VideoCinema;
