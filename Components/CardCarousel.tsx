'use client';

import { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const cards = [
  { title: 'Card 1', color: 'bg-red-300' },
  { title: 'Card 2', color: 'bg-green-300' },
  { title: 'Card 3', color: 'bg-blue-300' },
  { title: 'Card 4', color: 'bg-yellow-300' },
  { title: 'Card 5', color: 'bg-purple-300' },
];

export default function CardCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  // Measure card width
  useEffect(() => {
    if (cardRef.current) {
      const observer = new ResizeObserver(() => {
        setCardWidth(cardRef.current!.offsetWidth + 16); // includes mx-2 margin
      });
      observer.observe(cardRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left:
        direction === 'left'
          ? scrollRef.current.scrollLeft - cardWidth
          : scrollRef.current.scrollLeft + cardWidth,
      behavior: 'smooth',
    });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.clientX;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="relative w-full px-4">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
      >
        <FaChevronLeft />
      </button>

      {/* Scroll Container with drag */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        className="flex overflow-x-auto no-scrollbar scroll-smooth scroll-pl-4 scroll-pr-4 snap-x snap-mandatory  "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            ref={index === 0 ? cardRef : null}
            className={`snap-start shrink-0 w-[80%] sm:w-[60%] lg:w-[40%] mx-2 rounded-2xl shadow-lg ${card.color} p-6`}
          >
            <h3 className="text-xl font-bold">{card.title}</h3>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
