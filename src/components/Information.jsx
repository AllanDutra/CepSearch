import React from "react";

const Information = (props) => {
    return (
        <div className="cardInfo">
            <span className="titleInfo">
                {props.title}
            </span>
            <span className="contentInfo">
                {props.value}
            </span>
        </div>
    )
}

export default Information;