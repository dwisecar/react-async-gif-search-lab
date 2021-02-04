import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state = {
        gifs: [],
        searchQuery: '' 
    }

    fetchGifs = (query='nothing') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then((gifsData) => {
            console.log(gifsData)

            this.setState({ gifs: gifsData.data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }
    
    componentDidMount(){
        this.fetchGifs(this.state.searchQuery)
    }

    handleSearch = (query) => {
        this.setState({searchQuery: query})
        this.fetchGifs(query)
    }

    render() {
        return(
        <div>
            <GifSearch handleSearch={this.handleSearch} />
            <GifList gifs={this.state.gifs}/>
        </div>

        )
    }
}   
export default GifListContainer