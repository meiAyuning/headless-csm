import Link from "next/link";

const NotAuthenticated = () => {
    return (
        <div className="container mt-4">
            <h1>Not Authenticated</h1>

            <Link href={'/'}><a>
                <button className="btn btn-secondary">Back</button></a></Link>
        </div>
    );
}

export default NotAuthenticated;