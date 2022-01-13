import React from "react";

const News = ({news}) => {
    
    // There are some urls that don't exist because even though the ids are in the "news" api they are 
    // comments, so the url doesn't refer to another page but is part of hacker news.
    // For this case the ternary puts news.id in the url that would make it appear.
    return(
        <li>
            <div className="news-item">
                <a href={news.url ? news.url : `https://news.ycombinator.com/item?id=${news.id}`}>{news.title}</a>
            </div>
        </li>
    );
}

export default News;