import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import './CarrouselBanner.scss';

function CarrouselBanner() {
  const images = [
    'https://placehold.co/1600x600',
    'https://placehold.co/1600x600',
    'https://placehold.co/1600x600'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = useMemo(() => colorScheme === 'dark', [colorScheme]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showControls && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="carousel-control prev"
              onClick={handlePrev}
            >
              <ActionIcon
                style={{ background: dark ? 'black' : '#FBC403' }}
                variant="filled"
                size="xl"
                radius="xl"
              >
                <IconChevronLeft color={dark ? '#FBC403' : 'black'} size={24} />
              </ActionIcon>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="carousel-control next"
              onClick={handleNext}
            >
              <ActionIcon
                style={{ background: dark ? 'black' : '#FBC403' }}
                color="dark"
                variant="filled"
                size="xl"
                radius="xl">
                <IconChevronRight color={dark ? '#FBC403' : 'black'} size={24} />
              </ActionIcon>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default CarrouselBanner;
