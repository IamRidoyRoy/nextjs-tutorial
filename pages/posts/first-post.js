import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/Layout';

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First post title for SEO</title>
                </Head>

                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
                <h1>First Post</h1>
                {/* <Image src='/pages/posts/images/profile.jpg'></Image> */}
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </Layout>
        </>
    );
}