/* eslint-disable react/prop-types */

export default function InfoSection({ heading, text1, text2 }) {

    return (
        <div className="info-section">
            <h3>{heading}</h3>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    )
}