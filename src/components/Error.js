import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h4>Oops!</h4>
            <h4>Some error has ocurered!</h4>
            <h4>{err.status}: {err.statusText}</h4>
        </div>
    )
}

export default Error;