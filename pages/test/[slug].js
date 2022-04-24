import { useRouter } from "next/router";
import Spinner from "../../components/atom/Spinner";
import TopItems from "../../components/molecules/TopItems";
import Header from "../../components/organism/Header";

const Test = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Header title={`Testing ${slug}`} />
      <TopItems bigTitleContent={`This is ${slug}`} />
    </div>
  );
};

export default Test;
