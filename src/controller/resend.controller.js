import { Resend } from 'resend';


export const sendEmail = async (req, res) => {

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { email, subject, content } = req.body

        if (!email || !subject || !content) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" })
        }

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.CONTACT_EMAIL,
            subject: `Nuevo mensaje de ${email}`,
            html: `
                <div style="
                    background-color: #0f0f0f;
                    color: #e5e5e5;
                    padding: 24px;
                    font-family: Arial, Helvetica, sans-serif;
                    border-radius: 12px;
                    max-width: 600px;
                    margin: 0 auto;
                ">
                    <h2 style="color: #fff; font-size: 24px; margin-bottom: 16px;">
                    Nuevo mensaje desde tu portafolio
                    </h2>

                    <div style="
                    background-color: #1a1a1a;
                    padding: 16px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    border: 1px solid #333;
                    ">
                    <p style="margin: 0 0 10px;">
                        <b style="color:#a78bfa;">Correo:</b> ${email}
                    </p>

                    <p style="margin: 0 0 10px;">
                        <b style="color:#a78bfa;">Asunto:</b> ${subject}
                    </p>

                    <p style="margin: 0;">
                        <b style="color:#a78bfa;">Mensaje:</b><br/>
                        <span style="white-space: pre-line;">${content}</span>
                    </p>
                    </div>

                    <p style="font-size: 13px; color: #777; text-align: center; margin-top: 20px;">
                    Este correo fue enviado automáticamente desde tu portafolio.
                    </p>
                </div>
                `
        })

        return res.status(200).json({ success: true, response })
    } catch (error) {
        console.log("Error enviando el correo: " + error)
        return res.status(500).json({ error: "Error al enviar el correo " + error })
    }
}