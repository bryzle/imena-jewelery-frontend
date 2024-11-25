import watch1 from '../assets/watch1.jpg';
import watch2 from '../assets/watch2.jpg';
import watch3 from '../assets/watch3.jpg';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const price = await stripe.prices.create({
    currency: 'usd',
    unit_amount: 12000,
    product: '{{PrODUCT_ID}}',
})

const paymentLink = await stripe.paymentLink.create({
    line_items:[
        {
            price: '{{PRICE_ID}}',
            quantity: 1,
        }
    ]
})

export const products = [
    {
      id: 'prod_1',
      name: 'Watch 1',
      description: 'A beautiful watch that tells time.',
      price: 12000, // Price in cents ($120.00)
      currency: 'USD',
      image: watch1, // Replace with your product image
    },
    {
      id: 'prod_2',
      name: 'Watch 2',
      description: 'A beautiful watch that tells time.',
      price: 25000, // Price in cents ($250.00)
      currency: 'USD',
      image: watch2, // Replace with your product image
    },
    {
        id: 'prod_3',
        name: 'Watch 3',
        description: 'A beautiful watch that tells time.',
        price: 35000, // Price in cents ($250.00)
        currency: 'USD',
        image: watch3, // Replace with your product image
      },
  ];
  