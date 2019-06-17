import React, { Component } from 'react'
import SearchBar from './SearchBar';
import Axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onFormSubmit('radwimps')
    }

    onFormSubmit = async query => {
        const response = await Axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: query,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDkfP80DPqccOv1WfKQ0-qCPjn69FL-sPk'
            }
        })
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
         })
       
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}