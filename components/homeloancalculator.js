"use client";
import { useState } from "react";
import {
  Typography,
  Button,
  Box,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";

const marks = [
  {
    value: 0,
    label: "0 months",
  },
  {
    value: 12,
    label: "1 year",
  },
  {
    value: 24,
    label: "2 years",
  },
  {
    value: 36,
    label: "3 years",
  },
  {
    value: 60,
    label: "5 years",
  },
  {
    value: 120,
    label: "10 years",
  },
  {
    value: 180,
    label: "15 years",
  },
  {
    value: 240,
    label: "20 years",
  },
  {
    value: 300,
    label: "25 years",
  },
  {
    value: 360,
    label: "30 years",
  },
];
const mark = [
  { value: 0, label: "0%" },
  { value: 5, label: "5%" },
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];
const markks = [
  { value: 100000, label: "₹1L" },
  // { value: 500000, label: "₹5L" },
  // { value: 1000000, label: "₹10L" },
  // { value: 2500000, label: "₹25L" },
  // { value: 5000000, label: "₹50L" },
  // { value: 10000000, label: "₹1cr" },
  // { value: 100000000, label: "₹10cr" },
  { value: 200000000, label: "₹20cr" },
];

export default function Homeloan({
  setPersonalLoan,
  setHomeLoan,
  setBusinessLoan,
}) {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [time, setTime] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalinterest, setTotalinterest] = useState(0);
  const [principal, setPrincipal] = useState(0);

  const handleSlideChange = (event, newValue) => {
    setTime(newValue);
  };

  const handletimeChange = (event) => {
    let value = event.target.value.replace(/[^0-9]/g, ""); // Allow only digits
    value = value ? parseInt(value, 10) : 0;
    setTime(value);
  };

  const handleBBlur = () => {
    if (time < 0) {
      setTime(0);
    } else if (time > 60) {
      setTime(60);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setInterest(newValue);
  };

  const handleinterstChange = (event) => {
    let value = event.target.value.replace(/[^0-9.]/g, ""); // Allow numbers and dot
    value = value ? parseFloat(value) : 0;
    setInterest(value);
  };

  const handleblur = () => {
    if (interest < 0) {
      setInterest(0);
    } else if (interest > 30) {
      setInterest(30);
    }
  };

  const handleInputChange = (event) => {
    let value = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    value = value ? parseInt(value, 10) : 0;
    setPrincipal(value);
  };

  const handleBlur = () => {
    if (principal < 100000) {
      setPrincipal(100000);
    } else if (principal > 200000000) {
      setPrincipal(200000000);
    }
  };

  const handlePrincipalChange = (event, newValue) => {
    setPrincipal(newValue);
  };

  const calculateLoan = () => {
    if (principal > 0 && interest > 0 && time > 0) {
      let p = parseFloat(principal);
      let r = parseFloat(interest);
      let n = parseFloat(time);

      let actualRate = parseFloat(r / 12 / 100);

      let calcemi =
        p *
        actualRate *
        (Math.pow(1 + actualRate, n) / (Math.pow(1 + actualRate, n) - 1));

      setEmi(Math.round(calcemi));
      setAmount(Math.round(calcemi * n));
      setTotalinterest(Math.round(calcemi * n - p));
    } else {
      toast.error("Amount, Interest and Period must be greater than 0!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        toastId: "id",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      {/* <Box sx={{ m: 10 }} /> */}

      <Container>
        <Box
          sx={{
            bgcolor: "#ffff",
            borderRadius: "10px",
          }}
        >
          <div style={{ padding: "20px", marginTop: "70px" }}>
            <Box
              sx={{
                height: "50px",
                width: "100%",
                bgcolor: "#F5F7F9",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" textAlign="left" color={"#621BEC"}>
                Home Loan EMI Calculator
              </Typography>
            </Box>
            <br />

            <Typography fontSize={13} color={"gray"}>
              Fast Credit's Home Loan EMI Calculator is a reliable tool for
              loan borrowers seeking clarity on their monthly instalment. The
              process to use the tool is siple . Enter your loan Amount ,
              interst rate, and tenure to recieve an instant, accurate
              estimation of your montlhly EMI . Streamline your financial
              planning and make informed decisions with thus user- frinedly
              calculator. Ensure a stress-free borrowing exprience with Fast
              Credit Deal
            </Typography>
            <br />
            <Typography variant="h5" align="left" color={"#621BEC"}>
              Calculate Loan EMI
            </Typography>
            <Box sx={{ m: 2 }} />
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="HomeLaon"
                  control={<Radio />}
                  label="Home Loan"
                  onClick={setHomeLoan}
                />
                <FormControlLabel
                  value="Personal Loan"
                  control={<Radio />}
                  label="Personal Loan"
                  onClick={setPersonalLoan}
                />
                <FormControlLabel
                  value="Business Loan"
                  control={<Radio />}
                  label="Business Loan"
                  onClick={setBusinessLoan}
                />
              </RadioGroup>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Box sx={{ m: 2 }} />
                <Typography fontSize={14}>Loan Amount</Typography>
                <Slider
                  sx={{ width: { xs: "90%", sm: "80%", md: "70%", lg: "90%" } }}
                  aria-labelledby="loan-amount-slider-inr"
                  value={typeof principal === "number" ? principal : 0}
                  onChange={handlePrincipalChange}
                  step={10000}
                  marks={markks}
                  min={100000}
                  max={200000000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />
                <Grid item>
                  <TextField
                    label="Amount (₹)"
                    value={principal.toLocaleString("en-IN")}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10000,
                      min: 100000,
                      max: 200000000,
                      type: "text",
                      "aria-labelledby": "input-slider",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <br />
                <br />
                <Box sx={{ m: 2 }} />
                <Typography fontSize={14} textAlign={"left"}>
                  Rate of Interest
                </Typography>
                <Slider
                  sx={{ width: { xs: "90%", sm: "80%", md: "70%", lg: "90%" } }}
                  aria-labelledby="input-slider"
                  value={typeof interest === "number" ? interest : 0}
                  onChange={handleSliderChange}
                  step={0.1}
                  marks={mark}
                  min={0}
                  max={30}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value}%`}
                />{" "}
                <Grid item>
                  <TextField
                    label="Interest Rate (%)"
                    value={interest}
                    onChange={handleinterstChange}
                    onBlur={handleblur}
                    inputProps={{
                      step: 0.1,
                      min: 0,
                      max: 30,
                      type: "text",
                      "aria-labelledby": "input-slider",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <br />
                <br />
                <Box sx={{ m: 2 }} />
                <Typography fontSize={14} textAlign={"left"}>
                  Loan Tenure
                </Typography>
                <Slider
                  sx={{ width: { xs: "90%", sm: "80%", md: "70%", lg: "90%" } }}
                  aria-labelledby="input-slider"
                  value={time}
                  onChange={handleSlideChange}
                  step={1}
                  marks={marks}
                  min={0}
                  max={60}
                  valueLabelDisplay="auto"
                />
                <Grid item>
                  <TextField
                    label="Time (months)"
                    value={time}
                    onChange={handletimeChange}
                    onBlur={handleBBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 60,
                      type: "text",
                      "aria-labelledby": "input-slider",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Box
                  m={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FormControl
                    size="large"
                    align="center"
                    style={{ marginTop: "10px" }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={calculateLoan}
                    >
                      Calculate
                    </Button>
                  </FormControl>
                </Box>
              </Grid>
              <Grid
                bgcolor={"#EDF5FF"}
                item
                md={6}
                xs={12}
                alignItems="center"
                justifyContent="center"
              >
                <Box sx={{ m: 2 }} />
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          <Typography variant="p">Loan EMI</Typography>
                          <Box sx={{ m: 1 }} />
                          <Typography
                            variant="h6"
                            color={"#621BEC"}
                            className="font-bold"
                          >
                            ₹ {emi}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ m: 2 }} />
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          <Typography variant="p">
                            Total Interest Payable
                          </Typography>
                          <Box sx={{ m: 1 }} />
                          <Typography variant="h6" className="font-bold">
                            ₹ {totalinterest}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ m: 2 }} />
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          <Typography variant="p">
                            Total Payment (Principal + Interest)
                          </Typography>
                          <Box sx={{ m: 1 }} />
                          <Typography variant="h6" className="font-bold">
                            ₹ {amount}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <Box sx={{ m: 4 }} />
          </div>
        </Box>
      </Container>
    </>
  );
}
