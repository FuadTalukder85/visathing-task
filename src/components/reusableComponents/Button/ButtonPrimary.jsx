const ButtonPrimary = ({ children }) => {
  return (
    <button className="py-4 px-8 bg-primary font-medium tracking-wider text-[16px] rounded-[42px] text-white">
      {children}
    </button>
  );
};

export default ButtonPrimary;
