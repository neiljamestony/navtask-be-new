CREATE SCHEMA if not EXISTS "NAVTASK";

-- CreateEnum
CREATE TYPE "NAVTASK"."provider_type" AS ENUM ('local', 'facebook', 'googlefb_and_google');

-- CreateEnum
CREATE TYPE "NAVTASK"."subtask_status" AS ENUM ('done', 'not-done');

-- CreateEnum
CREATE TYPE "NAVTASK"."task_priority" AS ENUM ('low', 'high', 'critical');

-- CreateEnum
CREATE TYPE "NAVTASK"."task_status" AS ENUM ('not-started', 'in-progress', 'completed', 'cancelled');

-- CreateTable
CREATE TABLE "NAVTASK"."attachments" (
    "id" SERIAL NOT NULL,
    "task_id" UUID NOT NULL,
    "file_name" VARCHAR(255) NOT NULL,
    "original_name" VARCHAR(255) NOT NULL,
    "file_path" TEXT NOT NULL,
    "mime_type" VARCHAR(100),
    "file_size" BIGINT,
    "uploaded_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NAVTASK"."subtask" (
    "id" SERIAL NOT NULL,
    "task_id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "status" "NAVTASK"."subtask_status" DEFAULT 'not-done',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subtask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NAVTASK"."task" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "due_date" DATE,
    "completed_date" DATE,
    "priority" "NAVTASK"."task_priority" DEFAULT 'low',
    "status" "NAVTASK"."task_status" DEFAULT 'not-started',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NAVTASK"."users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(150) NOT NULL,
    "provider" "NAVTASK"."provider_type" DEFAULT 'local',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "fk_task" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subtask" ADD CONSTRAINT "fk_task" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "fk_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
