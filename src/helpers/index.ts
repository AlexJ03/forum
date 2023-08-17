import Token from "./localStorage";
import Database from "./database";
import { fireError } from "./errors";
import { userAuth } from "./auth";
import { handleKeyDown } from "./handlers";

const token = Token;
const database = Database;

export { token, database, fireError, userAuth, handleKeyDown };