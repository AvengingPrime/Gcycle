import { useState } from 'react'

const Picture = () => {
    const [photoTaken, setPhotoTaken] = useState(false);

    return (
        <>
            <div className={'photo'} id="viewport">
                <img src={process.env.PUBLIC_URL+"Image.jpeg"}></img>
            </div>
            <div id="camera-controls">
                <button onClicked={() => setPhotoTaken(true)}>
                    <i className="fa-solid fa-circle-camera"></i>
                </button>
            </div>
        </>
    );
}

export default Picture;