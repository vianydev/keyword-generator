import React from "react";

const SearchKeyword = ({ inputChange, handleSubmit }) => {
    return (
        <div>
            <div className="w-8/12 m-auto mb-8">
                <h1 className="text-5xl text-center font-extrabold">Keyword Generator</h1>

                <ul className="list-disc my-6">
                    <li className="my-2 list-item">
                        Find an image that you want to analyze for keyword suggestions.
                        
                    </li>
                    <li className="my-2 list-item">
                        Right-click on the image, select "Copy Image Address" (or a similar option depending on your browser). This will copy the full URL of the image.
                    </li>
                    <li className="my-2 list-item">
                        Paste the copied image URL into input field. Verify that the URL includes the file format (.jpg, .png).
                    </li>
                    <li className="my-2 list-item">
                        Once the analysis is complete, the app will likely display a list of suggested keywords based on the content of the provided photo.
                    </li>
                    <li className="my-2 list-item">
                        Click on a specific keyword from the list to access additional information related to that keyword.
                    </li>
                </ul>

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
                            type="submit"
                            onClick={handleSubmit}
                        > 
                            Get keywords
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchKeyword;
