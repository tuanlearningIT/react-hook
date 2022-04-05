import { Link, useNavigate } from "react-router-dom";
import useFetch from "../customize/useFetch";
import './Blog.scss';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewBlog from "./AddNewBlog";
const Blog = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlogs, isLoadingData, isError }// useFetch('https://api.covid19api.com/country/VietNam?from=2022-02-12T00:00:00Z&to=2022-03-11T00:00:00Z')
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
    useEffect(() => {
        let data = []
        if (dataBlogs && dataBlogs.length > 0) {
            data = dataBlogs.slice(0, 9)
            setNewData(data)
        }
    }, [dataBlogs])

    // let history = useNavigate()
    // const handleAddnew = () => {
    //     history('/blog/add-new-blog')
    // }
    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog)
        setShow(false)
        setNewData(data)
    }
    const handleDeleteBlog = (id) => {
        let data = []

        data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }
    return (
        <>
            <>
                <Button variant="primary" onClick={handleShow} className='m-2'>
                    Add new  Blogs
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new blogss</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog
                            handleAddNew={handleAddNew}
                        />
                    </Modal.Body>

                </Modal>
            </>
            <div className="container pb-5">

                {isLoadingData === false &&
                    newData && newData.length > 0 &&
                    newData.map(item => {
                        return (
                            <div className="blog-container" key={item.id}>
                                <div className="title">{item.title}</div>
                                <div className="content">{item.body}</div>
                                <button>
                                    <Link to={`/blog/${item.id}`}>view detail</Link>
                                </button>
                                <button className="btn btn-primary" onClick={() => handleDeleteBlog(item.id)}>
                                    Delete
                                </button>
                            </div>
                        )
                    })
                }
                {
                    isLoadingData === true &&
                    <div style={{ 'height': '100vh', 'width': '85%', 'textAlign': 'center !important' }}>
                        LoadingData...
                    </div>
                }

            </div>

        </>
    )
}

export default Blog;