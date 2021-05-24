import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import './stream.css'

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Stream extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        document.body.appendChild(script);
    }


    render() {
        return (
            <div>
                <div className="holder">
                    <div className="bar">
                        <MDBBtn className="btn-close btn-close-white" color="none" aria-label="Close"></MDBBtn>
                    </div>

                    <iframe
                        className="frame"
                        src={`https://player.twitch.tv/?channel=${this.props.stream}&parent=${this.props.parent}`}
                        height="540"
                        width="960"
                        allowFullScreen={false}
                        frameBorder="0" >
                    </iframe>
                </div>
            </div >
        )
    }
}

export default Stream;