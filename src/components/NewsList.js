import React from "react";
import News from "./News";

const NewsList = ({filteredList}) => {

    const newsNodes = filteredList.map((news, index) => <News key={index} news={news}/>);

    return(
        <ul>
            <div className="news-list">
                {newsNodes}
            </div>
        </ul>
    );
}

export default NewsList;