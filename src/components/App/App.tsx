import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { getImages } from "../../api";
import toast from "react-hot-toast";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
}

function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    if (totalPage === page) {
      toast("You've reached the end!", {
        icon: "🥳",
      });
    }
  }, [totalPage, page]);

  useEffect(() => {
    if (!searchQuery) return;

    const getApi = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await getImages<{ results: Image[]; total_pages: number }>(
          searchQuery,
          page
        );

        setImages((prev) => [...prev, ...res.results]);
        setTotalPage(res.total_pages);

        if (res.total_pages === 0)
          toast.error(
            `🥺 Oops! We couldn't find any results for ${searchQuery}`
          );
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getApi();
  }, [searchQuery, page]);

  const handleSearch = (query: string) => {
    setImages([]);
    setSearchQuery(query);
    setPage(1);
  };

  const closeModal = () => {
    setModalImg(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <ImageGallery
        images={images}
        setModalImg={setModalImg}
        setIsModalOpen={setIsModalOpen}
      />
      {isLoading && <Loader />}
      {totalPage > page && <LoadMoreBtn setPage={setPage} />}
      {isError && <ErrorMessage />}
      {
        <ImageModal
          image={modalImg ?? ""}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      }
    </>
  );
}

export default App;
