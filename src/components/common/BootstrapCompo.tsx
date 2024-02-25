type PropsType = {
    color?: string
}
export const Spinner = (props: PropsType) => {
    return <div className={`d-flex mx-auto spinner-border spinner-border-sm text-${props.color ? props.color : 'light'}`} role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
}