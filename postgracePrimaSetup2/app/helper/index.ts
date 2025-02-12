const { validationResult } = require("express-validator");

//import {validationResult} from "express-validator"
import { Request } from "express";
// Check Validation For Requests


 const checkValidation = (req: Request) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationError = {
      message: errors.errors,
    };
    throw validationError;
  }
};


export  {checkValidation}
