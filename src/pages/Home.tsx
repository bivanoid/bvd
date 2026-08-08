import { useState, useEffect } from 'react';
import Footer from "../components/HomeLayouts/Footer";
import Navbar from "../components/CommontLayouts/Navbar";
import Content from "../components/HomeLayouts/Content";
import Dashboard from "../components/HomeLayouts/Dashboard";

export default function Home() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 200) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar ttl={isAtBottom ? "The end" : "keep scrolling"} backTo="/" />
      <main>
        <Dashboard />
        <Content />
      </main>
      <Footer />
    </div>
  );
}