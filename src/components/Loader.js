import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
