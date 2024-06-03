import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

let db = new PrismaClient();

export const addWorker = async (req: Request, res: Response) => {
  try {
    const { name, email, password, address, phoneNumber, wilaya, services } =
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

    const worker = await db.user.create({
      data: {
        name,
        email,
        password,
        address,
        phoneNumber,
        wilaya,
        workerPrices: {
          create: {
            services: services.toString(),
            priceForAllCar,
            priceForOutsideCar,
            priceForInsideCar,
            priceForDish,
            priceForMeter,
            priceForRoom,
            priceForWindow,
          },
        },
        role: "worker",
      },
      include: {
        workerPrices: true,
      },
    });
    if (req.body.teamMembers.length > 0) {
      await db.team.create({
        data: {
          leader: { connect: { id: worker.id } },
          members: {
            create: req.body.teamMembers.map((member: any) => {
              return {
                name: member.name,
              };
            }),
          },
        },
      });
    }

    res.status(201).json({ message: "Worker added successfully", worker });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const getWorkers = async (req: Request, res: Response) => {
  try {
    const workers = await db.user.findMany({
      where: { role: "worker" },
      include: {
        workerPrices: true,
      },
    });
    res.status(200).json({ workers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

export const addOffer = async (req: Request, res: Response) => {
  try {
    const { reductionPercentage, startDate, endDate, description } = req.body;
    const offer = await db.offer.create({
      data: {
        reductionPercentage,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        description,
      },
    });
    res.status(201).json({ message: "Offer added successfully", offer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};
