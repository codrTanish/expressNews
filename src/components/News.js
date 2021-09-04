import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import axios from 'axios'

import HashLoader from "react-spinners/HashLoader";

import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';



const News = (props) => {
    let { category, apiKey, pageSize, setProgress } = props;

    const [loader, setLoader] = useState(true)
    const [parsedData, setParsedData] = useState([])
    const [totalResults, setTotalresults] = useState(0)
    const [page, setPage] = useState(1)
    

    const fetchNews = async () => {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pagesize=${pageSize}&language=en`, {
            headers:{
                origin: 'http://localhost'
            }
        })
        setProgress(30)
        setTotalresults(response.data.totalResults)
        setParsedData(response.data.articles)
        setProgress(70)
        setLoader(false)
        setProgress(100)
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        // Changing Tile

        document.title = `${capitalizeFirstLetter(props.category)} | ExpressNews`;
        setProgress(10)
        setProgress(20)
        fetchNews()
        // eslint-disable-next-line
    }, [])

    const fetchMore = async () => {
        const responseMore = await axios.get(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pagesize=${pageSize}&page=${page + 1}&language=en`, {
            headers: {
                origin: 'http://localhost'
            }
        })
        setPage(page + 1)
        setParsedData(parsedData.concat(responseMore.data.articles))

    }

    return (
        <>
            {loader ? <div className='text-center center'><HashLoader color= 'white' /></div> : null}

            <InfiniteScroll
                dataLength={parsedData.length}
                next={fetchMore}
                hasMore={parsedData.length !== totalResults}
                loader={<Loader/>}
            >
                <div className='container my-5 custom_margin'>
                    <div className="row">
                        {parsedData.map((curval, cindex) => (
                            <NewsItem url={curval.url} key={cindex} title={curval.title} source={curval.source.name} body={curval.description} img={curval.urlToImage} />
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News
