interface IImage {
  src: string
  alt?: string
  width?: string
  className?: string
}

export const AImage = ({ src, alt, width, className }: IImage) => {
  return (
    <div className={`relative ${className ?? ''}`}>
      <img
        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30 scale-90"
        width={width}
        src={src}
        alt=""
        aria-hidden
      />
      <img
        className="relative w-full h-auto object-cover rounded-2xl"
        width={width}
        src={src}
        alt={alt ?? ''}
      />
    </div>
  )
}
