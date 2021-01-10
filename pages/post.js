import { withRouter } from "next/router";
import axios from "axios";

const Post = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{`Comments for post: ${props.id}`}</h1>
            {props.comments.map(comment =>{
                const {name, email, body} = comment;
                return (
                    <div>
                        <h3>{name}</h3>
                        <p>{email}</p>
                        <p>{body}</p>
                    </div>
                )
            })}
        </div>
      )   
}

Post.getInitialProps = async ({query}) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
    const {data} = res;
    return {...query, comments: data};
}
export default Post;