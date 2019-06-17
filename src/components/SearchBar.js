import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        query: ''
    }

    onInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    onFormSubmit = e => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.query)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            name="query"
                            value={this.state.query}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}