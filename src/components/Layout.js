import Head from "next/head";
import Package from "../../package.json";
import Script from "next/script";

function Layout({ children }) {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>fontawesome 2 png</title>

                <meta name="author" content={Package.author} />
                <meta name="description" content={Package.description} />
                <meta name="keywords" content={Package.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="white" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="white" />

                <meta content="default" name="apple-mobile-web-app-status-bar-style" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="white" />
  
            </Head>

            <main>
                <div className="container mt-2">
                    {children}
                </div>
            </main>

            <Script src="https://code.jquery.com/jquery-3.6.0.min.js" crossOrigin="anonymous"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.4/FileSaver.min.js" />
            
            <Script src="./js/script.js" />
        </>
    );
}

export default Layout;