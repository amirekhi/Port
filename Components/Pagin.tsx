"use client";

import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

type PaginProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  itemsPerPage: number;
};

const Pagin: React.FC<PaginProps> = ({ page, setPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Local state to trigger arrow animation
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const handleClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleRightPagination = () => {
    if (page < totalPages) {
      setRightClicked(true);
      setTimeout(() => {
        setPage(prev => prev + 1);
        setRightClicked(false);
      }, 300); // After animation
    }
  };

  const handleLeftPagination = () => {
    if (page > 1) {
      setLeftClicked(true);
      setTimeout(() => {
        setPage(prev => prev - 1);
        setLeftClicked(false);
      }, 300); // After animation
    }
  };

  return (
    <div className="mx-auto w-fit my-20 flex gap-4 justify-center items-center">
      {page !== 1 && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={leftClicked ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer group"
          onClick={handleLeftPagination}
        >
          <HiChevronLeft
            color="pink"
            className="group-hover:scale-125 transition duration-150 ease-in-out"
            size={24}
          />
        </motion.button>
      )}

      {Array.from({ length: totalPages }).map((_, idx) => {
        const pageNumber = idx + 1;
        const isCurrentPage = pageNumber === page;

        return (
          <motion.button
            key={pageNumber}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={isCurrentPage ? {
              x: [0, -3, 3, -3, 3, 0],
              transition: {
                repeat: Infinity,
                repeatDelay: 5,
                duration: 0.6,
                ease: "easeInOut",
              },
            } : {}}
            className={`w-[32px] h-[32px] text-sm ${
              isCurrentPage ? 'bg-purple-500 shadow-md shadow-purple-400' : 'bg-pink-200 hover:bg-purple-500'
            } rounded-md flex justify-center items-center cursor-pointer`}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </motion.button>
        );
      })}

      {page !== totalPages && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={rightClicked ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer group"
          onClick={handleRightPagination}
        >
          <HiChevronRight
            color="pink"
            className="group-hover:scale-125 transition duration-150 ease-in-out"
            size={24}
          />
        </motion.button>
      )}
    </div>
  );
};

export default Pagin;
