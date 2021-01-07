import axios from "axios";
import Link from "next/link";

const Index = ({posts}) => {
    return (
        <div>
            <h1>OUR INDEX PAGE</h1>
            <ul>
               {posts.map(post => {
                   return <li key={post.id}><Link href={`/post?id=${post.id}`}>{post.title}</Link></li>
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