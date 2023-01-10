import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

export default function Protected() {
    return(
        <div className="container">
            <Head>
                <title>Strapi - Next - NextAuth</title>
            </Head>
            <h1>Protected Page</h1>
            <Link href="/">
                <button>Back to home page</button>
            </Link>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    console.log(session);
    // Check if session exist or not, if not, redirect
    if (session == null) {
        return {
            redirect: {
                destination: 'auth/not-authenticated',
                permanent: true,
            },
        };
    }
    return {
        props: {},
    };
};