import React from "react";

const SearchKeyword = ({ inputChange, handleSubmit }) => {
    return (
        <div>
            <div className="w-8/12 m-auto mb-8">
                <h1 className="text-5xl text-center font-extrabold">Keyword Generator</h1>

                <p className="text-base text-center">Add the photo's URL to get suggestions for your keywords. Click on the keyword and see their stats in Google trends</p>

            </div>
            <div className="px-4">
                <div className="max-w-screen-sm mx-auto p-4 rounded-md border border-black-10">
                    <div className="flex flex-col md:flex-row">
                        <input 
                            className="input input-bordered input-primary mb-4 md:m-0 md:mr-2  w-full"
                            placeholder="https://example.com/YOUR-PHOTO.jpg" 
                            type="text" 
                            name="url" 
                            onChange={inputChange} 
                            />
                        <button 
                            className="btn btn-accent" 
                            onClick={handleSubmit} > 
                        Get keywords</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchKeyword;
