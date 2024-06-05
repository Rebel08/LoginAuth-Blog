const RightComponents = ({ img, img1, title, tagline }) => {
  return (
    <div className="my-5 relative z-20">
      <img src={img1} alt="" className="rounded-lg" />
      <img src={img} alt="" className="absolute top-14 left-4" />
      <p className="absolute top-14 left-20 text-white font-medium text-lg">
        {title}
      </p>
      <p className="absolute top-20 left-20 text-white text-sm">{tagline}</p>
      <div className="absolute top-14 left-14 h-3 w-3 bg-green-500 rounded-full"></div>
    </div>
  );
};
export default RightComponents;
