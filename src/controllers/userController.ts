import { Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {
  res.send("All users");
};

const getOneUser = (req:Request,res:Response) => {
    res.json({"name": "Jane Doe"})
}



export default {getAllUsers,getOneUser}
