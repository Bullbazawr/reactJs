const Box = ({children}) => {
    return (
        <div style={{border:'1px solid black', padding:'10px', margig:'10px'}} className="box">
            {children}
        </div>
    )
}

export default Box