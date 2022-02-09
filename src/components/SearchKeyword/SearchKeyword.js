import React from "react";

const SearchKeyword = ({ inputChange, handleSubmit, name }) => {
    return (
        <div>
            <div>
                <h1 className="f1 tc">Keyword Generator</h1>
                <h2 className="f3 tc">Hello { name }</h2>
                <p className="tc">Add the photo's URL to get suggestions for your keywords. Click on the keyword and see their stats in Google trends</p>
            </div>
            <div className="pa4-l">
                <div className="mw7 center pa4 br2-ns ba b--black-10" style={{backgroundColor: "#FFC044"}}>
                    <div className="cf">
                        <input 
                        className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="https://example.com/YOUR-PHOTO.jpg" 
                        type="text" 
                        name="url" 
                        onChange={inputChange} 
                            />
                        <button 
                        className="f6 f5-l fl pv3 tc bn bg-animate dim white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
                        style={{backgroundColor: "#00B7C8"}} 
                        onClick={handleSubmit} > 
                        Get keywords</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchKeyword;
