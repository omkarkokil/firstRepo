import Coursel from "../../utils/Coursel";
import { Typography, Stack, Paper, Divider } from "@mui/material/";
import AboutCard1 from "./AboutCard1/AboutCard1";
import GridStack from "../../utils/GridStack";
import CollegeFeature from "./CollegeFeature/CollegeFeature";

export default function About() {
  return (
    <>
      <Stack mx={4} mt={8}>
        <Coursel />
        <Typography
          my={5}
          gutterBottom
          variant="h3"
          sx={{ color: "primary.main", textAlign: "center" }}
          component="div"
        >
          Welcome to Transfy
        </Typography>
        <Paper>
          <Typography
            mx={2}
            variant="subtitle-2"
            lineHeight={2}
            component={"subtitle-2"}
            textAlign={"left"}
            color="primary.light"
          >
            <Typography
              variant="body1"
              component={"subtitle-2"}
              textAlign={"right"}
              color="primary.light"
            >
              {" "}
              Lorem ipsum dolor sit amet
            </Typography>
            aliquid corrupti ratione natus cupiditate dolor pariatur quam vel
            recusandae labore distinctio, suscipit quae, quis velit! Lorem ipsum
            dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste enim voluptatem possimus tenetur ipsam cum, quia dicta
            maiores, ex repellendus at totam quas non aperiam ullam quis
            molestias earum veniam nulla vero porro id maxime! consectetur
            adipisicing elit. Praesentium animi sapiente, nisi dolorem
            perferendis, eligendi reprehenderit officia, rem id nobis minus
          </Typography>
        </Paper>
        <Divider sx={{ margin: 2 }} />
        <Stack>
          <Typography
            variant="h4"
            color={"primary.main"}
            textAlign={"center"}
            component={"h2"}
          >
            College Proffesional's
          </Typography>
          <AboutCard1 />
          <AboutCard1 />
          <AboutCard1 />
        </Stack>
        <Stack>
          <GridStack />
        </Stack>
        <Stack>
          <CollegeFeature />
        </Stack>
      </Stack>
    </>
  );
}
