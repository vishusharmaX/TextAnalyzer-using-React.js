import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick = ()=>{
        // console.log("Upper was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = ()=>{
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On Changed");
        setText(event.target.value);;
    }
    const handlecopy = ()=>{
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        
    }
    const [text, setText] = useState(' ');
    return (
        <>
        <div className='container' style = {{color :props.mode === 'dark' ? 'white' : '#102458' }}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange= {handleOnChange} style = {{backgroundColor :props.mode === 'dark' ? '#171d59' : 'white', color :props.mode === 'dark' ? 'white' : '#102458' }} id="mybox" rows="8"></textarea>
            </div>
            <button  disabled ={text.length===0}className='btn btn-primary mx-2 my-1' onClick={handleUpClick}> Convert to Upper Case </button>
            <button  disabled ={text.length===0}className='btn btn-primary mx-2 my-1' onClick={handleloClick}> Convert to Lower Case </button>
            <button  disabled ={text.length===0}className='btn btn-primary mx-2 my-1' onClick={handleclearClick}> Clear Text</button>
            <button disabled ={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlecopy}> Copy Text</button>
            <button  disabled ={text.length===0}className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="container my-3"  style = {{color :props.mode === 'dark' ? 'white' : '#102458' }}>
            <h1>Your text summary </h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
            <p>{0.08*text.split(" ").filter((element)=>{return element.length!== 0}).length} Mintues Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview here"}</p>
        </div>
        </>
    )
}
