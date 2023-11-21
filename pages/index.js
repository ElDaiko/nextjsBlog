import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Last year student of Computer Engineering at La Salle University, highly motivated and enthusiastic, with a passion for teamwork and continuous learning. Looking for opportunities to contribute my technical knowledge, collaborate with my team and continue learning in a dynamic and innovative environment.

          My work experience related to my degree has been limited, but I have had the opportunity to work in different companies dedicated to customer service.

          I consider myself quite skilled in web development, I have a good knowledge in Java Script (Back-end / Front-end), relational and non-relational databases and a good foundation in C#, Python and Java.

          I am looking for new opportunities and ways to deepen my studies, I am open to all kinds of proposals and encouraged to continue in this training process, any questions or information you want to know do not hesitate to contact me.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
