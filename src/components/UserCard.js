import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export const UserCard = ({
  user,
  setCurrentUser,
  handleConfirmationModalOpen,
}) => {
  const handleRemoveUser = () => {
    handleConfirmationModalOpen();
    setCurrentUser(user);
  };

  return (
    <Card className="user-card my-2">
      
      <Card.Body>
        <Card.Title>
          <Stack direction="horizontal" className="justify-content-between">
            <div>
              {user.title} {user.firstName} {user.lastName}
            </div>
            <div>
              {user.gender === "male" ? (
                <i className="fa-solid fa-person"></i>
              ) : (
                <i className="fa-solid fa-person-dress" />
              )}
            </div>
          </Stack>
        </Card.Title>
        <Card.Subtitle className="my-2 text-muted">
          <Stack direction="horizontal" className="justify-content-between">
            <div>{user.email}</div>
            <div>{user.age} yrs</div>
          </Stack>
        </Card.Subtitle>
        <hr />
        
        <Stack>
          <Button variant="danger" onClick={handleRemoveUser}>
            <i className="fa-solid fa-trash me-3" />
            Remove
          </Button>
        </Stack>
      </Card.Body>

    </Card>
  );
};

/**
    gender: "male",
 */
