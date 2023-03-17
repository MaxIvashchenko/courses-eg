-- AlterTable
ALTER TABLE "User" ADD COLUMN     "available_courses" TEXT[] DEFAULT ARRAY[]::TEXT[];
