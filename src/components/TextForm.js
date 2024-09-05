import React, {useState} from "react"


export default function TextForm(props) {
    const handleOnChange = (e) => {
        // To keep form text updated while typing
        console.log("Changed");
        setText(e.target.value);
    }
    
    const handleUpClick = () => {
        console.log("Clicked");

        let newText = text.toUpperCase();
        setText(newText);
    }


    //State 1 : Declaring a state
    const [text, setText ] = useState('');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">

            {/* State 2 : Using a state */}
                <textarea className="form-control" placeholder="Enter a text" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            {/* State 3 : onClick Handle */}
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>         
            
        </div>
    )
}