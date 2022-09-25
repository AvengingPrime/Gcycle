import { useState } from 'react'

const Picture = () => {
    const [photoTaken, setPhotoTaken] = useState(false);

    return (
        <>
            <div className={photoTaken? 'photo-taken':'photo-not-taken'} id="viewport">
                {
                    photoTaken?
                        <></>:<></>
                }
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