import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>OTA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="On Top Ads is currently under construction." />
        <p className="description">
          Estimated completion during<code>2024</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
