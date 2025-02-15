import { Audio } from "react-loader-spinner";
import s from "./Loader.module.css";

function Loader(): JSX.Element {
  return (
    <div className={s.loaderBox}>
      <Audio
        height={80}
        width={80}
        color="blue"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
