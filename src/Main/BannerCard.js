import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography";

const removeTags = (text) => {
  let div = document.createElement('div');
  div.innerHTML = text;
  return div.textContent || div.innerText;
}

export const BannerCard = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    fetch('https://quotesondesign.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);

  const handleChangeQuote = () => {
    setQuoteIndex((quoteIndex + 1) % data.length);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    const quote = removeTags(data[quoteIndex].content.rendered);

    return (
      <Card sx={{ minWidth: 275, my: 2 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Quote of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {quote}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleChangeQuote}>Change Quote</Button>
        </CardActions>
      </Card>
    );
  }
};