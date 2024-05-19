import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

let db = new PrismaClient();

export const getWorkers = async (req: Request, res: Response) => {
  try {
    const { service, wilaya } = req.params;
    const workers = await db.user.findMany({
      where: {
        wilaya: parseInt(wilaya),
        workerPrices: {
          services: {
            has: service,
          },
        },
      },
      include: {
        workerPrices: true,
        Team: {
          select: {
            members: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });
    const workersWithTeamCount = workers.map(({ Team, ...worker }) => ({
      ...worker,
      teamMemberCount: Team ? Team.length : 0,
    }));
    res.status(200).json({ workers: workersWithTeamCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const getWorkerOrders = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orders = await db.order.findMany({
      where: {
        workerId: id,
      },
      include: {
        client: true,
      },
    });
    res.status(200).json({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const getOrderDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await db.order.findUnique({
      where: {
        id,
      },
      include: {
        client: true,
      },
    });

    res.status(200).json({ order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id, state } = req.body;
    await db.order.update({
      where: {
        id,
      },
      data: {
        state,
      },
    });
    res.status(200).json({ message: "Order updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const updateWorker = async (req: Request, res: Response) => {
  try {
    const { id, name, email, address, phoneNumber, wilaya, services } =
      req.body;
    const {
      priceForAllCar,
      priceForOutsideCar,
      priceForInsideCar,
      priceForDish,
      priceForMeter,
      priceForRoom,
      priceForWindow,
    } = req.body.prices;

    const worker = await db.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        address,
        phoneNumber,
        wilaya,
        workerPrices: {
          update: {
            services,
            priceForAllCar,
            priceForOutsideCar,
            priceForInsideCar,
            priceForDish,
            priceForMeter,
            priceForRoom,
            priceForWindow,
          },
        },
      },
    });
    res
      .status(200)
      .json({ message: "User updated successfully", user: worker });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};