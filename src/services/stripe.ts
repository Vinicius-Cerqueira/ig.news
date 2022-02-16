import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Ignews',
    version: '0.1.0',
  },
});

//STRIPE_API_KEY=sk_test_51KRamqJJ6vip1lurBw2z5mAVA4NcTC4CbTxk2qoR2Ny0zVRjQIwrieFYvmJkg3YSjReaE9YQuIXPWz0UjrvslI0A00rSP1xw0H
