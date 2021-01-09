import { withRouter } from "next/router";

const Post = (props) => {
    console.log(props);
    return (
        <h1>{`You are looking at post: ${props.router.query.id}`}</h1>
    )
}

// Post.getInitialProps = async ({query}) => {
//     console.log(query)
//     return query;
// }
export default withRouter(Post);