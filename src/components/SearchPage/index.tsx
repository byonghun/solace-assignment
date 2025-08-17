"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { TAdvocate } from "@/types/advocates";
import AdvocatesTable from "@/components/AdvocatesTable";

const SearchPage = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [advocates, setAdvocates] = useState<TAdvocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<TAdvocate[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const showClearBtn = searchQuery.length >= 1;

  useEffect(() => {
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchQuery(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (value.length <= 1) {
      return setFilteredAdvocates(advocates);
    }

    timeoutRef.current = setTimeout(() => {
      const filteredAdvocates = advocates.filter((advocate) => {
        const val = value.toLowerCase();
        const fullName = `${advocate.firstName} ${advocate.lastName}`;

        return (
          fullName.toLowerCase().includes(val) ||
          advocate.city.toLowerCase().includes(val) ||
          advocate.degree.toLowerCase().includes(value) ||
          advocate.specialties.some((s) => s.toLowerCase().includes(val)) ||
          String(advocate.yearsOfExperience).toLowerCase().includes(val)
        );
      });

      setFilteredAdvocates(filteredAdvocates);
    }, 500);
  };

  const handleClear = () => {
    setSearchQuery("");
    setFilteredAdvocates(advocates);
  };

  return (
    <div className="p-6">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <input
            type="text"
            name="advocates-search-input"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search for advocates"
            className={
              "w-full rounded-md py-1 pr-10 pl-3 border border-gray-300 dark:border-gray-700"
            }
          />
          {showClearBtn && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full hover:text-black hover:bg-gray-100"
              aria-label="Clear Input"
            >
              x
            </button>
          )}
        </div>
      </div>
      <AdvocatesTable advocates={filteredAdvocates} searchQuery={searchQuery} />
    </div>
  );
}

export default SearchPage