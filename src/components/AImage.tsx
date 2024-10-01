interface IImage {
    src: string,
    alt?: string,
    width?: string,
    className?: string,
}
export const AImage = ({src, alt, width, className} : IImage) => {
  return (
    <div className={`relative ${className}`}>
      <img className={`absolute p-16 blur-3xl rounded-2xl`} width={width} src={src} alt={alt} />
      <img className="relative rounded-3xl" width={width} src={src} alt={alt} />
    </div>
  );
};