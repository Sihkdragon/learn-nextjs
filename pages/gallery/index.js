import Header from "../../components/organism/Header";
import TopItems from "../../components/molecules/TopItems";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../../components/atom/Spinner";
const index = () => {
  const [imageURL, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataImage, setDataImage] = useState();
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((dataImage) => {
        setDataImage(dataImage);
        setTimeout(setLoading(false), 10000);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Spinner SpinnerCaption="Loading..." />;
      </div>
    );
  if (!dataImage)
    return (
      <p className="min-h-screen w-full flex justify-center items-center text-5xl text-rose-400">
        Failed to Fetch Data
      </p>
    );

  return (
    <div className="min-h-screen">
      <Header title="Gallery" />
      <TopItems bigTitleContent="Gallery" />

      {dataImage.slice(0, 200).map((image) => {
        return (
          <Image
            key={image.id}
            loader={ImageLoader(image.thumbnailUrl)}
            src={image.thumbnailUrl}
            width={150}
            height={150}
          />
        );
      })}
    </div>
  );
};

const ImageLoader = ({ src }) => {
  return src;
};
export default index;
