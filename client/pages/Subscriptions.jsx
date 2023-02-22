import React from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import SubscriptionCard from '@components/SubscriptionCard/SubscriptionCard'

import { subscriptionPrices } from 'data/subscriptionPricing/subscriptionPricing'

export default function Subscriptions() {
    const auth = useSelector(state => state.auth);

    const handleSubscription = (details) => {
        axios.post('http://localhost:8000/create-checkout-session', {
            title: details.title,
            price: details.price,
            email: auth.email
        })
        .then((response) => {
            if(response.data.url) {
                window.location.href = response.data.url
            }
        })
    }

    return (
        <div className='m-4 p-4'>
            <h1 className='text-center fw-bolder'>Subscription Packages</h1>
            <h5 className='text-center fw-bolder'>Our Subscription Packages</h5>
            <p className='text-center mb-0'>Our ICO template will be a perfect platform for presenting your ICO launch.</p>
            <p className='text-center mt-0'>This landing page comes in Great and Clean design</p>
            <div className='d-flex justify-content-around align-items-center'>
                {
                    subscriptionPrices.map(subscriptionPrice => <SubscriptionCard 
                        key={subscriptionPrice.id}
                        id={subscriptionPrice.id}
                        title={subscriptionPrice.title}
                        price={subscriptionPrice.price}
                        eth={subscriptionPrice.eth}
                        token={subscriptionPrice.token}
                        bonus={subscriptionPrice.bonus}
                        handleSubscription={handleSubscription}
                    />)
                }
            </div>
        </div>
    )
}
