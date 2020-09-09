import React from 'react';

// Material UI
import {
	Container,
    Button
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// Components
import UploadDialog from './Upload/Upload';
import Editor from './Editor/Editor';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.editor = React.createRef();
		this.uploadRef = React.createRef();
	}

	render(){
		return (
			<Container fixed>
				<UploadDialog ref={this.uploadRef} editor={this.editor}/>
				<br />
				<Button variant="contained"
					color="default"
					startIcon={<CloudUploadIcon />}
					onClick={() => this.uploadRef.current.handleUploadBtn()}
				> Upload Image </Button>
				<br />
				<br />
				<Editor ref={this.editor} />
			</Container>
		);
	}
}

export default Home;