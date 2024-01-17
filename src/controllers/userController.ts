import { Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {
  res.render("allusers");
};

const getOneUser = (req: Request, res: Response) => {
  res.render("oneuser");
};

export default { getAllUsers, getOneUser };
