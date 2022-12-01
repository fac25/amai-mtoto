import app from "../firebase/initFireBase";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export { auth };
