import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className="ui segment" style={{ height: '540px' }}>
                <div className="ui active centered inline inverted dimmer">
                    <div className="ui large text loader">Loading</div>
                </div>
            </div>
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="ui segment">
            <div className="ui embed" data-source="youtube">
                <iframe src={videoSrc} frameBorder="0"  allowFullScreen title="video player" />
            </div>

            <h4 className="header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>

        </div>
    )
}

export default VideoDetail