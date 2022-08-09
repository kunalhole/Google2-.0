import Head from "next/head"
import Header from "../components/Header"
import { API_KEY, CONTEXT_KEY } from "../Keys"
import Response from "../Response"

import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"
const Search = ({ result }) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{router.query.term}-Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SearchResults result={result} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyQata = false
  const startIndex = context.query.start || "0"
  const data = useDummyQata
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json())

  return {
    props: {
      result: data,
    },
  }
}
