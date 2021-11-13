import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Star Trek Ipsum";

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <div id="stars1" className="stars"></div>
      <div id="stars2" className="stars"></div>
      <div id="stars3" className="stars"></div>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Lorem ipsum generator with Star Trek terminology"
        />
      </Head>
      <header>
        <h1>{siteTitle}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
