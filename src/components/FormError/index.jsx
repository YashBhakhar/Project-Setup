const Validation = ({errors,message,genre}) => {
    return (
            errors ? 
                <div className={'mt-1 text-[#dc3545] text-[80%]'}>{message}</div>
            : '' 
    )
}
export default Validation
