import { useRouter } from "next/router";

const index = ({ ButtonType, Destination }) => {
  const router = useRouter();
  return (
    <div
      className="btn-link h-8 capitalize"
      onClick={() => {
        router.push(`/test/${Destination}`);
      }}
    >
      Go To {Destination} Test
    </div>
  );
};

export default index;
