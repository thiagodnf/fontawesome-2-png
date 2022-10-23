import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-select/dist/css/bootstrap-select.min.css";

import "../../public/css/style.scss";

import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}