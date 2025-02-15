import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  readonly setPage: React.Dispatch<React.SetStateAction<number>>;
}

function LoadMoreBtn({ setPage }: LoadMoreBtnProps) {
  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={s.box}>
      <button
        type="button"
        onClick={handleLoadMoreClick}
        className={s.loadMoreBtn}
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
