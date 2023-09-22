import Star from '../assets/Star.svg'
import Swimmer from '../assets/swimmer.svg'

export default function Card() {
    return (
        <>
            <article className='m-4 w-60'>
                <div>
                    <div>
                      <img src={Swimmer} className='w-full'/>
                    </div>
                    <div className='py-4 px-2'>
                        <div className="flex gap-2 items-center">
                            <img src={Star} className='w-5'/>
                            <div className='flex gap-2'>
                                <p>5.0</p>
                                <p className='font-light'>{"(6)"}.</p>
                                <p className='font-light'>USA</p>
                            </div>
                        </div>
                       <div className='mt-1'>
                       <p className='font-light'>Life lessons with Katie Zaferes</p>
                        <p className='font-bold'>From $136<span className='font-light'>/ person</span></p>
                       </div>
                    </div>
                </div>
            </article>
        </>
    );
}