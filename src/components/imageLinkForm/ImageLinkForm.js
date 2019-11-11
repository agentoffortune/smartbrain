import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This magic brain will detect faces in your pictures. Give it a try!'}
            </p>
                <div className='center'>
                    <div className='pa2 br5 shadow-5 w-75 tc form center'>
                        <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 white bg-dark-gray' onClick={onSubmit}>Detect</button>
                    </div>
                    
                </div>
            
        </div>
    )
}
export default ImageLinkForm;