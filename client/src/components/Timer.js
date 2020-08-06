import React, { useState, useEffect } from "react";

function Timer({ count, calcResult }) {
  const [time, setTime] = useState(count*60);

  useEffect(() => {
    if (time === 0) {
      calcResult();
    }
    const timerId = setInterval(() => setTime(time - 1), 1000);

    return () => clearInterval(timerId);
  }, [time, count, calcResult]);

  function formatTime(time) {
    let formattedTime = "";
    formattedTime += (time / 60 >= 10
      ? String(time / 60)
      : "0" + time / 60
    ).slice(0, 2);
    formattedTime += ":";
    formattedTime += time % 60 >= 10 ? time % 60 : "0" + (time % 60);

    return formattedTime;
  }

  return <div className="Timer">Time Left- {formatTime(time)}</div>;
}

export default Timer;
