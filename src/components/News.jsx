import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';
import InfiniteScroll from 'react-infinite-scroll-component';

function News() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [preference, setpreference] = useState(["us", "india", "bitcoin", "sports", "cricket"])
    const [query, setquery] = useState()
    const concatq = (array) => {
        let q = ""
        for (let i = 0; i < array.length; i++) {
            if (i == (array.length - 1)) {
                q = q + array[i]
            }
            else if (array.length == 1) {
                q = q + array[i]
            }
            else {
                q = q + array[i] + "+"
            }
        }
        return q
    }
    const updateNews = async (array) => {
        let q = concatq(array)
        const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=2c349543be4947a0ae656d2a4fc380c6&page=${page}&pageSize=10`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        updateNews(preference);
    }, [])
    const fetchMoreData = async () => {
        let q = query;
        const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=2c349543be4947a0ae656d2a4fc380c6&page=${page + 1}&pageSize=10`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    const handleSearch = () => {
        let q = document.getElementById('search').value;
        setquery(q)
        setArticles([])
        updateNews([q]);
    }
    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center pt-5'>News</h1>
            {loading && <p>Loading</p>}
            <div className='flex justify-center gap-10 items-center my-5'>
                <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline p-2.5 " placeholder="Current affairs" required />
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleSearch}>Search</button>
            </div>
            <section className="bg-gray-2 pt-20 dark:bg-dark lg:pt-5">
                <div>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<p>Loading....</p>}
                    >
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" id="grid">
                            {
                                articles.map((article, index) => (
                                    <Card
                                        key={index}
                                        image={article.urlToImage ? article.urlToImage : "https://www.hindustantimes.com/ht-img/img/2024/05/31/1600x900/pexels-freestockpro-12955556_1717147054240_1717147065823.jpg"}
                                        CardTitle={article.title}
                                        titleHref="/#"
                                        btnHref={article.url}
                                        CardDescription={article.description}
                                        Button="View Details"
                                        author={article.author}
                                        publishedAt={article.publishedAt}
                                    ></Card>
                                ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </section >
        </div >
    )
}

export default News
