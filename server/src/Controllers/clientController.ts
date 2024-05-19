import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

let db = new PrismaClient();

export const getLoyalty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const countOrders = await db.order.count({
      where: {
        clientId: id,
        state: { not: "cancelled" },
      },
    });
    res.status(200).json({
      message: "Order count fetched successfully",
      count: countOrders,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const {
      date,
      price,
      type,
      clientId,
      workerId,
      numberOfDishes,
      numberOfWindows,
      numberOfRooms,
      meters,
      carCleaning,
    } = req.body;

    const order = await db.order.create({
      data: {
        date: new Date(date),
        price,
        type,
        client: { connect: { id: clientId } },
        worker: { connect: { id: workerId } },
        workerId,
        numberOfDishes,
        numberOfWindows,
        numberOfRooms,
        meters,
        carCleaning,
      },
    });
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id, name, email, password, address, phoneNumber, wilaya } =
      req.body;
    const updatedUser = await db.user.update({
      where: { id: id },
      data: {
        name,
        email,
        password,
        address,
        phoneNumber,
        wilaya,
      },
    });
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const cancelOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    await db.order.update({
      where: { id },
      data: {
        state: "cancelled",
      },
    });
    res.status(200).json({ message: "Order cancelled successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};
