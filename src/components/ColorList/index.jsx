import './index.css';

function ColorList() {
    return (
        <div className="color-list">
            <div className="color-box red">
                <p>Red</p><span></span>
            </div>
            <div className="color-box blue">
            <p>Blue</p><span></span>
            </div>
            <div className="color-box green">
            <p>Green</p><span></span>
            </div>
            <div className="color-box yellow">
            <p>Yellow</p><span></span>
            </div>
            <div className="color-box maroon">
                <p>Maroon</p><span></span>
            </div>
        </div>
    )
}

export default ColorList;