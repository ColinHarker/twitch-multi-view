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

        function test() {
            console.log("hover");
        }

        function calcHeight(width) {
            return width / 1.7777;
        }

        var m_width;
        var m_height;
        var m_innerWidth = window.innerWidth - 400;

        switch (this.props.number) {
            case 1:
                m_width = m_innerWidth.toString();
                m_height = calcHeight(parseInt(m_width)).toString();
                break;
            case 2:
            case 3:
            case 4:
                m_width = (m_innerWidth / 2).toString();
                m_height = calcHeight(parseInt(m_width)).toString();
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                m_width = (m_innerWidth / 3).toString();
                m_height = calcHeight(parseInt(m_width)).toString();
                break;
            default:
                throw new console.error();
        }

        return (
            <div>
                <div className="holder">
                    <div className="bar">
                        <MDBBtn onHover className="btn-close btn-close-white" color="none" aria-label="Close"></MDBBtn>
                    </div>

                    <iframe
                        className="frame"
                        src={`https://player.twitch.tv/?channel=${this.props.stream}&parent=${this.props.parent}`}
                        height={m_height}
                        width={m_width}
                        allowFullScreen={false}
                        frameBorder="0" >
                    </iframe>
                </div>
            </div >
        )
    }
}

export default Stream;