import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { navLinks } from "../Data/navlinks";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const offset = -70;
    const element = document.getElementById(id);
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offSetPosition = elementPosition + offset;

    window.scrollTo({
      top: offSetPosition,
      behavior: "smooth",
    });
  };

  const linkVarient = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed z-10 w-full border-b pt-2 border-orange-50/10 bg-yellow-100">
        <div className="container mx-auto px-4">
          <div className="flex h-16  items-center justify-between">
            <div className="flex items-center">
              <motion.a
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                href="/"
              >
                <img src={logo} className="pb-2" alt="QuickVerse" width={75} />
              </motion.a>
            </div>
            <motion.button
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-[#103e60] text-xl"
            >
              <RiMenu3Line />
            </motion.button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-20 flex flex-col space-y-8 bg-yellow-100 px-20 pt-32 text-5xl font-black uppercase text-[#103e60] lg:text-6xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="absolute right-4 top-4 rounded-full bg-emerald-950 p-2 text-orange-50 lg:right-36"
            >
              <RiCloseLine />
            </button>
            {navLinks.map((link, index) => (
              <motion.a
                variants={linkVarient}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="transition-colors duration-500 items-center justify-center flex hover:text-[#cc0000]"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
