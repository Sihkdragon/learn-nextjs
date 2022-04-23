import BigTitle from "../atom/BigTitle";

const TopItems = ({ bigTitleContent }) => {
  return (
    <>
      <BigTitle>{bigTitleContent}</BigTitle>

      <hr className="border rounded-full border-indigo-400 my-10" />
    </>
  );
};

export default TopItems;
