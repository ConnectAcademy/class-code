import React from 'react'

function Card({ imageLocation, heading, content }) {
    return (
        <div
            className="location"
            style={{ display: "inline-block", padding: "60px", width: "180px" }}
        >
            <img src={process.env.PUBLIC_URL + imageLocation} style={{ width: "38px" }} />
            <h3>{heading}</h3>
            <p style={{ textAlign: "center" }}>
                {content}
            </p>
        </div>
    )
}

export default Card