import 'dotenv/config'
import express from 'express'
import Stripe from 'stripe'
import { config } from './common'

try {
  const app = express()

  app.use(express.static('public'))

  const stripe = new Stripe(config.STRIPE_SECRET)

  app.post('/buy-apple', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Green Apple',
              images: ['https://via.placeholder.com/500'],
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${config.APP_URL}/congratulation.html`,
      cancel_url: `${config.APP_URL}/error.html`,
    })
    res.json({ id: session.id })
  })

  app.listen(config.APP_PORT, () =>
    console.log(`App is running on ${config.APP_URL}`),
  )
} catch (e) {
  console.error(e)
  process.exit()
}
