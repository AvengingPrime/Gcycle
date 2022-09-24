const Results = () => {
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
                <button onClicked={setPhotoTaken(true)}>
                    <i class="fa-sharp fa-solid fa-circle-camera"></i>
                </button>
            </div>
        </>
    );
}

export default Results;