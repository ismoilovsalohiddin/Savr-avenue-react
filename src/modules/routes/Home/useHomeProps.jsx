const useHomeProps = () => {
  const handleFooterArrowClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNextArrowClick = () => {
    window.scrollTo({
      left: 300,
      behavior: 'smooth',
    });
  };

  return {
    handleFooterArrowClick,
    handleNextArrowClick,
  };
};

export default useHomeProps;
