import React from 'react'

export default function SubscriptionCard(props) {
    
    return (
        <div class="card bg-dark text-center" style={{ width: "18rem" }}>
            <div class="card-body">
                <h5 class="card-title text-primary">{props.title}</h5>
                <h1 class="card-text">{props.price}</h1>
                <h6 class="card-text">{props.eth}</h6>
                <h6 class="card-text">{props.token}</h6>
                <button href="#" class="btn btn-primary w-100">Subscribe Now!</button>
            </div>
        </div>
    )
}
