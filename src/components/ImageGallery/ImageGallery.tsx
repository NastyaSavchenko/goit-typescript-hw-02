import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
}

interface ImageGalleryProps {
  readonly images: Image[];
  readonly setIsModalOpen: (isOpen: boolean) => void;
  readonly setModalImg: (url: string) => void;
}

function ImageGallery({
  images,
  setIsModalOpen,
  setModalImg,
}: ImageGalleryProps): JSX.Element {
  const handleImageClick = (fullImg: string) => {
    setModalImg(fullImg);
    setIsModalOpen(true);
  };

  return (
    <ul className={s.imgList}>
      {images.map((image) => {
        const {
          id,
          alt_description,
          urls: { small, full },
        } = image;
        return (
          <li key={id}>
            <ImageCard
              url={small}
              alt={alt_description}
              full={full}
              handleImageClick={handleImageClick}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
