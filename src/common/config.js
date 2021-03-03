export default {
  APP_URL: `http://${process.env.APP_URL}:${process.env.APP_PORT}`,
  APP_PORT: process.env.APP_PORT,
  STRIPE_SECRET: process.env.STRIPE_SECRET,
}
