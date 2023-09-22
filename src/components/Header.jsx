// images:
import Logo from '../assets/airbnb.svg'

export default function Header() {
    return (
        <>
            <header className="shadow-lg">
                <nav className='flex items-center p-4'>
                    <img src={Logo} alt="airbnb logo" className='cursor-pointer'/>
                </nav>
            </header>
        </>
    );
}