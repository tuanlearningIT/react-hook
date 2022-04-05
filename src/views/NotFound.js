import { useNavigate } from "react-router-dom";

const NotFound = () => {
    let history = useNavigate()
    const handlebtn = () => {
        history('/')
    }
    return (
        <>
            <h4>This Page Isn't Available</h4>
            <div>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</div>
            <button className="btn btn-primary" onClick={handlebtn}>Go to back home</button>
        </>
    )
}

export default NotFound;