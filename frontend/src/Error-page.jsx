import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouterError();
    console.error(error);
    return(
        <div>
            <h1>Oops!</h1>
            <p>Something went wrong</p>
            <small>[error.statusText || error.message]</small>
        </div>
    )
}

export default ErrorPage;