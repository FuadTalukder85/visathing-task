const ButtonPrimary = ({ children }) => {
  return (
    <button className="py-3 md:py-4 px-3 md:px-8 bg-primary border border-primary font-medium text-[16px] rounded-[42px] text-white hover:border hover:border-primary hover:bg-white hover:text-black transition-all duration-500">
      {children}
    </button>
  );
};

export default ButtonPrimary;
