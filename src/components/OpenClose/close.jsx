export default function Close(props) {

    const handleclick = () => {
        props.onClick()
    }

    return (
        <div className={props.className}>
            <div onClick={handleclick} className='transition-all' >
                <div style={{ transform: 'rotate(45deg)' }} onClick={handleclick} className='bg-black top-3 h-0.5 w-8 rounded-md my-1 absolute rotate-45' />
                <div onClick={handleclick} className='bg-black h-0.5 w-8 rounded-md my-1 absolute top-3 opacity-0' />
                <div style={{ transform: 'rotate(-45deg)' }} onClick={handleclick} className='bg-black h-0.5 w-8 rounded-md my-1 absolute top-3 -rotate-45' />
            </div>
        </div>
    )
}