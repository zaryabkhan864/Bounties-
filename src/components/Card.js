import React from 'react'

const Card = (props) => {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    }
    const dragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    }
    return (
        <>
            <div id={props.id}
                className={props.myclassName}
                draggable={props.draggable}
                onDragStart={dragStart} 
                onDragOver={dragOver}>
                <div className=" px-3 pt-4 fw-bold fs-5 ">Write A Blogpost For DAOHelper</div>
                <div className="card-body  p-2 mt-2">
                    <p className="card-text fw-light p-2">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse varius enim in er</p>
                </div>
                <div className="card-footer px-1 bggrey  bgblue bgpurple bggreen py-2" >
                    <div className='d-inline p-1 fw-normal text-start'>Rewards:$5</div>
                    <div className='d-inline p-1 fw-normal text-end'>Time left:2 days</div>
                </div>
            </div>

        </>
    )
}

export default Card