"use client"

import AboutProject from "@/components/Home/AboutProject";
import AllAvailableCoursesSection from "@/components/Home/AllAvailableCoursesSection";
import CoursesInProgressSection from "@/components/Home/CourseInProgressionSection";
import { HomeHeader } from "@/components/Home/GradeCurricular";
import { useState, useEffect } from "react"

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.log(error);
        setStoredValue(initialValue);
      }
    }
  }, []);

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue as T) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue ?? initialValue, setValue];
}


export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HomeHeader />

      <CoursesInProgressSection />

      <AllAvailableCoursesSection />

      <AboutProject />

      <footer className="text-center text-sm text-muted-foreground mt-12">
        <p>
          Este site está sendo criado por <strong>@patinhotech, vulgo Marlon Jerold</strong>
        </p>
      </footer>
    </div>
  )
}

