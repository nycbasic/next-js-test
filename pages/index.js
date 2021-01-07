import axios from "axios";

const Index = ({posts}) => {
    console.log("HOME")
    return (
        <div>
            <h1>OUR INDEX PAGE</h1>
            <ul>
               {posts.map(post => {
                   return <li key={post.id}>{post.title}</li>
                })} 
            </ul>
            
        </div>
    )
}

Index.getInitialProps = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const {data} = res;
    return {
        posts: data
    }
}

export default Index;