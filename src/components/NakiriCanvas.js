import React from 'react'

export default class NakiriCanvas extends React.Component {
    render() {
        return (
            <div style={{
                height: 60,
                width: "80%",
                background: this.props.background,
                borderRadius: 10,
                border: '3px solid ' + (this.props.selected ? "#f50057" : "white"),
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}/>
        )
    }
}