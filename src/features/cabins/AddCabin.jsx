import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
// import { useState } from "react";

function AddCabin() {
  // const [isOpenModal, setIsOpenModal] = useState();

  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>

    // <Modal>
    //   <Modal.Toggle opens="new-cabin">
    //     <Button>Add new cabin</Button>
    //   </Modal.Toggle>
    //   <Modal.Window name="new-cabin">
    //     <CreateCabinForm />
    //   </Modal.Window>
    // </Modal>
    // <div>
    //   <Button onClick={() => setIsOpenModal((show) => !show)}>
    //     Add new cabin
    //   </Button>
    //   {isOpenModal && (
    //     <Modal onClose={() => setIsOpenModal(false)}>
    //       <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
    //     </Modal>
    //   )}
    // </div>
  );
}

export default AddCabin;
