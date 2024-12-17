

import { Button, Card, } from "antd";
import { TBookingInfo } from "../../../types/service.types";
import { toast } from "sonner";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";



const stripe = useStripe()
const elements = useElements()


const CheckOutForm = ({bookingInfo}:{bookingInfo:TBookingInfo})=>{
   
    const handleSubmit = async (event: React.FormEvent) => {
        const toastId = toast.loading("Data Proccessing...")
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement!
        });
        if (error) {
            toast.error(error.message, { id: toastId, duration: 4000 })
        } else {
            // send response to the server
            const response = await fetch("/localhost:5000/api/v1/bookings/makey-payment", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ paymentId: paymentMethod.id, total:bookingInfo.totalAmount })
            })
            const paymentResult = await response.json()

            if (paymentResult.success) {
                toast.success(paymentResult.message, { id: toastId })
            
            } else if (!paymentResult.success) {
                toast.error(paymentResult?.message, { id: toastId, duration: 4000 })
            }
            else {
                toast.error(paymentResult?.error?.message, { id: toastId, duration: 4000 })
            }
        }
    }
    return (
        <>
        <Card className="p-6 text-center bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <CardElement />
                <Button type="primary"
                    size="large"
                    htmlType="submit"
                    disabled={!stripe}
                    className="w-full mt-4">Pay and Confirm</Button>
            </form>

        </Card>
        {/* <SuccessModal id={paymentId} total={bookingInfo?.totalAmount} isSuccessModalOpen={isSuccessModalOpen} setIsSuccessModalOpen={setIsSuccessModalOpen} totalRoom={bookingInfo?.room?.length} totalSlot={slotNumber} /> */}
    </>
    )
}


export default CheckOutForm



