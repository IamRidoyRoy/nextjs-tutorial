import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function FirstPost() {
    return (
        <>

            <Head>
                <title>First post title for SEO</title>
            </Head>
            <h1>First Post</h1>
            {/* <Image src='/pages/posts/images/profile.jpg'></Image> */}
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}