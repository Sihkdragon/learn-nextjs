import BigTitle from "../atom/BigTitle";
import Button from "../atom/Button";
const TopItems = ({ bigTitleContent, button, destination }) => {
  return (
    <div className="">
      <div className="flex w-full justify-between">
        <BigTitle>{bigTitleContent}</BigTitle>
        <Button />
      </div>
      <hr className="border rounded-full border-indigo-400 my-10" />
    </div>
  );
};

export default TopItems;
