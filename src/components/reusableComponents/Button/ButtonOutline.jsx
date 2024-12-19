const ButtonOutline = ({ children }) => {
  return (
    <button className="py-3 md:py-4 px-3 md:px-8 border border-primary font-medium text-[16px] rounded-[42px] text-black hover:bg-primary hover:text-white transition-all duration-500">
      {children}
    </button>
  );
};

export default ButtonOutline;
