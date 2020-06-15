import React from 'react';

class SearchBar extends React.Component {

    state = { 
        term: '',
        placeholderText: ''
    };

    componentDidMount() {
        setInterval(() => {
            var placeholderText = ['Office', 'Natural', 'Mountain', 'Beach', 'Sunrise', 'Chill', 'Caffe', 'Restourant'];
            var randomIndex = Math.floor(Math.random()*placeholderText.length);
            this.setState({placeholderText: placeholderText[randomIndex]});    
        }, 2000)
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label> Image Search </label>
                        <input 
                            type='text' 
                            placeholder={this.state.placeholderText}
                            value={this.state.term}
                            onChange={(event) => {this.setState({term : event.target.value})}}
                        >
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;