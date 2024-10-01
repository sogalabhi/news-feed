import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';

function News() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&apiKey=2c349543be4947a0ae656d2a4fc380c6`
                );
                setArticles(response.data.articles);
            } catch (error) {
                console.error("Error fetching the news data", error);
            }
        };

        fetchNews();

    }, [])

    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center pt-5'>Headlines</h1>
            {/* <lottie-player src="https://lottie.host/cb8326f2-90de-43df-b77e-c4724211bae6/OnZdcixV6v.json" background="transparent" className="text-center" speed="1"  style={{width: "300px", height: "300px"}} loop autoplay></lottie-player> */}
            <section className="bg-gray-2 pt-20 dark:bg-dark lg:pt-5">
                <div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                                />
                            ))}
                    </div>
                </div>
            </section>
            <div className="flex justify-between">
                {/* <button onClick={handlePrevClick} disabled={state.page <= 1} className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                    &laquo; Prev
                </button>
                <p>Page: {state.page}</p>
                <button onClick={handleNextClick} disabled={state.page >= Math.ceil(state.totalResults / props.pageSize)} className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                    Next &raquo;
                </button> */}
            </div>

        </div>
    )
}

export default News
