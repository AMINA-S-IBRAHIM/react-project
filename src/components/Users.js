import Alert from "react-bootstrap/Alert";
import Stack from "react-bootstrap/Stack";
import { UserCard } from "./UserCard";

export const Users = ({
  users,
  setCurrentUser,
  handleConfirmationModalOpen,
}) => {
  if (users.length === 0) {
    return (
      <Alert variant="info">
        You have no users in the registry. Please complete the form to add a new
        user.
      </Alert>
    );
  }

  return (
    <Stack
      direction="horizontal"
      className="justify-content-between align-items-start"
    >
      {users.map((user) => (
        <UserCard
          user={user}
          key={user.id}
          setCurrentUser={setCurrentUser}
          handleConfirmationModalOpen={handleConfirmationModalOpen}
        />
      ))}
    </Stack>
  );
};
