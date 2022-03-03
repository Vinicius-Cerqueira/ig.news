import { NextApiRequest, NextApiResponse } from "next";
import  {getSession}  from 'next-auth/react'
import { stripe } from "../../services/stripe"
import {fauna} from '../../services/fauna'
import {query as q} from 'faunadb';


type User = {
    ref: {
        id: string;
    }
    data: {
        stripe_customer_id: string
    }
}
const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST'){
        const session  = await getSession({req});

        const user = await fauna.query<User>(
            q.Get(
                q.Match(
                    q.Index('user_by_email'),
                    q.Casefold(session.user.email)
                )
            )
        )

        let customerId = user.data.stripe_customer_id;

        if(!customerId){
            const stripeCustomer = await stripe.customers.create({
                email: session.user.email            
            })
        

            await fauna.query(
                q.Update(
                    q.Ref(q.Collection('users'), user.ref.id),
                    {
                        data: {
                            stripe_customer_id: stripeCustomer.id
                        }
                    }
                )
            )
            customerId = stripeCustomer.id;
        }
    


        
       const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: customerId,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
            line_items: [
                {price: 'price_1KX3h0Fu1yPVlUjX4ZcyyCov' ,quantity: 1}
            ],
            mode: 'subscription',
        });

       return res.status(200).json(stripeCheckoutSession.id);

    } else {
        res.setHeader('Allow', 'POST')
        return res.status(405).end('Method Not Allowed');
    }
}

export default subscribe;