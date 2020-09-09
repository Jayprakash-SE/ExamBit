import React, { useState } from 'react';
import {
	Container,
	Button,
	Grid,
	Typography
} from '@material-ui/core'
import { DropzoneArea } from 'material-ui-dropzone'

function UploadImage( { match } ) {
	const [verResp, setVerResp] = useState('')

	// Upload image to backend
	const onUploadImage = () => {
		var formData = new FormData();
            formData.append('file', document.querySelector('#image_file').files[0]);
			formData.append('fileN', match.params.uuid );
 
		fetch( '/upload/img/' + match.params.uuid, {
			method: 'post',
			body: formData
		}).then(function (response) {
			return response.json();
		}).then(function (data) {
			if( data["status"] === "suceess" ){
				setVerResp(data["verficationcode"])
			}
		}).catch( function(e){
			setVerResp("Error :( ");
		});
	}
	return (
		<Container fixed>
			<br/>
			{ verResp === '' ?
			<>
				<Grid item xs={4}>
					<DropzoneArea
						acceptedFiles={ [ 'image/*' ] }
						filesLimit={1}
						inputProps={{
							name: "file",
							id: "image_file",
							capture: true
						}}
					/>
				</Grid>
				<br/>
				<Button color="secondary" onClick={onUploadImage} variant="contained" type={'submit'}>Upload</Button>
			</>
			:
				<>
					<Typography>Your verfication code is: {verResp}</Typography>
				</>
			}
		</Container>
	);
}

export default UploadImage;