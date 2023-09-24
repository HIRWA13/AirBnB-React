export default function Card(props) {
    console.log(props)
    let displayText
    if(props.item.openSpots === 0) {
        displayText="SOLD OUT"
    } else if(props.item.location === 'online') {
        displayText = "ONLINE"
    }
    return (
        <>
            <article className='m-4 w-60'>
                <div className="relative">
                    <div>
                      <img src={`/images/${props.item.img}`} className='w-full'/>
                    </div>
                    {displayText && <div className="absolute bg-white p-1 top-2 left-2 text-sm font-semibold">{displayText}</div>}
                    <div className='py-4 px-2'>
                        <div className="flex gap-2 items-center">
                            <img src="/images/Star.svg" className='w-5'/>
                            <div className='flex gap-2'>
                                <p>{props.item.rating}</p>
                                <p className='font-light'>({props.item.reviewCount}).</p>
                                <p className='font-light'>{props.item.country}</p>
                            </div>
                        </div>
                       <div className='mt-1'>
                        <p className='font-light text-sm'>{props.item.title}</p>
                        <p className='font-bold'>From ${props.item.price}<span className='font-light'> /person</span></p>
                       </div>
                    </div>
                </div>
            </article>
        </>
    );
}