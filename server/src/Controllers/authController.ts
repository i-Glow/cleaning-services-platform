import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

let db = new PrismaClient();

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await db.user.findFirst({
      where: {
        email,
        password,
      },
      include: {
        workerPrices: true,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "User signed in successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, address, phoneNumber, wilaya } = req.body;
    const user = await db.user.create({
      data: {
        name,
        email,
        password,
        address,
        phoneNumber,
        wilaya,
        role: "client",
      },
    });
    res.status(201).json({ message: "User signed up successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const createAdminAccount = async () => {
  try {
    const check = await db.user.findFirst({
      where: { role: "admin" },
    });
    if (check == null) {
      const admin = await db.user.create({
        data: {
          name: "admin",
          email: "admin@email.com",
          password: "password",
          address: "Admin's address",
          phoneNumber: "Admin's phone number",
          wilaya: 0,
          role: "admin",
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
