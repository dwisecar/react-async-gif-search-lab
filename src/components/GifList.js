import React from 'react'

class GifList extends React.Component {

    render(){
        return(
            <div className='gif-list'>
                {this.props.gifs.map(gif => <img key={gif.id} src={gif.url} />)}
            </div>
        )
    }
}
export default GifList