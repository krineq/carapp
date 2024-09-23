import { useEffect, useState } from "react";
import BackIcon from "../assets/images/back.png";
import Link, { useParams } from "react-router-dom"
import axios from "axios";
import LoadingDetail from "../components/loadingDetail";
import Error from "../components/Error";
function PostDetailPage(){
    const[post,setNews]=useState({});
    const{id}=useParams();
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(false);
    useEffect(()=>{
        async function fetchNews() {
            try{
                setIsLoading(true);
                const response = await axios.get(`https://2e6bc67d3bc04540.mokky.dev/post/${id}`);
                setNews(response.data);
            }catch(error){
                setIsError(true);
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }
        fetchNews();
    },[id]);
    if (isError){
        return <Error/>;
    }
    return (       
        <section class="mobile-block">
            <Link to="/" class="back-button">
                <div class="container">
                    <img src={BackIcon}alt="back icon"/>
                    назад
                </div>
            </Link>
            {isLoading?(<loadingDetail/>):(
                            <div class="container">
                            <div class="post-detail-block">
                                <h3 class="post-card__title">
                                    {post.title}
                                </h3>
                                <span class="post-card__date">
                                    {post.date}
                                </span>
                                <p class="description">
                                    {post.description}
                                </p>
                                <img src={post.imgURL} alt={post.title}/>
                                <span class="author">
                                    Источник: 
                                    <strong class="orange-text">
                                        {post.author}
                                    </strong>
                                </span>
                                <button class="tag-button">
                                    {post.category}
                                </button>
                            </div>
                        </div>
            )}
            <div class="container">
                <div class="post-detail-block">
                    <h3 class="post-card__title">
                        {post.title}
                    </h3>
                    <span class="post-card__date">
                        {post.date}
                    </span>
                    <p class="description">
                        {post.description}
                    </p>
                    <img src={post.imgURL} alt={post.title}/>
                    <span class="author">
                        Источник: 
                        <strong class="orange-text">
                            {post.author}
                        </strong>
                    </span>
                    <button class="tag-button">
                        {post.category}
                    </button>
                </div>
            </div>
        </section>
    )
}
export default PostDetailPage;