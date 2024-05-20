-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('client', 'worker', 'admin');

-- CreateEnum
CREATE TYPE "OrderStates" AS ENUM ('pending', 'accepted', 'refused', 'cancelled', 'done');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('pool', 'afterEvent', 'restaurant', 'window', 'car', 'house', 'dish');

-- CreateEnum
CREATE TYPE "CarTypes" AS ENUM ('inside', 'outside', 'all');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "wilaya" INTEGER NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "role" "Roles" NOT NULL,
    "workerPricesId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "leaderId" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkerPrices" (
    "id" TEXT NOT NULL,
    "services" TEXT[],
    "priceForMeter" DOUBLE PRECISION,
    "priceForWindow" DOUBLE PRECISION,
    "priceForInsideCar" DOUBLE PRECISION,
    "priceForOutsideCar" DOUBLE PRECISION,
    "priceForAllCar" DOUBLE PRECISION,
    "priceForRoom" DOUBLE PRECISION,
    "priceForDish" DOUBLE PRECISION,

    CONSTRAINT "WorkerPrices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "state" "OrderStates" NOT NULL DEFAULT 'pending',
    "price" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    "numberOfDishes" INTEGER,
    "numberOfWindows" INTEGER,
    "numberOfRooms" INTEGER,
    "meters" DOUBLE PRECISION,
    "carCleaning" "CarTypes",

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "reductionPercentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workerPricesId_fkey" FOREIGN KEY ("workerPricesId") REFERENCES "WorkerPrices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMember" ADD CONSTRAINT "TeamMember_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
