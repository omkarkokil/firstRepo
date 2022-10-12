import { Grid, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import AboutCard from "../Component/About/AboutCards/AboutCards";

export default function GridStack() {
  const items = [1, 2, 3, 4, 5];

  return (
    <Grid>
      <Carousel
        autoPlay={"true"}
        indicators={"true"}
        swipe={"true"}
        //   cycleNavigation={'false'}
        navButtonsAlwaysVisible={"true"}
        animation="slide"
        duration={1800}
      >
        {items.map((item) => (
          <Stack
            key={item}
            display={"flex"}
            justifyContent={"center"}
            // justifyItems={"inherit"}
            px={4}
            direction={"row"}
          >
            <Grid px={2} item>
              <AboutCard />
            </Grid>
            <Grid px={2} item>
              <AboutCard />
            </Grid>
            <Grid px={2} item>
              <AboutCard />
            </Grid>
          </Stack>
        ))}
      </Carousel>
    </Grid>
  );
}
