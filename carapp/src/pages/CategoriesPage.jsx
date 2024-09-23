import HomeIcon from "../assets/images/categories/home.png";
import Link from "react-router-dom"
import LoadingRow from "../components/LoadingRow";
import axios from "axios";
import Error from "../components/Error";
function CategoriesPage (){
    const[categories,setCategories]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(false);
    useEffect(() =>{
        async function fetchCategories() {
            try{
                setIsLoading(true);
                const resonse = await axios.get('https://2e6bc67d3bc04540.mokky.dev/category');
                setCategories(resonse.data);
            }catch(error){
                setIsError(true);
                console.log(error);
            }finally{
                setIsLoading(false)

            }
        }fetchCategories();
    },[]);
    if (isError){
        return <Error/>;
    }
    return(
        <section class="mobile-block">
            <div class="mobile-block__header is-red">
                категории
            </div>
            {isLoading ? (<LoadingRow/>):(
            <div class="container">
            <div class="category-row">
                <Link to="/" class="category-item">
                    <img src={HomeIcon} alt="home"class="category-item__png"/>
                    <span class="category-item__title">
                        овости
                    </span>
                </Link>
                {categories.map((category) =>(
                    <Link to={`/category/news/${category.id}`} class="category-item">
                        <img src={category.imgURL} alt={category.name}class="category-item__png"/>
                        <span class="category-item__title">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>    
            )}
            <div class="container">
                <div class="category-row">
                    <Link to="/" class="category-item">
                        <img src={HomeIcon} alt="home"class="category-item__png"/>
                        <span class="category-item__title">
                            новости
                        </span>
                    </Link>
                    <Link to="/category/posts" class="category-item">
                        <img src="" alt="rally"class="category-item__png"/>
                        <span class="category-item__title">
                            ралли
                        </span>
                    </Link>
                </div>
            </div>    
        </section>
    );
}
export default CategoriesPage;