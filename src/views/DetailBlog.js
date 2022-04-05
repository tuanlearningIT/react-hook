import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/useFetch";

const DetailBlog = () => {
    let { id } = useParams()
    let history = useNavigate()
    const handleBack = () => {
        history('/blog')
    }
    const { data: dataBlogDetail, isLoadingData, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    return (
        <>
            <div style={{ 'height': '100vh', 'paddingTop': '200px' }}>
                <div style={{ 'fontSize': '50px' }}>hello datail bolgs with id = {id}</div>
                <div>
                    <button onClick={() => handleBack()} style={{ 'fontSize': '50px' }} to="/blog" >back</button>
                </div>
                <div className="blog-detail">
                    {dataBlogDetail &&
                        <>

                            <div className="title">
                                {isLoadingData === true ? 'LoadingData...' : dataBlogDetail.title}
                            </div>
                            <div className="content">
                                {dataBlogDetail.body}
                            </div>
                        </>

                    }
                </div>



            </div>

        </>
    )
}

export default DetailBlog;