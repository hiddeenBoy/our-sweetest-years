
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import LoveLetter from "../components/LoveLetter";
import MemoryJar from "../components/MemoryJar";
import MusicPlayer from "../components/MusicPlayer";
import Footer from "../components/Footer";

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Gallery />
        <LoveLetter />
        <MemoryJar />
      </main>
      <MusicPlayer />
      <Footer />
    </div>
  );
};

export default Index;
