import React from 'react'

export default function ProposalCard() {
    return (

        <div className="card card-body bg-transparent border border-secondary-subtle">
            <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">

                <div className="media-body">
                    <h6 className="media-title font-weight-semibold">
                        <a href="#" data-abc="true">0xAAB8...7E9A</a>
                    </h6>

                    <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                        <li className="list-inline-item"><a href="#" className="text-muted" data-abc="true">BIP-6.1: EduDAO Launch</a></li>
                    </ul>

                    <p className="mb-3 text-dark-emphasis">Context The proposal below will initiate the formal launch of EduDAO, the planned delegation of voting rights and the deployment of the first tranche of funding, allowing our community to begin its journey. Proposal By voting ‘Yes’ on this proposal, you approve: The official launch of EduDAO The adoption of selection criteria for the initial bootstrapping Steering Committee The disbursement of the first tranche of funding in accordance with the original proposal</p>

                    <p>4 days left</p>
                </div>

                <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                    <button className='btn btn-success'>Active</button>
                </div>
            </div>
        </div>



    )
}
