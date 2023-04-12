import tw from "twin.macro";

interface Props {
  dateText: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const styles = {
    label: tw`capitalize`,
    container: tw`relative w-20`,
    input: tw`block w-full p-1 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `,
}


export default function DateInput({ dateText, name, handleChange }: Props) {
    return (
        <div css={[styles.container]}>
            <label css={[styles.label]}>{name}</label>
            <input lang="en" value={dateText} name={name} type="date" onChange={handleChange} css={[styles.input]} placeholder="Search..." />
        </div>
    )
}