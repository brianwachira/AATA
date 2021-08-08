import InnerSideBar from "../../Components/InnerSideBar/InnerSideBar"
import Layout from "../../Components/Layout/layout"
import Card from "../../Components/Card/Card"
import ButtonDropDown from "../../Components/buttonDropDown"
import MiniChart from "../../Components/MiniChart";
const Analytics = () => {
    const issues = [
        {
            branchID: 1,
            title: "Wrong Prescription",
            description: "Opened late",
            filedBy: {
                id: 1,
                firstName: 'Ryan',
                lastName: 'Edision',
                nationalID: '22234322',
                phoneNo: '0978384920',
            },
            isSolved: false
        },
        {
            branchID: 1,
            title: "Opened late",
            description: "",
            filedBy: {
                id: 1,
                firstName: 'Ryan',
                lastName: 'Edision',
                nationalID: '22234322',
                phoneNo: '0978384920',
            },
            isSolved: false
        },
        {
            branchID: 1,
            title: "Bad receipts",
            description: "Opened late",
            filedBy: {
                id: 1,
                firstName: 'Ryan',
                lastName: 'Edision',
                nationalID: '22234322',
                phoneNo: '0978384920',
            },
            isSolved: false
        },
        {
            branchID: 1,
            title: "Late Check in",
            description: "Opened late",
            filedBy: {
                id: 1,
                firstName: 'Ryan',
                lastName: 'Edision',
                nationalID: '22234322',
                phoneNo: '0978384920',
            },
            isSolved: false
        },
        {
            branchID: 1,
            title: "Delay in Lab",
            description: "Opened late",
            filedBy: {
                id: 1,
                firstName: 'Ryan',
                lastName: 'Edision',
                nationalID: '22234322',
                phoneNo: '0978384920',
            },
            isSolved: false
        },
        {
            branchID: 1,
            title: "Careless waste disposal",
            description: "Opened late",
            filedBy: {
                id: 1,
                firstName: 'Ryan',
                lastName: 'Edision',
                nationalID: '22234322',
                phoneNo: '0978384920',
            },
            isSolved: false
        }
    ]
    const dummydata = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];
    return (
        <>
            <Layout>
                <div className="container-fluid px-5">
                    <h2 className="py-4">Analytics</h2>
                    <div className="row">
                        <div className="col-12 col-sm-3 col-xl-auto px-sm-2 px-0 bg-light d-flex rounded sticky-top">
                            <InnerSideBar />
                        </div>
                        <div className="col d-flex  px-sm-4 px-0  flex-column h-sm-100">
                            <main className="row  mb-3">
                                <div className="col">
                                    <Card title="issues">
                                        <div className="row overflow-auto flex-row">
                                            {issues.map((issue) =>
                                                <ButtonDropDown object={issue} className='w-max-content me-2' />
                                            )}
                                        </div>
                                    </Card>
                                </div>
                            </main>
                            <main className="row">
                                <div className="col">
                                    <Card title="Foot fall">
                                        <div className="row">
                                            <MiniChart data={dummydata} label='Patients'/>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col">
                                    <Card title="Patient Satisfaction">
                                        <div className="row">
                                            <MiniChart data={dummydata} label='NPS'/>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col">
                                    <Card title="Revenue">
                                        <div className="row">
                                            <MiniChart data={dummydata} label='KENYAN SHILLINGS'/>
                                        </div>
                                    </Card>
                                </div>
                            </main>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    )
}
export default Analytics;