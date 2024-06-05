const LeftComponents = ({ Icon, title, onClick }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };
  return (
    <div className="flex items-center px-8 py-3" onClick={handleClick}>
      <div className="flex items-center gap-4 cursor-pointer">
        <Icon className="h-6 w-6" />
        <span className="text-base font-medium">{title}</span>
      </div>
      <div>
        <Icon />
      </div>
    </div>
  );
};
export default LeftComponents;
