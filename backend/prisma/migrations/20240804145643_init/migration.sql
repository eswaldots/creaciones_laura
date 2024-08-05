-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "ingredients" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
