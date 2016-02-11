import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//import components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC_Qgnfh_ZlpHJQhyNk9a1B05YayU02U-M';

// Create a new component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surf');
	}

	videoSearch(term) {
		YTSearch({ key:API_KEY, term: term}, videos => {
			this.setState({ 
				videos: videos, 
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		const VideoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

		return (<div>
			<SearchBar 
				onTextChange = { VideoSearch } />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList
				onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) }
				videos={this.state.videos} />
		</div>);
	}
}

//it is like
/**
 * const App = function () {
 *       return <div> Hi! </div>;
 * }
 */

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementsByClassName('container')[0]);
