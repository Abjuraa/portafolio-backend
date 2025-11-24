import { Router } from "express"
import { sendEmail } from "../controller/resend.controller.js";

const router = Router();

router.post("/mail-service", sendEmail)

export default router;