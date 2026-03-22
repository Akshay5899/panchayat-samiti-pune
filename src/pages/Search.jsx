import React from "react";
import { useLocation } from "react-router-dom";

// Same data (English + Marathi)
const searchData = [
  "Pune Panchayat",
  "Government Projects",
  "Public Notices",
  "Office Directory",
  "Employee List",
  "Citizen Services",
  "जिल्हा परिषद सदस्य संख्या – 75",
  "सार्वजनिक सूचना",
  "मंत्रालयीन योजना",
];

const normalizeString = (str) =>
  str
    .normalize("NFC")
    .replace(/[-–—]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";

  const results = searchData.filter((item) =>
    normalizeString(item).includes(normalizeString(query))
  );

  return (
    <div className="container mt-4">
      <h2>Search Results for: "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;