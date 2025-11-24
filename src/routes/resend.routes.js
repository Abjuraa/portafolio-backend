import { Router } from "express"
import { sendEmail } from "../controller/resend.controller.js";

const router = Router();

router.post("/email", sendEmail)

export default router;