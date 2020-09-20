import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png','image/jpeg', 'image/jpg'];
    

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
    
    return (
        <form>
            <div className="center">
                <input type="file" name="file" id="file" onChange={changeHandler} className="inputfile"/>
                <label htmlFor="file">+</label>
            </div>
            <div className="output">
                { error && <div className="error">{error}</div> }
                { file && <div>{file.name}</div> }
                { file && <ProgressBar file = {file} setFile = { setFile }/> }
            </div>
        </form>
    )
}

export default UploadForm
