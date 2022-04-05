import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from 'axios';
import { propTypes } from 'react-bootstrap/esm/Image';
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');


    const handleSubmit = async () => {
        if (!title) {
            alert('Missing title')
            return;
        }
        if (!content) {
            alert('Missing content');
            return;
        }
        let data = {
            title: title,
            body: content,
            userId: 1
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog)
        }
    }
    return (
        <>
            <Form >
                <Form.Group className="mb-3">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Content:</Form.Label>
                    <Form.Control type="text" value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        submit
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default AddNewBlog;