import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { ArrowUpIcon } from '@/components/Icons';

//import scss
import styles from './ScrollButton.module.scss';

const cx = classNames.bind(styles);

function ScrollButton() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowButton(scrollPosition >= 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.scrollY]);

  if (!showButton) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return null;
  };

  return (
    <div className={cx('wrapper')} onClick={scrollToTop}>
      <ArrowUpIcon />
    </div>
  );
}

export default ScrollButton;
