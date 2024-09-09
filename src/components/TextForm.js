import React, {useState} from "react"


export default function TextForm(props) {
    const handleOnChange = (e) => {
        // To keep form text updated while typing
        // console.log("Changed");
        setText(e.target.value);
    }
    
    const handleUpClick = () => {
        // console.log("Clicked");

        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        // console.log("Clicked");

        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    //State 1 : Declaring a state
    const [text, setText ] = useState('');

    return (

        <>
            <div className="container" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                {/* State 2 : Using a state + handle on change*/}
                    <textarea className="form-control" placeholder="Enter a text" value={text} 
                    onChange={handleOnChange} id="myBox" rows="8"
                    style={{    backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
                                color: props.mode ==='dark' ? 'white' : '#042743'}}
                                ></textarea>
                </div>

                {/* State 3 : onClick Handle */}
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>         
                
                {/* State 3 : onClick Handle */}
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>         

                {/* State 3 : onClick Handle */}
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>   

                {/* State 3 : onClick Handle */}
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>  
                
                {/* State 3 : onClick Handle */}
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>        
            </div>
 
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text: "Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
        
    )
}