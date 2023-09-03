import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);

        // setText("You have clicked on handleUpClick")

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked: " + text);

        // setText("You have clicked on handleLoClick")

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    
    const handleClearClick = () => {
        // console.log("Lowercase was clicked: " + text);

        // setText("You have clicked on handleLoClick")

        let newText = '';
        setText(newText);
        props.showAlert("text cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = ()=> {
        // console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");

    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed", "success");
    }
    


    const [text, setText] = useState('');
    // text="new text";// Wrong way to cahnge the state
    // setText("new text");// Correct way to cahnge the state
    return (
        <>
            <div className='container' style={{color: props.mode==='light'? 'black': 'white'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" class="form-label">Example textarea</label> */}

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white': 'grey', color: props.mode==='light'? 'black': 'white'}} id="myBox" rows="8"></textarea>

                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>

                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>

                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>

                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>

                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='light'? 'black': 'white'}}>
                
                <h2>Your text summary</h2>
                {/* <p>3432 words and 256767 characters</p> */}
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                
                <h2>Priview</h2>
                <p>{text.length>0? text: "Enter something in the textbox above to preview it here"}</p>

            </div>
        </>

    )
}
