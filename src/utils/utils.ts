import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import dayjs from 'dayjs';

dotenv.config();

export const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is not defined`);
  return value;
};

const jwt_secret = getEnv("JWT_ACCESS_SECRET");

export const generateHash = async (data: string) => {
    const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(data, salt);
}

export const validateHashed = async (input: string, reference: any) =>
  await bcrypt.compare(input, reference);

export const generateAccessToken = async (payload: object) => {
  return jwt.sign(payload, jwt_secret, { expiresIn: "24h" });
};

export const convertToDbDate = (value: string) => {
  const d = dayjs(value, "MM/DD/YYYY");
  return new Date(
    Date.UTC(
      d.year(),
      d.month(),
      d.date()
    )
  );
};

export const validateFields = (payload: any) => {
  let errors: {key: string, error: string}[] = [];
  Object.keys(payload).forEach((field) => {
    const username = field === "username" && payload[field];
    const password = field === "password" && payload[field];
    const title = field === "title" && payload[field];
    const description = field === "description" && payload[field];
    const due_date = field === "due_date" && payload[field];
    const regex = /^[A-Za-z0-9 !#()_-]+$/;
    const isPastDate = dayjs(due_date).isBefore(dayjs(), 'day');
    const TITLE_MAX_LENGTH = 25;
    const DESC_MAX_LENGTH = 300;

    if(field === "password"){
      if(password === "" || password === " "){
        errors.push({key: field, error: `${field} is required!`})
      }
      if(password.includes(username)){
        errors.push({key: field, error: `Cannot contain your name or email!`})
      }
      if(password.length < 8){
        errors.push({key: field, error: `Atleast 8 Characters!`})
      }
      if(!regex.test(password)){
        errors.push({key: field, error: `Contains a number or a symbol!`})
      }
    }
    if(field === "username"){
      if(username === "" || username === " "){
        errors.push({key: field, error: `${field} is required!`})
      }
      if(!regex.test(username)){
        errors.push({key: field, error: `Invalid Username!`})
      }
    }
    if(field === "title"){
      if(title === "" || title === " "){
        errors.push({key: field, error: `Must not be empty!`})
      }
      if(title.length > TITLE_MAX_LENGTH){
        errors.push({key: field, error: `${field} must be ${TITLE_MAX_LENGTH} characters only!`})
      }
    }
    if(field === "description"){
      if(description.length > DESC_MAX_LENGTH){
        errors.push({key: field, error: `Details must be ${DESC_MAX_LENGTH} characters only!`})
      }
    }
    if(field === "due_date"){
      if(payload[field] === "" || payload[field] === " "){
        errors.push({key: field, error: `Due date is required!`})
      }
      if(isPastDate){
        errors.push({key: field, error: `Due date must be later than Date Created!`})
      }
    }
    return field;
  })
  return errors;
}