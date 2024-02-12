const SectionHeading = (props:any) => {
    return(
        <div className='section-title pb-3'>
            <h2 className='fw-bold'>{props.darkTitle}<span className='text-secondary'>
                {props.lightTitle}</span></h2>
        </div>
    )
}


export default SectionHeading