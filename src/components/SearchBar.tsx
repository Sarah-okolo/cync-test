import { useRef, useState } from "react";
import { Search, X } from "lucide-react"

interface SearchBarProps {
  style?: string;
  placeholder?: string;
  iconColor?: string;
}

function SearchBar (props: SearchBarProps) {
  const { style, placeholder, iconColor } = props;
  const searchBoxRef = useRef<HTMLInputElement | null>(null);
  const clearIconRef = useRef<SVGSVGElement>(null);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearch = (): void => {
    setSearchInput(searchBoxRef.current?.value || '');
  }

  // Show the clear icon when the search input field is not empty
  const handleInputState = (): void => {
    if (searchBoxRef.current?.value !== '') {
      if (clearIconRef.current) {
        clearIconRef.current.style.visibility = "visible";
      }
    }
    else {
      if (clearIconRef.current) {
      clearIconRef.current.style.visibility="hidden";
      }
    }
  }

  // Clear the search input field and hide the clear icon
  const clearIconFunc = (): void => {
    if (searchBoxRef.current) {
    searchBoxRef.current.value = ''; 
    }
    if (clearIconRef.current) {
    clearIconRef.current.style.visibility = "hidden";
    }
    setSearchInput('');
    console.log(searchInput);
  }


  return (
    <>
      <div className={`flex gap-3 items-center border border-input rounded-2xl py-4 px-5 ${style}`}>
        <Search color={iconColor} size='25'/>
        <input 
          type="text"
          name="search-box"
          placeholder={placeholder}
          className="w-full focus:outline-none bg-transparent"
          ref={searchBoxRef}
          onInput={(): void => {
            handleInputState(); 
            handleSearch()
          }}
        />
        <X color={iconColor} ref={clearIconRef} onClick={clearIconFunc} size='25' className="invisible"/>
      </div>
    </>
  )
}

export default SearchBar