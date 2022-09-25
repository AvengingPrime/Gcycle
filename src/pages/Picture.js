import { useState } from 'react'

const Picture = () => {
    const [photoTaken, setPhotoTaken] = useState(false);

    return (
        <>
            <div className={'photo'} id="viewport">
                <img 
                    width = {250}
                    height = {250}
                    src={process.env.PUBLIC_URL+"images/PepsiCan.jpeg"}
                >
                </img>
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