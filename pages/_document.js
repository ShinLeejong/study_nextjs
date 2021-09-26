import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _document extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="seek for github infos"/>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};