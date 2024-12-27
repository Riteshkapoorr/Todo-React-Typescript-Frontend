import { useState, useEffect } from "react";

interface GreetProps {
  username: string;
  hours: number;
}

function ShowTime({
  hours,
  mins,
  secs,
}: {
  hours: number;
  mins: number;
  secs: number;
}) {
  return (
    <h1>
      {hours > 12 ? hours - 12 : hours}:{mins}:{secs}
      {hours < 12 ? " AM" : " PM"}
    </h1>
  );
}

function ShowGreet({ username, hours }: GreetProps) {
  let greeting;

  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning, ";
  }
  if (hours > 12 && hours < 18) {
    greeting = "Good Afternoon, ";
  } else if (hours >= 18 && hours < 22) {
    greeting = "Good Evening, ";
  }

  return (
    <h3>
      {greeting}
      {username}
    </h3>
  );
}

function PageTitle() {
  const [currTime, setCurrTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrTime(new Date());
    };
    const timerId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(timerId); // Clean up on unmount
  }, []);

  const hour = currTime.getHours();
  const mins = currTime.getMinutes();
  const secs = currTime.getSeconds();

  return (
    <>
      <div className="container text-center">
        <ShowTime hours={hour} mins={mins} secs={secs} />
      </div>

      <div className="container text-secondary">
        <ShowGreet username="Ritesh" hours={Number(hour)} />
      </div>
    </>
  );
}

export default PageTitle;
