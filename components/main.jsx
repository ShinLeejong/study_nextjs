export default function Main({ Component, pageProps }) {
    return (
        <>
            <main>
                <Component {...pageProps} />
            </main>
            <style jsx>
                {`
                    main {
                        padding-left: 1rem;
                        padding-right: 1rem;
                        background: yellow;
                    }
                `}
            </style>
        </>
    )
}