
const Payment = () => {
    return <div>
        <div className="row justify-content-center justify-content-xl-start ">
            <div className="col-md-6">
                <div>
                    <div className="section-heading py-4 text-center text-xl-start">
                        <h3 className="fw-bold text-primary">Payment & Payouts</h3>
                    </div>
                    <div className="description text-center text-xl-start">
                        <p>When you receive a payment for a order, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.</p>
                        <p>To get paid, you need to set up a payout method releases payouts about 24 hours after a guest scheduled time. The time it takes for the funds to appear in your account depends on your payout method.<a href="" className="text-black"> Learn more</a></p>
                    </div>
                    <div className="pt-3 text-center text-xl-start">
                        <button className="btn btn-primary rounded-pill fs-6">Add Payout Method</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Payment