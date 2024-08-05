-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "referenceImage" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "image" TEXT NOT NULL DEFAULT '';
