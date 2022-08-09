import Link from "next/link"
import { useRouter } from "next/router"

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid"

const PaginationButtons = () => {
  const router = useRouter()

  const startIndex = Number(router.query.start) || 0
  return (
    <div className="flex max-w-screen-lg mb-10 mt-5 text-blue-700">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center  hover:underline cursor-pointer">
            <ChevronLeftIcon className="h-5" />
            <p>previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center hover:underline cursor-pointer">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons
