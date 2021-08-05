import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler (event) {
    event.preventDefault();
    console.log("submit form handler");
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log('meetupData', meetupData);
    props.onAddMeetup(meetupData);
  }

  return (
    <>
      <h2>Welcome to New Meetup Form</h2>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Meetup Address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Meetup Description</label>
            <textarea
              type="text"
              required
              id="description"
              rows="5"
              ref={descriptionInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Add Meetup</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default NewMeetupForm;
