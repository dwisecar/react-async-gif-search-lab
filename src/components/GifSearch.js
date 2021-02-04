import React from 'react'
import GifListContainer from '../containers/GifListContainer'

class GifSearch extends React.Component {

    state = {
        query: ''
    }

    handleChange = e => {
        this.setState({query: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleSearch(this.state.query)
    }

    render(){
        return(
            <div className='gif-search'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} name='query' value={this.state.query}></input>
                </form>
            </div>
        )
    }
}
export default GifSearch