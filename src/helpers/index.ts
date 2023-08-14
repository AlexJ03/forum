import Token from "./localStorage";
import Database from "./database";
import { fireError } from "./errors";
import { userAuth } from "./auth";

const token = Token;
const database = Database;

export { token, database, fireError, userAuth };