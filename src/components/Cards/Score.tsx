import React from 'react'


interface ContainerProps{
    score:any
}
export const Score : React.FC<ContainerProps> = ({score}) => {
    return(
        <div className="score-container">
            <div className="score-page">
                <h4>You've got {score} out of 10 answers right </h4>
            </div>
        </div>
    )

}