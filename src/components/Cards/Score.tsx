import React from 'react'


interface ContainerProps{
    score:any
}
export const Score : React.FC<ContainerProps> = ({score}) => {
    return(
        <div className="score-page">
            Your Score:{score}
        </div>
    )

}