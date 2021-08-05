import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect, Object } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    /**
     * when ever render this page, fetch data
     */
    fetch(
      "https://reactjsapp-d1614-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <section>Loading</section>;
  }

  return (
    <>
      <h1>Welcome to Meetup Page</h1>
      <section>
        <MeetupList meetups={meetups} />
      </section>
    </>
  );
}

export default AllMeetupsPage;
