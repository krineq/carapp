import NewsList from "./components/NewsList";

function NewsPage(){
    return(
        <section class="mobile-block">
            <div class="mobile-block__header is-red">
                новости
            </div>
            {<NewsList/>}
        </section>
    );
}
export default NewsPage;