import React, { useEffect, useState } from 'react'

const Home = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        document.title = 'Home | ExpressNews'

        if (!window.localStorage.getItem('name')) {
            let userName = prompt("Please, Enter Your Name");
            setName(userName)
            window.localStorage.setItem('name', userName)
        } else {
            setName(window.localStorage.getItem('name'))
        }
    }, [])
    return (
        <>
            <div className="container mt- my-5 text-white">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">Hello, {name}</h1>

                        <h1 className="display-4 fw-bold lh-1">Always Stay Up-to-Date with Current Events</h1>
                        <p className="lead">Go Beyond Borders. Blazingly Fast. Now the power of knowledge on your screens. Sharp News for Sharp People. Most Accurate News from Sources.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//codrtanish.github.io/expressNews/" target='_blank' rel="noreferrer">
                                <img src="https://img.icons8.com/color/48/000000/facebook.png" alt='social_share' /></a>

                            <a href="https://twitter.com/intent/tweet?text=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//codrtanish.github.io/expressNews/" target='_blank' rel="noreferrer">
                                <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt='social_share' /></a>

                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//twitter.com/intent/tweet?text=https%253A//www.facebook.com/sharer/sharer.php?u=https%25253A//codrtanish.github.io/expressNews/&title=expressNews&summary=&source=" target='_blank' rel="noreferrer">
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt='social_share' /></a>

                            <a href="https://github.com/codrtanish" target='_blank' rel="noreferrer"><img src="https://img.icons8.com/bubbles/50/000000/github.png" alt='social_share' /></a>


                        </div>
                        <p className="lead">Coded With <span className='redheart'>&#10084;</span> By Tanish Ghosh</p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" width="720" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
