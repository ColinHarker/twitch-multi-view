import React from 'react'

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

        const source = {};
        console.log(source);
        return (
            <div>
                <div>
                    <iframe
                        src={`https://player.twitch.tv/?channel=${this.props.stream}&parent=localhost`}
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