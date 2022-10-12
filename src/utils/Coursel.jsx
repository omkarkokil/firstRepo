import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
const Coursel = () => {
  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "https://images.unsplash.com/photo-1569173675610-42c361a86e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      url: "https://images.unsplash.com/photo-1569098272587-7af816a8293c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  function Item(props) {
    return (
      <Stack>
        <Button
          size="large"
          sx={{
            position: "absolute",
            top: "50% ",
            left: "40%",
            color: "white",
            backdropFilter: "blur(2)",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
          variant="text"
          color="inherit"
        >
          {" "}
          {props.item.name}
        </Button>
        <Paper
          elevation={24}
          component={"img"}
          style={{
            display: "flex",
            height: "60vh",
            objectFit: "cover",
            justifyContent: "center",
            margin: "2%",
            borderRadius: "2%",
          }}
          src={props.item.url}
          alt={props.item.description}
        />
      </Stack>
    );
  }

  return (
    <Carousel
      autoPlay={"true"}
      indicators={"true"}
      swipe={"true"}
      navButtonsAlwaysVisible={"true"}
      animation="slide"
      duration={1800}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Coursel;
