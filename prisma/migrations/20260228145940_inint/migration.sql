-- CreateEnum
CREATE TYPE "MachineStatusEnum" AS ENUM ('AVAILABLE', 'RUNNING', 'PAUSED', 'OUT_OF_ORDER');

-- CreateEnum
CREATE TYPE "MachineType" AS ENUM ('WASHER', 'DRYER');

-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('ADMIN', 'CUSTOMER', 'TECHNICIAN');

-- CreateTable
CREATE TABLE "laundries" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "hours" VARCHAR(100) NOT NULL,
    "address" VARCHAR(200) NOT NULL,
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personId" UUID NOT NULL,

    CONSTRAINT "laundries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine_statuses" (
    "id" UUID NOT NULL,
    "status" "MachineStatusEnum" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "currentProgramId" UUID,
    "machineId" UUID NOT NULL,

    CONSTRAINT "machine_statuses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machines" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" "MachineType" NOT NULL,
    "price" DECIMAL(18,2) NOT NULL,
    "laundryId" UUID NOT NULL,
    "personId" UUID,

    CONSTRAINT "machines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
    "id" UUID NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "personType" "PersonType" NOT NULL,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programs" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "temperature" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "programs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "passwordHash" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personId" UUID,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MachineToProgram" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_MachineToProgram_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "machine_statuses_machineId_key" ON "machine_statuses"("machineId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_personId_key" ON "users"("personId");

-- CreateIndex
CREATE INDEX "_MachineToProgram_B_index" ON "_MachineToProgram"("B");

-- AddForeignKey
ALTER TABLE "laundries" ADD CONSTRAINT "laundries_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machine_statuses" ADD CONSTRAINT "machine_statuses_currentProgramId_fkey" FOREIGN KEY ("currentProgramId") REFERENCES "programs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machine_statuses" ADD CONSTRAINT "machine_statuses_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "machines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machines" ADD CONSTRAINT "machines_laundryId_fkey" FOREIGN KEY ("laundryId") REFERENCES "laundries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "machines" ADD CONSTRAINT "machines_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachineToProgram" ADD CONSTRAINT "_MachineToProgram_A_fkey" FOREIGN KEY ("A") REFERENCES "machines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MachineToProgram" ADD CONSTRAINT "_MachineToProgram_B_fkey" FOREIGN KEY ("B") REFERENCES "programs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
