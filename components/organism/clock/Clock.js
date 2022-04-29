import { useState } from "react";
const Clock = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  setInterval(() => {
    setTime(
      new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, 1000);
  return <div className=" text-white text-7xl font-extrabold">{time}</div>;
};

export default Clock;
