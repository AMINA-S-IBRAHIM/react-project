import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { AddUserForm } from "./components/AddUserForm";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { SuccessModal } from "./components/SuccessModal";
import { Users } from "./components/Users";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const Users = () => {
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const usersFromLS = getFromLocalStorage("users", []);

    setUsers(usersFromLS);
  }, []);

  const addUser = (user) => {
    const usersFromLS = getFromLocalStorage("users", []);

    usersFromLS.push(user);

    localStorage.setItem("users", JSON.stringify(usersFromLS));

    setUsers(usersFromLS);

    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
  };

  const handleConfirmationModalOpen = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmationModalClose = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmDelete = () => {
    const usersFromLS = getFromLocalStorage("users", []);

    const newUsers = usersFromLS.filter((user) => user.id !== currentUser.id);

    localStorage.setItem("users", JSON.stringify(newUsers));

    setUsers(newUsers);

    handleConfirmationModalClose();
  };

  return (
    
    <Container className="app">
      <AddUserForm/>
      <SuccessModal
        showSuccessModal={showSuccessModal}
        handleSuccessModalClose={handleSuccessModalClose}
      />
      <ConfirmationModal
        showConfirmationModal={showConfirmationModal}
        handleConfirmationModalClose={handleConfirmationModalClose}
        handleConfirmDelete={handleConfirmDelete}
      />
      <AddUserForm addUser={addUser} />
      {users && (
        <Users
          users={users}
          setCurrentUser={setCurrentUser}
          showConfirmationModal={showConfirmationModal}
          handleConfirmationModalOpen={handleConfirmationModalOpen}
          handleConfirmationModalClose={handleConfirmationModalClose}
        />
      )}
    </Container>
  );
};
