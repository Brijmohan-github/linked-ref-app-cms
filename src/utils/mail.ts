    import nodemailer from "nodemailer";

    const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
    });

    export async function sendDeletionEmail(
    email: string,
    token: string
    ) {
    const confirmUrl =
        `${process.env.APP_URL}/delete-account/confirm?token=${token}`;

    await transporter.sendMail({
        from: `"ReferralHub" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Confirm your ReferralHub account deletion",
        text: `
    You requested deletion of your ReferralHub account.

    To confirm the deletion request, open this link:

    ${confirmUrl}

    This link will expire in 30 minutes.

    If you did not request account deletion, you can safely ignore this email.

    ReferralHub
    https://referralhub.in
        `,
        html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">

            <h2>Delete your ReferralHub account</h2>

            <p>
            We received a request to delete your ReferralHub account.
            </p>

            <p>
            If you made this request, click the button below to continue.
            </p>

            <p style="margin:30px 0">
            <a
                href="${confirmUrl}"
                style="
                background:#dc2626;
                color:#fff;
                padding:12px 20px;
                text-decoration:none;
                border-radius:6px;
                display:inline-block;
                "
            >
                Confirm Account Deletion
            </a>
            </p>

            <p>
            This link will expire in <strong>30 minutes</strong>.
            </p>

            <p style="color:#666;font-size:13px">
            If you did not request this, you can safely ignore this email.
            </p>

            <hr />

            <p style="color:#777;font-size:12px">
            ReferralHub<br />
            https://referralhub.in
            </p>

        </div>
        `,
    });
    }