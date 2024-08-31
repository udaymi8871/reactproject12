const RenderData = ({
    data,
}: {
    data: any[]
}) => {
    //const UserData = data.filter((item: any) => item.age % 2 === 0);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((item: any) => item.id % 2 === 0)
                        .map((item: any) => (
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default RenderData;