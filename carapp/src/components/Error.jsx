import { Link } from "react-router-dom";

function Error(){
    return(
        <div class="error">
            <div class="container">
                <h3 class="error-title">
                    всё пошло по пизде
                </h3>
                <p class="error-description">
                    ебать ты лох
                </p>
                <Link to="/" class="err-btn">
                    пошёл нахуй
                </Link >
            </div>
        </div>
    );
}
export default Error;