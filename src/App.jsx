import { Header } from "./components/Header";
import { Search } from "./components/Search";

export function App() {
  return (
    <div className="bg-almost-white h-svh dark:bg-almost-black px-6 py-8">
      <Header />
      <Search />
    </div>
  )
}