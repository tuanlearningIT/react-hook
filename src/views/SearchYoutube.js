import { useEffect, useState } from "react";
import './SearchYoutube.scss';
import axios from "axios";
import moment from "moment";
const SearchYoutube = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('')

    useEffect(() => {

    }, []);
    const handleSearchYoutube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                "part": "snippet",
                "maxResults": "20",
                "key": 'AIzaSyDxIN-Tiym7vE4QgG44gX8EUwmZlaARPz4',
                "type": "video",
                "q": query
            }
        })
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {

                raw.map(item => {
                    let obj = {};
                    obj.id = item.id.videoId;
                    obj.title = item.snippet.title;
                    obj.createdAt = item.snippet.publishedAt;
                    obj.author = item.snippet.channelTitle;
                    obj.description = item.snippet.description;

                    result.push(obj)
                })

            }
            setVideos(result)
        }
        console.log('>>>', res)
    }
    return (
        <>
            <div className="youtube-container">
                <div className="container">
                    <div style={{ width: '40%', marginLeft: '30%' }} className="youtube-search mt-5">
                        <div className="input-group">
                            <input
                                onChange={(e) => setQuery(e.target.value)}
                                type="text" className="form-control" placeholder="Search" />
                            <button className="btn btn-secondary" onClick={() => handleSearchYoutube()}>search</button>

                        </div>
                    </div>
                </div>
                {
                    videos && videos.length > 0 &&
                    videos.map(item => {
                        return (
                            <div className="yt-body" key={item.id}>
                                <div className="yt-left">
                                    <iframe className="iframe"
                                        src={`https://www.youtube.com/embed/${item.id}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className="yt-right">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="created-at">
                                        Created At : {moment().format('DD-MM-YYY HH:mm:ss A')}
                                    </div>
                                    <div className="author">
                                        Author: {item.author}
                                    </div>
                                    <div className="description">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }


            </div>

        </>
    )
}

export default SearchYoutube;