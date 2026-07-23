"use client";

export function useOpportunityForm() {

  const scrollToSection = (id: string) => {

    const element = document.getElementById(id);

if (!element) return;

const navbarHeight = 64;
const spacing = 32;

const y =
  element.getBoundingClientRect().top +
  window.scrollY -
  navbarHeight -
  spacing;

window.scrollTo({
  top: y,
  behavior: "smooth",
});

  };

  return {

    scrollToSection,

  };

}