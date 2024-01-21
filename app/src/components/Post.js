import { Link } from "react-router-dom";

function Post(props) {

    function VisibleContent(content) {
        const suffix = content.length > 250 ? "..." : ""
        return content.slice(0, 250) + suffix
    }

    return (
        <div>
            <div className="shadow-sm p-3 mb-1 bg-body container border rounded">
                <h2 class="display-6"><Link class="link-secondary" to={`/posts/${props.id}`}>{props.title}</Link></h2>
                <small class="text-muted">{props.date}</small>
                <p>{VisibleContent(props.content)}</p>
            </div>
            <br></br>
        </div>
    );
}

export default Post;