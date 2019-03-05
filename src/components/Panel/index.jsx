import React from 'react';
import './Panel.scss'

const Panel = (props) => {
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 panel">
                <h1>{props.title}</h1>
                <span>{props.subText}</span>
                <p>{props.text}</p>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>)
}

export default Panel;