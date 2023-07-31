function Form({children}) {

    return (
        <form className="border border-white grid grid-cols-1 lg:grid-cols-3 container">
            <div className="border border-white px-10 py-3">hello</div>
            <div className="border border-white px-10 py-3">hello</div>
            <div className="border border-white px-10 py-3">hello</div>
            <div className="border border-white px-10 py-3">hello</div>
            {children}
        </form>
    )
}

export default Form;