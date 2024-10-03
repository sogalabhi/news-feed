import React, { useEffect, useState } from 'react';
import Card from '../card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from "react-router-dom";

function Feed() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate("/login");
        }
    }, [])


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [preference, setpreference] = useState(["news"])

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
    const updateNews = async () => {
        let q = "";
        (preference != []) ? q = concatq(preference) : q = "news";
        console.log(q)
        const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=2c349543be4947a0ae656d2a4fc380c6&page=${page}&pageSize=10`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()

        // let parsedData = data;
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        updateNews();
    }, [preference])
    const fetchMoreData = async () => {
        let q = "";
        (preference != []) ? q = concatq(preference) : q = "news";
        console.log(q)
        const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=2c349543be4947a0ae656d2a4fc380c6&page=${page + 1}&pageSize=10`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()

        // let parsedData = data;
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center pt-5'>News</h1>
            {loading && <p>Loading</p>}
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
                                        preference={preference}
                                        setpreference={setpreference}
                                    ></Card>
                                ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </section >
        </div >

    )
}

export default Feed
