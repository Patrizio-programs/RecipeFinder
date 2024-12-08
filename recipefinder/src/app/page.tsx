"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${searchTerm}`);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Recipe Finder</h1>
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for recipes"
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

