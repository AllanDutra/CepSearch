import React from "react";

const SocialMedia = (props) => {
    return (
        <span className="socialMedia">
            {props.icon}

            <span className="textSocialMedia">
                <a href={props.link}>{props.text}</a>
            </span>

        </span>
    )
}

export default SocialMedia;