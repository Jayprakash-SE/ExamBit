import React from'react';

// Quill Rich Text Editor Lib
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.quil = React.createRef();
    }

    addImage = (url) => {
        const editor = this.quil.getEditor();
		const index = editor.getLength()
		editor.insertEmbed( index, "image", url, "user")
		editor.formatText(index, index + 1, "width", "200")
    	editor.setSelection(index + 1)
    }

    render() {
        return (
            <ReactQuill ref={(el) => { this.quil = el }} theme="snow" />
        )
    }
}

export default Editor;