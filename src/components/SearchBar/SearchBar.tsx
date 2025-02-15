import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  readonly handleSearch: (query: string) => void;
}

function SearchBar({ handleSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !inputValue
      ? toast.error("Oops! It seems like you forgot to type. 🫤")
      : handleSearch(inputValue);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.trim();
    setInputValue(searchQuery);
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChangeInput}
          value={inputValue}
        />
        <button type="submit" className={s.searchBtn}>
          <CiSearch className={s.icon} />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
