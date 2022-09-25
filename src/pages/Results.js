const Results = (props) => {
    const [photoTaken, setPhotoTaken] = useState(false);

    return (
        <>
            <div id="credits">
                <div classname="user-credits-div" id="user-num-credits">
                    <p className="credits-count">{props.userHandle.numCredits}</p>
                    <p className="credits-count-caption">Current Credits</p>
                </div>
                <div classname="user-credits-div" id="user-lifetime-credits">
                    <p className="credits-count">{props.userHandle.lifetimeCredits}</p>
                    <p className="credits-count-caption">Lifetime Credits</p>
                </div>
            </div>
            <div id="user-stats">
                <div className="graph user-graph" id="user-plastic-recycled">
                    
                </div>
                <div className="graph user-graph" id="user-emissions-reduced">
                    
                </div>
            </div>
            <div id="global-stats">
                <div className="graph global-graph" id="global-plastic-recycled">
                    
                </div>
                <div className="graph global-graph" id="global-emissions-reduced">
                    
                </div>
            </div>
        </>
    );
}

export default Results;