import React from 'react'

const NewsItem = (props) => {
    let { title, body, img, url, source } = props;
    return (
        <>
            <div className="col-md-4" >
                <div className='my-4'>
                    <div className="card">
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                            {source}
                        </span>

                        <img src={!img ? 'https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg': img } className="card-img-top" alt="post_image" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">
                                {body}
                            </p>

                            <a href={url} target='_blank' rel="noreferrer">
                                <button type="button" className="btn btn-danger btn-floating mx-1">
                                    Read More
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem
