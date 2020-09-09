import React, { useState, useImperativeHandle, forwardRef } from 'react';
import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	Typography,
	DialogTitle
} from '@material-ui/core';
import QRCode from "react-qr-code";

import {
	NotificationContainer,
	NotificationManager
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const UploadDialog = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	const [uploadImgURL, setuploadImgURL] = useState('');
	const [uuid, setUUID] = useState('');
	const [verCode, setVerCode] = useState('')

	// On dialog open, Make a request to get unique key
	const handleClickOpen = () => {
		fetch("/upload/getId", {
			method: 'post'
		}).then(function (response) {
			return response.json();
		}).then(function (data) {
			setuploadImgURL(data.url);
			setUUID(data.id);
		});
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// Verify the verfication code with backend
	const handleUploadSubmit = () => {
		fetch("/upload/verfiyUpload", {
			method: 'post',
			headers: {
				'Content-type': 'application/json'
			},
			cache: "no-cache",
			body: JSON.stringify({
				uuid: uuid,
				vcode: verCode
			})
		}).then(function (response) {
			return response.json();
		}).then(function (data) {
			if( data.status === "suceess" ){
				NotificationManager.success( data.msg, 'Upload');

				// Add image to editor
				props.editor.current.addImage( data.fileurl )
				setOpen(false);
			} else if( data.status === "error" ){
				NotificationManager.error('Entered wrong verification code!', 'Error', 5000);
			}
		});
	}

	// Set verfication code upon text field change
	const handlerVerCode = (e) => {
		setVerCode(e.target.value)
	}

	useImperativeHandle(ref, () => ({
		handleUploadBtn: handleClickOpen
	}));

	return (
		<div>
			<NotificationContainer/>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog">
				<DialogTitle id="form-dialog">Upload</DialogTitle>
				<DialogContent dividers>
					{uploadImgURL === '' ? '' :
						<>
							<QRCode value={uploadImgURL} />
							<br />
							<br />
							<Typography>
								Scan QR code or goto <a target="_blank" rel="noopener noreferrer" href={uploadImgURL}>{uploadImgURL}</a> URL.
							</Typography>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Verification Code"
								type="number"
								color="secondary"
								value={verCode}
								onChange={handlerVerCode}
								fullWidth
								InputProps={{
									inputProps: { 
										max: 9999, min: 1000 
									}
								}}
							/>
						</>
					}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleUploadSubmit} color="secondary" variant="contained">Sumit</Button>
					<Button onClick={handleClose} variant="contained">Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
});

export default UploadDialog;