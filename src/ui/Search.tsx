import tw from "twin.macro";

interface Props {
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const styles = {
    container: tw`relative w-34`,
    containerIcon: tw`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none`,
    input: tw`block w-full p-1 pl-8 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
    icon: tw`w-3 h-3 text-gray-500 dark:text-gray-400`,
}


export default function Search({ search, handleChange }: Props) {
    return (
        <div css={[styles.container]}>
            <div css={[styles.containerIcon]}>
                <svg css={[styles.icon]} aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input value={search} name="search" onChange={handleChange} css={[styles.input]} placeholder="Search..." />
        </div>
    )
}