import * as React from "react";
import "./App.css"

export default function ClickOutside() {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = React.useRef(null)

  const handleOpenModal = () => {
    setIsOpen(true)
  };

  const handleCloseModal = () => {
    setIsOpen(false)
  };

  React.useEffect(()=> {
    if (isOpen === true) {
      const handleClick = (e) => {
        const element = modalRef.current;
        if (element && !element.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("pointerdown", handleClick)
      
      return () => {
        document.removeEventListener("pointerdown", handleClick)
      }
    }

  }, [isOpen])


  return (
    <>
      <section>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={modalRef}>
          <button onClick={handleCloseModal}>✕</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
}
