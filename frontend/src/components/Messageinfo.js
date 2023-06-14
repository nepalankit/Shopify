import React from "react";

import { Alert } from "react-bootstrap";

const Messageinfo = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Messageinfo.defaultProps = {
  variant: "info",
};

export default Messageinfo;
