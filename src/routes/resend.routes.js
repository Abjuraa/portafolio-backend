import { Router } from "express"
import { sendEmail } from "../controller/resend.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: email
 *   description: Este endpoint permite enviar un correo electrónico
 */


/**
 * @swagger
 * /api/mail-service:
 *   post:
 *     summary: Envía un correo electrónico
 *     tags: [email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - email
 *               - subject
 *               - content
 *     responses:
 *       200:
 *         description: Correo electrónico enviado con éxito
 *       400:
 *         description: Error al enviar el correo electrónico
 *       500:
 *         description: Error interno del servidor
 */

router.post("/mail-service", sendEmail)

export default router;