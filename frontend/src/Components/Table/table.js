const Table = (props) => {

    const { tableHeaders, data } = props;

    if(!data){
        return (
            <>
                <p>Coming Soon!!!</p>
            </>
        )
    }
    return (
        <>
            <div className="table-responsive">
                <table className="table-striped table-hover">
                    <thead>
                        <tr>
                            {tableHeaders.map((tableHeader, index) =>
                                <th>
                                    <td>{tableHeader.title}</td>
                                </th>
                            )}
                            {data && data.map((item, index) =>
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                </tr>
                            )}
                        </tr>
                    </thead>
                </table>
            </div>
        </>)
}
export default Table;