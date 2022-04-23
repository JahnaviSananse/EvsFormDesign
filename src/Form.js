import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";

const theme = createTheme();

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [data, setData] = React.useState({});

  const handleChange = (event) => {
    // console.log(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleChecked = (event, name) => {
    console.log("MAIN NAME:", name);
    setData({
      ...data,
      [name]: {
        ...data[name],
        [event.target.name]: event.target.checked,
      },
    });
    // setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleNumber = (event, root, child) => {
    console.log("ROOT:", root);
    console.log("CHILD:", child);
    setData({
      ...data,
      [root]: {
        ...data[root],
        [child]: {
          ...data[root][child],
          [event.target.name]: event.target.checked,
        },
      },
    });
  };

  const handlePercentage = (event, root, child, subChild) => {
    setData({
      ...data,
      [root]: {
        ...data[root],
        [child]: {
          ...data[root][child],
          [child]: {
            ...data[root][child][subChild],
            [event.target.name]: event.target.checked,
          },
        },
      },
    });
  };

  const handleDuration = (event, root, child, subChild, subSubChild) => {
    setData({
      ...data,
      [root]: {
        ...data[root],
        [child]: {
          ...data[root][child],
          [child]: {
            ...data[root][child][subChild],
            [subChild]: {
              ...data[root][child][subSubChild],
              [event.target.name]: event.target.checked,
            },
          },
        },
      },
    });
  };

  const returnNumberBox = (mainType, childType) => {
    return (
      <>
        <div style={{ marginLeft: "3rem" }}>
          <InputLabel id="demo-simple-select-label">
            No. of Resources
          </InputLabel>

          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleNumber(e, mainType, childType)}
                name="1"
              />
            }
            label="1"
          />
          {data?.[mainType]?.[childType]?.["1"] &&
            returnPercentageBox(mainType, childType, "1")}

          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleNumber(e, mainType, childType)}
                name="2"
              />
            }
            label="2"
          />
          {data?.[mainType]?.[childType]?.["2"] &&
            returnPercentageBox(mainType, childType, "2")}
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleNumber(e, mainType, childType)}
                name="3"
              />
            }
            label="3"
          />
          {data?.[mainType]?.[childType]?.["3"] &&
            returnPercentageBox(mainType, childType, "3")}
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleNumber(e, mainType, childType)}
                name="4"
              />
            }
            label="4"
          />
          {data?.[mainType]?.[childType]?.["4"] &&
            returnPercentageBox(mainType, childType, "4")}
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => handleNumber(e, mainType, childType)}
                name="5&+"
              />
            }
            label="5 & +"
          />
          {data?.[mainType]?.[childType]?.["5&+"] &&
            returnPercentageBox(mainType, childType, "5&+")}
        </div>
      </>
    );
  };

  const returnPercentageBox = (mainType, childType, numberType) => {
    return (
      <>
        <div style={{ marginLeft: "3rem" }}>
          <InputLabel id="demo-simple-select-label">Allocation %</InputLabel>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handlePercentage(e, mainType, childType, numberType)
                }
                name="5-20%"
              />
            }
            label="5-20%"
          />
          {data?.[mainType]?.[childType]?.[numberType]?.["5-20%"] &&
            returnDurationBox(mainType, childType, numberType, "5-20%")}

          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handlePercentage(e, mainType, childType, numberType)
                }
                name="25-45%"
              />
            }
            label="25-45%"
          />

          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handlePercentage(e, mainType, childType, numberType)
                }
                name="50%"
              />
            }
            label="50%"
          />

          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handlePercentage(e, mainType, childType, numberType)
                }
                name="75%"
              />
            }
            label="75%"
          />

          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  handlePercentage(e, mainType, childType, numberType)
                }
                name="100%"
              />
            }
            label="100%"
          />
        </div>
      </>
    );
  };

  const returnDurationBox = (
    mainType,
    childType,
    numberType,
    percentageType
  ) => {
    return (
      <>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Duration for each track (In months)
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            onChange={(e) =>
              handleDuration(e, mainType, childType, numberType, percentageType)
            }
            label="Duration for each track (In months)"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  };

  const returnHandleType = (mainType) => {
    return (
      <>
        <div style={{ marginLeft: "2rem" }}>
          <FormLabel id="-radio-buttons-group-label">{mainType}</FormLabel>
          <br />
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChecked(event, mainType)}
                name="association"
              />
            }
            label="Associate Consultant"
          />
          {data?.[mainType]?.association &&
            returnNumberBox(mainType, "association")}

          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChecked(event, mainType)}
                name="consultant"
              />
            }
            label="Consultant"
          />
          {data?.[mainType]?.consultant &&
            returnNumberBox(mainType, "consultant")}

          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChecked(event, mainType)}
                name="leadConsultant"
              />
            }
            label="Lead Consultant"
          />
          {data?.[mainType]?.leadConsultant &&
            returnNumberBox(mainType, "leadConsultant")}
          <FormControlLabel
            control={
              <Checkbox
                onChange={(event) => handleChecked(event, mainType)}
                name="solutionArchitect"
              />
            }
            label="Solution Architect"
          />
          {data?.[mainType]?.solutionArchitect &&
            returnNumberBox(mainType, "solutionArchitect")}
        </div>
      </>
    );
  };

  {
    console.log("DATA:", data);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            EVOSYS
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="clientname"
                  required
                  fullWidth
                  id="clientname"
                  label="Client Name & Project Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Sub Region/Delivery Head
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="Region/Delivery"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="APAC"
                    control={<Radio />}
                    label="APAC (Vidit Sanghavi)"
                  />
                  <FormControlLabel
                    value="ANZ"
                    control={<Radio />}
                    label="ANZ (Sivakumar Pullari)"
                  />
                  <FormControlLabel
                    value="UAE"
                    control={<Radio />}
                    label="UAE, Oman & Rest of ME (Amr Fahmy)"
                  />
                  <FormControlLabel
                    value="UG"
                    control={<Radio />}
                    label="UG & KSA Eastern/Central Com (Vipin Madan)"
                  />
                  <FormControlLabel
                    value="KSA"
                    control={<Radio />}
                    label="KSA Western (Abdelhadi Asha)"
                  />
                  <FormControlLabel
                    value="Manage"
                    control={<Radio />}
                    label="Managed Services (Devnath)"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Project Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="ProjectType"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Implementation"
                    control={<Radio />}
                    label="Implementation"
                  />
                  <FormControlLabel
                    value="Support"
                    control={<Radio />}
                    label="Support"
                  />
                  <FormControlLabel
                    value="AMS"
                    control={<Radio />}
                    label="AMS"
                  />
                  <FormControlLabel
                    value="Augmentation"
                    control={<Radio />}
                    label="Augmentation"
                  />
                  <FormControlLabel
                    value="Upgrade"
                    control={<Radio />}
                    label="Upgrade"
                  />
                  <FormControlLabel
                    value="Roll Out"
                    control={<Radio />}
                    label="Roll Out"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Technology
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="Technology"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="EBS"
                    control={<Radio />}
                    label="EBS"
                  />
                  <FormControlLabel
                    value="Fusion"
                    control={<Radio />}
                    label="Fusion"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Requirement Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  onChange={handleChange}
                  name="RequirementType"
                >
                  <FormControlLabel
                    value="New Project"
                    control={<Radio />}
                    label="New Project"
                  />
                  <FormControlLabel
                    value="Existing Project"
                    control={<Radio />}
                    label="Existing Project"
                  />
                  <FormControlLabel value="CR" control={<Radio />} label="CR" />
                  <FormControlLabel
                    value="Leave Replacement"
                    control={<Radio />}
                    label="Leave Replacement"
                  />
                  <FormControlLabel
                    value="Resignation Replacement"
                    control={<Radio />}
                    label="Resignation Replacement"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Location
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  onChange={handleChange}
                  name="Location"
                >
                  <FormControlLabel
                    value="Onsite"
                    control={<Radio />}
                    label="Onsite"
                  />
                  <FormControlLabel
                    value="Offshore"
                    control={<Radio />}
                    label="Offshore"
                  />
                  <FormControlLabel
                    value="Onsite/Offshore"
                    control={<Radio />}
                    label="Onsite/Offshore"
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            {data?.Location == "Onsite" && (
              <FormGroup>
                <FormLabel id="demo-radiodemo-buttons-group-label">
                  Track & Resource Type
                </FormLabel>
                {returnHandleType("SCM")}

                {returnHandleType("HCM")}

                {returnHandleType("FIN")}

                {returnHandleType("AD")}

                {returnHandleType("Technical (SCM & FIN) Report")}

                {returnHandleType("Technical HCM Report")}
                {returnHandleType(" Data Migration (SCM & FIN)")}

                {returnHandleType("Data Migration (HCM)")}

                {returnHandleType("EPM")}
                {returnHandleType("DBA")}
                {returnHandleType("Adv. SCM")}
                {returnHandleType("CX")}
              </FormGroup>
            )}

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Duration for each track (In months)
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Duration for each track (In months)"
                // onChange={}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
