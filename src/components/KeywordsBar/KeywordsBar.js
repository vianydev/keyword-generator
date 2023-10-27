import React from "react";

const KeywordsBar = ({ keywords, url }) => {
    return (
        <div className={`${keywords.length !== 0 ? 'block' : 'hidden'} my-8 m-auto w-10/12 md:w-4/6 lg:w-6/12 h-auto bg-base-100 shadow-xl text-center rounded-lg`}>  
            
            <figure className="">
                
                <img
                    className="max-w-xs sm:max-w-lg m-auto mt-4 mb-8 rounded-lg"
                    src={url}
                    alt="" />
            </figure>
            <div className="mb-4">
                { keywords.map((word) => 
                    <button
                        className="btn m-2"
                        key={word.id}
                        target="_blank" 
                        rel="noreferrer noopener"
                        href={`https://trends.google.es/trends/explore?q=${word.name}&geo=MX`}>
                            
                        {word.name}
                    </button>) 
                }
            </div>

        </div>
    )
}

export default KeywordsBar;