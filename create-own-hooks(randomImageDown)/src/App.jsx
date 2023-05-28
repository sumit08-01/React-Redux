import { useEffect, useState } from "react";
import { ImageList } from "./component/ImageList/ImageList";
import s from "./App.module.css";
import { useScrollPosition } from "./hooks/useScrollPosition";
import axios from "axios";

export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();

  // pagination
  //1
  const [pageToFetch, setPageToFetch] = useState(1);
  //2
  async function fetchImagesPage(pageNumber) {
    setIsLoading(true);
    const { data } = await axios(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
    );
    //3
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  //4
  useEffect(() => {
    fetchImagesPage(pageToFetch);
  }, [pageToFetch]);

  //5
  function increasePage() {
    setPageToFetch(pageToFetch + 1);
  }

  //6
  useEffect(() => {
    if (isBottom) {
      increasePage();
    }
  }, [isBottom]);

  //7
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={s.root}>
      <h1>Random Image</h1>
      <h2>Download Open source images</h2>
      <ImageList imageList={imageList} />
      {isLoading && <div className="spinner-border" role="status" />}
    </div>
  );
}
