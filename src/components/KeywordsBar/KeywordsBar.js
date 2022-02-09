import React from "react";

const KeywordsBar = ({ keywords, url }) => {
    return (
        <section className="pa4-m tc pa4-l mw7 center pa4 br2-ns">  
            <img className="w-100 db center mw5 ba b--black-10"
            src={url}
            style={{marginBottom: "2rem"}}
            alt=""  />
            { keywords.map(word => 
                <a className="f4 link hover-yellow no-underline white dib ph2 pv1"
                key={word.id}
                target="_blank" 
                rel="noreferrer noopener"
                href={`https://trends.google.es/trends/explore?q=${word.name}&geo=MX`}> { "- " + word.name } </a>) 
            }
        </section>
    )
}

export default KeywordsBar;