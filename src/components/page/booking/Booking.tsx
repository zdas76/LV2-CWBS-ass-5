

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe("process.env.VITE_Publishable_Key as string")
const Booking =()=>{
    let phone = "99085904598"
    let email = "sumonpaul@gmail.com"
    let totalAmount = 400;
    let userId = "66891464cab908947cd7231e"
    const room: { _id: string, date: string, slots: [] }[] = []
    // make booking info
    const bookingInfo = {
        totalAmount: totalAmount, email, user: userId, phone, room
    }

   
    return (
        <div>
            Booking

            <Elements stripe={stripePromise}>
                <CheckOutForm bookingInfo={bookingInfo}>
                </CheckOutForm>
            </Elements>

           
        </div>
    )
}

export default Booking