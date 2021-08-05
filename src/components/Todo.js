import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  /**
   * at first render, set modalIsOpen as false.
   * use [] to store elements.
   */
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /**
   * action to delete an item
   */
  function deleteHandler() {
    setModalIsOpen(true);
  }

  /**
   * action on click backdrop
   */
  function onClickBackdropHandler() {
    setModalIsOpen(false);
  }

  /**
   * action close modal
   */
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  /**
   * action confirm modal
   */
  function confirmModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* This button will be execute at the beginning */}
      {/* <div className="action">
        <button
          className="btn"
          onClick={() => {
            console.log("onClickAction Trial onClickAction");
          }}
        >
          Trial onClickAction
        </button> 
      </div>*/}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={confirmModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClickCloseModal={onClickBackdropHandler} />}
    </div>
  );
}

export default Todo;
