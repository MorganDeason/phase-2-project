import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

export default function Error() {

    const error = useRouteError();

    console.log(error);

    return (
        <div>
            <h1>Yikes!</h1>
            <p>Something went wrong.</p>
            <p><code>{error.status}: {error.statusText}</code></p>
            <Link href="/">🔙 take me home</Link>
            <footer>&copy; 2023 Morgan Deason</footer>
        </div>
    )
}