import { useEffect, useState, useRef } from 'react';

/**
 * ============================================
 * SCROLL MANAGEMENT HOOKS
 * ============================================
 * 
 * 1. useScrollSpy - Track active section khi scroll
 * 2. useScrollVisibility - Ẩn/hiện component khi scroll đến section
 * 
 */

// Hook 1: Track section nào đang active
export const useScrollSpy = (sectionIds, offset = 150) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

/**
 * Hook 2: Ẩn/hiện component khi scroll đến section
 * 
 * CÁCH DÙNG:
 * const isVisible = useScrollVisibility('about', { threshold: 0.2 });
 * 
 * <div className={`scroll-fade ${isVisible ? 'scroll-fade-visible' : ''}`}>
 *   Content sẽ ẩn/hiện khi scroll
 * </div>
 * 
 * OPTIONS:
 * - threshold: 0-1, phần trăm section hiển thị để trigger (default: 0.1)
 * - rootMargin: Margin trigger trước/sau (default: '0px')
 * 
 */
export const useScrollVisibility = (sectionId, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Tạo Intersection Observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Khi section vào viewport → visible = true
        // Khi section ra khỏi viewport → visible = false
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Bắt đầu observe
    observerRef.current.observe(section);

    // Cleanup
    return () => {
      if (observerRef.current && section) {
        observerRef.current.unobserve(section);
      }
    };
  }, [sectionId, threshold, rootMargin]);

  return isVisible;
};

