const Button = ({ name, bg, color, onClick }) => {
  return (
    <button
      type="button"
      className={`text-${color} bg-${bg}-500 font-medium rounded-lg text-sm px-3 py-2 text-center outline outline-2 outline-${bg}-500 mr-3`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
