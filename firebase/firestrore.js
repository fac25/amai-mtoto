import app from "./initFireBase";

import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export { db };
