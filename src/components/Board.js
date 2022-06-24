import React from 'react'

const Board = (props) => {
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
    }
    const dragOver = e => {
        e.preventDefault();
        
    }
    
    return (
        <>
            <div
                id={props.id}
                className={props.myclassName}
                onDrop={drop}
                onDragOver={dragOver}
                class="card bg-transparent  mb-3  col-3" >
                <div className="card-header top-purple  boardergrey boarderblue boarderpurple 
                boardergreen py-3 fw-bold fs-5">
                    {props.underReview} {props.opeBounties} {props.assignedInProgess} {props.closeRewarded}
                </div>
                <div className="card-body border-start border-end  mt-4">
                    {props.children}
                </div>
            </div>
        </>

    )
}

export default Board