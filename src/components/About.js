import React from 'react'
export default function About(props) {

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? '#042743' :'white',
        border : '1px solid ',
        borderColor :  props.mode === 'dark' ? 'white' : '#042743',
    }
    

return (
    <div className='container '>
        <h1 classNameName='my-3' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <strong>Analyze your Text</strong> 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Text analysis, also known as text mining, is the process of automatically classifying and extracting meaningful information from unstructured text. It involves detecting and interpreting trends and patterns to obtain relevant insights from data in just seconds.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong> 
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is Free to use and very convient to use , you just have to ring your text here and and use our website to do all thing which you need like uppercase to lowercase,counting words and all stuff.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong> 
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Our  website can be 'translated' effectively via a particular browser or operating system, such that it can be accessed by and is fully functional for a user. A site may behave perfectly in one browser but still have issues and errors in others.
                    </div>
                </div>
            </div>
        </div>
       
    </div>
)
}

