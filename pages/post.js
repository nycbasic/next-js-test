const Post = () => {
    return (
        <h1>POST HAS SOMETHING SOMETHING</h1>
    )
}

Post.getInitialProps = async ({query}) => {
    console.log(query)
    return query;
}
export default Post;