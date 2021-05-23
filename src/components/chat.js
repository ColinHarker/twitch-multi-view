import React from 'react'

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';


class Chat extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        document.body.appendChild(script);
    }

    render() {
        const height = window.innerHeight - 50;

        return (
            <div>
                <div>
                    <iframe id="twitch-chat-embed"
                        src="https://www.twitch.tv/embed/buddha/chat?darkpopout&parent=localhost"
                        height={height}
                        width="350"
                        frameBorder="0">
                    </iframe>
                </div>
            </div >
        )
    }
}

export default Chat;