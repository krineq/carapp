import NewsCard from "./components/NewsCard";
import {useEffect, useState} from "react";
import axios from "axios";
import LoadingPost from "./LoadingPost";
import Error from "./Error";
function NewsList(){
    const [news,setNews]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(false);
    useEffect(() =>{
        async function fetchNews() {
            try{
                setIsLoading(true);
                const resonse = await axios.get('https://2e6bc67d3bc04540.mokky.dev/post');
                setNews(resonse.data);
            }catch(error){
                setIsError(true);
                console.log(error);
            }finally{
                setIsLoading(false)

            }
        }
        fetchNews();    
    },[]); 
    if(isError){
        return <Error/>;
    }
    return(
        <div class="all-news-block">
            {isLoading ? (<LoadingPost/>):(
                <>
                    {news.map((post) =>(
                        <NewsCard key={post.id} post={post}/>
                    ))}
                </>
            )}
        </div>
    );
}
export default NewsList;