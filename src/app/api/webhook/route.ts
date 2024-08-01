import { headers } from "next/headers"

export async function POST(req: Request){
    try {
        const body = await req.text()
        const signature = headers().get('stripe-signature')
        if (!signature) { return new Response('Invalid signature', {status: 400})}

        
        


    } catch (err) {


    }
}