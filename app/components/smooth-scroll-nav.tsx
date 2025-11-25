"use client";

import { useCallback } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function SmoothScrollLink({ href, children, className, activeClassName, isActive, onClick }: NavLinkProps) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onClick) onClick();

    // Only handle hash links
    if (!href.startsWith("#")) {
      window.location.href = href;
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  }, [href, onClick]);

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </a>
  );
}
