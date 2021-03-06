import React from 'react';
import Clock from 'react-live-clock';
import 'semantic-ui-css/semantic.min.css'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');
                        * {
                            font-family: 'Gugi', cursive;
                            text-align: center;
                        }
                    `}
                </style>
                <h1 style={{ fontSize: '70px' }}>WebClock</h1>
                <hr style={{ width: '50vh', height: '5px', backgroundColor: 'black', borderRadius: '50px' }} />
                <h1 style={{ fontSize: '60px', marginTop: '20vh' }}>
                    <Clock format={'YYYY.MM.DD'} ticking={true} />
                </h1>
                <h1 style={{ fontSize: '100px' }}>
                    <Clock format={'HH : mm : ss'} ticking={true} />
                </h1>
            </div>
        )
    }
}