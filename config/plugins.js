module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "smtp.gmail.com"),
      port: env("SMTP_PORT", 587),
      auth: {
        user: "hieudao20031@gmail.com",
        pass: "Tronghieu2003@",
      },
    },
    settings: {
      defaultFrom: "socool@club.com",
      defaultReplyTo: "socool@club.com",
    },
  },
});
