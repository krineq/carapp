import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPost from "../components/LoadingPost";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import Error from "../components/Error";
function PostsByCategoryPage(){
    const{id}=useParams()
    const[category,setIsCategory]=useState({});
    const [news,setNews]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(false);
    useEffect(() =>{
        async function fetchCategory() {
            try{
                const resonse = await axios.get(`https://2e6bc67d3bc04540.mokky.dev/category/${id}`);
                setCategory(resonse.data);
            }catch(error){
                setIsError(true);
                console.log(error);
            }
        }
        async function fetchNews() {
            try{
                setIsLoading(true);
                const resonse = await axios.get('https://2e6bc67d3bc04540.mokky.dev/post');
                setNews(resonse.data);
            }catch(error){
                console.log(error);
            }finally{
                setIsLoading(false)

            }
        }
        fetchNews();    
        fetchCategory();
    },[id]); 
    if (isError){
        return <Error/>;
    }
    return(        
        <section class="mobile-block">
            <div class="mobile-block__header is-red">
                {category.name}
            </div>
            <div class="all-news-block">
            {isLoading ? (<LoadingPost/>):(
                <>
                    {news.map((post) =>{
                        return post.category === category.name ?(
                            <NewsCard key={post.id}post={post}/>
                        ) : null
                    })}
                </>
            )}
           </div>
        </section>
);
}
export default PostsByCategoryPage;