export default function Circle(props) {
    return (
        <a href={props.link} >
            <div
                className='h-16 w-16 phonemax:h-12 phonemax:w-12 border-2 rounded-full justify-center flex hover:bg-gray-300 cursor-pointer'
            >
                <img className='m-auto w-7 h-7' src={props.info} />
            </div>
        </a>
    )
}