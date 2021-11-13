import Head from "next/head";
import Form from "../components/form";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <section>
        <Form />
      </section>
    </Layout>
  );
}
