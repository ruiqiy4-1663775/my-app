function Flex() {
    return (
        <div className="flex flex-col border border-red-300 h-max w-1/3">
            <div >OHOHOHOHOH</div>
            <div className="flex border border-white space-x-10 grow min-h-0">
                <div> I am at left</div>
                <div className="flex flex-col border border-yellow-300 grow">
                    <div>I am at right</div>
                    <div>fdasf</div>
                    <div>fdasf</div>
                    <div>fdasf</div>
                    <div>fdasf</div>
                    <div>fdasf</div>
                    <div>fdasf</div>
                </div>
            </div>
        </div>
    )
}

export default Flex;