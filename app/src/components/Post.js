import { Link } from "react-router-dom";

function Post(props) {

    function VisibleContent(content) {
        const suffix = content.length > 100 ? "..." : ""
        return content.slice(0, 100) + suffix
    }

    return (
        <div>
            <div className="container border">
                <h2><Link to={`/posts/${props.id}`}>{props.title}</Link></h2>
                <time>{props.date}</time>
                <p>{VisibleContent(props.content)}</p>
            </div>
            <br></br>
        </div>
    );
}

export default Post;