export function NameAndType({userName, coordinatorType}) {
    return(
        <div>
            <div className="mx-[42px] flex flex-col desktop:flex-row tablet:flex-row justify-between font-bold my-6 text-[14px] desktop:text-[16px] tablet:text-[16px]">
                <span>Olá {userName}</span>
                <span>{coordinatorType}</span>
            </div>
        </div>
    )
}