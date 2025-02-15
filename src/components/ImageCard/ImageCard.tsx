import s from "./ImageCard.module.css";

interface ImageCardProps {
  readonly url: string;
  readonly alt: string;
  readonly full: string;
  readonly handleImageClick: (url: string) => void;
}

function ImageCard({
  url,
  alt,
  handleImageClick,
  full,
}: ImageCardProps): JSX.Element {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleImageClick(full);
    }
  };

  return (
    <div className={s.imgBox}>
      <img
        src={url}
        alt={alt}
        onClick={() => handleImageClick(full)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default ImageCard;
