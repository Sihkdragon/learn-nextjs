import { useRouter } from "next/router";

const index = ({ ButtonType }) => {
  const router = useRouter();
  return (
    <div
      className="btn-link h-8"
      onClick={() => {
        router.push("/test/spinner");
      }}
    >
      Go To Spinner Test...
    </div>
  );
};

export default index;
