import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Form from "./Form";
import { BannerCard } from "./BannerCard";

const Home = () => {
  return (
    <div className="App">
      <Box>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { sm: "column", md: "row" },
            flexWrap: "wrap",
            justifyContent: "space-around",
            my: 7,
          }}
        >
          <BannerCard />
        </Container>
      </Box>
      <Form />
    </div>
  );
};

export default Home;
