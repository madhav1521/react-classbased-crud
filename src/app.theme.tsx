import { createTheme } from '@mui/material';

const primary = "#59B997";



export const crudTheme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
  typography: {
    fontFamily: [
      "Ubuntu",
      "sans-serif",
    ].join(','),
    h1: {
      fontSize: "48px",
      lineHeight: "56px",
      fontWeight: "500",
      marginBottom: "12px",
      "@media (max-width:899px)": {
        fontSize: "39px",
        fontWeight: "500",
        lineHeight: "45px",
        marginBottom: "10px",
      },
    },
    h2: {
      fontSize: "36px",
      lineHeight: "42px",
      fontWeight: "400",
    },
    h3: {
      fontSize: "30px",
      lineHeight: "35px",
      fontWeight: "400",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "28px",
      fontWeight: "400",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "23px",
      fontWeight: "400",
      textTransform: "capitalize",
    },
    h6: {
      fontSize: "18px",
      lineHeight: "21px",
      fontWeight: "300",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "auto",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background:'transparent'
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root:{
        },
        head: {
          background:'#F1F1F1',
        },
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          "&.input-number": {
            width: "100%",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.pagination-button":{
            minWidth:"40px",
          },
          "&.action-button": {
            minWidth: "34px",
            borderRadius: "50px"
          },
          "&.MuiButton-root.Mui-disabled": {
            color:"rgb(55 50 50 / 50%);"
          },
        }
      }
    }
  },
});
