import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()

    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex  items-center p-6 w-full">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt="image"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow border border-gray-200 shadow-lg rounded-full px-6 py-3 ml-10 mr-5 max-w-3xl items-center sm:mr-3">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 text-blue-500 pl-4   hidden sm:inline-flex" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url="https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZlbmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="ml-auto"
        />
      </div>
      <HeaderOptions />
    </header>
  )
}

export default Header
