export default function Card(props) {
    console.log(props)
    return (
        <>
            <article className='m-4 w-60'>
                <div>
                    <div>
                      <img src={`/images/${props.img}`} className='w-full'/>
                    </div>
                    <div className='py-4 px-2'>
                        <div className="flex gap-2 items-center">
                            <img src="/images/Star.svg" className='w-5'/>
                            <div className='flex gap-2'>
                                <p>{props.rating}</p>
                                <p className='font-light'>({props.reviewCount}).</p>
                                <p className='font-light'>{props.country}</p>
                            </div>
                        </div>
                       <div className='mt-1'>
                        <p className='font-light text-sm'>{props.title}</p>
                        <p className='font-bold'>From ${props.price}<span className='font-light'> /person</span></p>
                       </div>
                    </div>
                </div>
            </article>
        </>
    );
}