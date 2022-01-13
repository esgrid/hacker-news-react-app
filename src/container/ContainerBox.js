import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import NewsList from '../components/NewsList';

const ContainerBox = () => {

    const [newsIDList, setNewsIDList] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [filteredNewsList, setNewFilteredNewsList] = useState([]);

    const insertID = id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

    useEffect(() => getNews('https://hacker-news.firebaseio.com/v0/topstories.json'), []);

    useEffect(() => {
        Promise.all(newsIDList.slice(0, 20).map(newsID => fetch(insertID(newsID))))
        .then(response => Promise.all(response.map(result => result.json())))
        .then(data => setNewsList(data));
    }, [newsIDList]);

    useEffect(() => {
        setNewFilteredNewsList([...newsList]);
    }, [newsList])

    const getNews = url => {
        fetch(url).then(res => res.json()).then((value) => setNewsIDList(value));
    }

    const filterNews = (titleBit) => {
        setNewFilteredNewsList([...newsList.filter(news => news.title.toLowerCase().includes(titleBit.toLowerCase()))]);
    }

    return(
        <div className='container-box'>
            <Filter onChangeInput={filterNews}/>
            <NewsList filteredList={filteredNewsList} />
        </div>
    );
}

export default ContainerBox;