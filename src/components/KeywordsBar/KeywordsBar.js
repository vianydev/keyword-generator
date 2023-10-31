import React from "react";

const KeywordsBar = ({ keywords, url }) => {
    return (
        <div className={`${keywords.length !== 0 ? 'block' : 'hidden'} my-8 m-auto w-10/12 md:w-4/6 lg:w-6/12 h-auto bg-base-100 shadow-xl text-center rounded-lg`}>  
            
            <figure className={`${keywords.length > 1 ? 'block' : 'hidden'}`}>
                
                <img
                    className="max-w-xs sm:max-w-lg m-auto mt-4 mb-8 rounded-lg"
                    src={url}
                    alt="" />
            </figure>
            <div className="">
                {
                    keywords.length > 1 ?                     
                        keywords.map((word) => 
                        <a
                            className="btn m-2"
                            key={word.id}
                            target="_blank" 
                            rel="noreferrer noopener"
                            href={`https://trends.google.es/trends/explore?q=${word.name}&geo=MX`}>
                                
                            {word.name}
                        </a>) :
                        <p className="m-2 text-center content-center">
                            URL INVALID 
                        </p>
                }
            </div>

        </div>
    )
}

export default KeywordsBar;