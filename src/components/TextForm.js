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
        props.showAlert('Converted to uppercase!', 'success');
    }

    const handleLowClick = () => {
        // console.log("Clicked");

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success');
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Textarea cleared!', 'warning');
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied!', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra space removed!', 'success');
    }

    //State 1 : Declaring a state
    const [text, setText ] = useState('');

    return (

        <>
            <div className="container" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
                <h1 className="my-4">{props.heading}</h1>
                <div className="mb-3">

                {/* State 2 : Using a state + handle on change*/}
                    <textarea className="form-control" placeholder="Enter a text" value={text} 
                    onChange={handleOnChange} id="myBox" rows="8"
                    style={{    backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', 
                                color: props.mode ==='dark' ? 'white' : '#042743'}}
                                ></textarea>
                </div>

                {/* State 3 : onClick Handle */}
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>         
                
                {/* State 3 : onClick Handle */}
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>         

                {/* State 3 : onClick Handle */}
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>   

                {/* State 3 : onClick Handle */}
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>  
                
                {/* State 3 : onClick Handle */}
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>        
            </div>
 
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text: "Nothing to preview."}</p>
            </div>
        </>
        
    )
}