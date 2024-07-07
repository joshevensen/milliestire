import date from "./date";
import prisma from "./prisma";

const utils = {
  date,
  db: prisma,
};

export default utils;
