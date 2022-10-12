import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Stack,
  Divider,
} from "@mui/material/";

const AboutCard1 = () => {
  console.log(window.innerHeight);
  console.log(window.innerWidth);

  return (
    <div>
      <Card
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: { xs: "center", md: "unset" },
          width: "100%",
          margin: 2,
          padding: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              sx={{
                textAlign: { md: "left", xs: "center" },
              }}
              variant="h5"
            >
              Mrs Naresh Bhosale (MB)
            </Typography>
            <Typography
              variant="subtitle21"
              color="text.secondary"
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore corrupti porro est delectus expedita laboriosam. Cumque
              dolor velit illum accusamus, saepe cum blanditiis magni
              reprehenderit quod expedita eum nesciunt maxime repellat nulla
              minus dolorem, id mollitia laborum dolorum consectetur impedit in?
              Dicta repellendus iusto eaque aliquid quos quae, cum dolore.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { md: "row", xs: "column" },
              margin: 2,
              pl: 1,
              pb: 1,
            }}
          >
            <Stack>
              <Avatar
                sx={{ margin: 4 }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1661125644816-f53f64ffe570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
            </Stack>
            <Stack component={"subtitle-2"}>Mrs Naresh Bhosale (MB)</Stack>
          </Box>
        </Box>
        <CardMedia>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1661125644816-f53f64ffe570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            sx={{ width: 200, height: 200 }}
          />
        </CardMedia>
      </Card>

      <Divider />
      <Card
        elevation={10}
        sx={{
          display: "flex",
          width: "100%",
          margin: 2,
          flexDirection: { xs: "column-reverse", md: "row-reverse" },
          alignItems: { xs: "center", md: "unset" },
          padding: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{
                textAlign: { md: "right", xs: "center" },
              }}
            >
              Mrs Naresh Bhosale (MB)
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              textAlign={"right"}
              sx={{
                textAlign: { md: "right", xs: "left" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore corrupti porro est delectus expedita laboriosam. Cumque
              dolor velit illum accusamus, saepe cum blanditiis magni
              reprehenderit quod expedita eum nesciunt maxime repellat nulla
              minus dolorem, id mollitia laborum dolorum consectetur impedit in?
              Dicta repellendus iusto eaque aliquid quos quae, cum dolore.
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: 2,
              pl: 1,
              pb: 1,
              flexDirection: { md: "row-reverse", xs: "column" },
            }}
          >
            <Stack>
              <Avatar
                sx={{ margin: 4 }}
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1661125644816-f53f64ffe570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
            </Stack>
            <Stack component={"subtitle-2"}>Mrs Naresh Bhosale (MB)</Stack>
          </Box>
        </Box>
        <CardMedia>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1661125644816-f53f64ffe570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            sx={{ width: 200, height: 200 }}
          />
        </CardMedia>
      </Card>
      <Divider />
    </div>
  );
};

export default AboutCard1;
