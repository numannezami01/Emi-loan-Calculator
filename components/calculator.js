"use client";
import { useState } from "react";
import {
  Typography,
  Button,
  Box,
  TextField,
  FormControlLabel,
  FormLabel,
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
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import { borderRadius, height } from "@mui/system";

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
];
const mark = [
  { value: 0, label: "0%" },
  { value: 5, label: "5%" },
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
  { value: 25, label: "25%" },
];
const markks = [
  { value: 50000, label: "₹50k" },
  // { value: 100000, label: "₹1L" },
  // { value: 500000, label: "₹5L" },
  // { value: 1000000, label: "₹10L" },
  { value: 2500000, label: "₹25L" },
  // { value: 5000000, label: "₹50L" },
  { value: 10000000, label: "₹1Cr" },
  { value: 15000000, label: "₹1.5Cr" },
  { value: 20000000, label: "₹2Cr" },
];

export default function LoanCalculator({
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

  const handleinteresstChange = (event) => {
    let value = event.target.value === "" ? "" : Number(event.target.value);
    if (value < 0) {
      value = 0;
    } else if (value > 20) {
      value = 20;
    }
    setInterest(value);
  };

  const handlebulur = () => {
    if (interest < 0) {
      setInterest(0);
    } else if (interest > 20) {
      setInterest(20);
    }
  };

  const handleBbblur = () => {
    if (time < 0) {
      setTime(0);
    } else if (time > 60) {
      setTime(60);
    }
  };

  const handleTimesChange = (event) => {
    let value = event.target.value === "" ? "" : Number(event.target.value);
    if (value < 0) {
      value = 0;
    } else if (value > 60) {
      value = 60;
    }
    setTime(value);
  };

  const handleTimeChange = (event, newValue) => {
    setTime(newValue);
  };

  const handlePrincipalChange = (event, newValue) => {
    setPrincipal(newValue);
  };

  const handleInputChange = (event) => {
    const value =
      event.target.value === ""
        ? ""
        : Number(event.target.value.replace(/[^0-9]/g, ""));
    setPrincipal(value);
  };

  const handleBlur = () => {
    if (principal < 50000) {
      setPrincipal(50000);
    } else if (principal > 20000000) {
      setPrincipal(20000000);
    }
  };

  const handleInterestChange = (event, newValue) => {
    setInterest(newValue);
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
                Personal Loan EMI Calculator
              </Typography>
            </Box>
            <br />

            <Typography fontSize={13} color={"gray"}>
              Fast Credit's Personal Loan EMI Calculator is a reliable tool for
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
                <Typography fontSize={14} textAlign={"left"}>
                  Loan Amount
                </Typography>
                <Slider
                  sx={{ width: { xs: "90%", sm: "80%", md: "70%", lg: "90%" } }}
                  aria-labelledby="loan-amount-slider-inr"
                  value={typeof principal === "number" ? principal : 0}
                  onChange={handlePrincipalChange}
                  step={10000}
                  marks={markks}
                  min={50000}
                  max={20000000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) =>
                    `₹${value.toLocaleString("en-IN")}`
                  }
                />
                <TextField
                  label="Manual Amount"
                  value={principal.toLocaleString("en-IN")}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  margin="normal"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
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
                  onChange={handleInterestChange}
                  step={0.1}
                  marks={mark}
                  min={0}
                  max={20}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `${value}%`}
                />{" "}
                <TextField
                  label="Interest Rate (%)"
                  type="number"
                  value={interest}
                  onChange={handleinteresstChange}
                  onBlur={handlebulur}
                  inputProps={{
                    step: 0.1,
                    min: 0,
                    max: 20,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                  margin="normal"
                />
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
                  onChange={handleTimeChange}
                  step={1}
                  marks={marks}
                  min={0}
                  max={60}
                  valueLabelDisplay="auto"
                />
                <TextField
                  sx={{ width: "190px" }}
                  label="Time"
                  type="number"
                  value={time}
                  onChange={handleTimesChange}
                  onBlur={handleBbblur}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: 60,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
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
