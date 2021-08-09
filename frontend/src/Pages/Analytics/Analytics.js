import InnerSideBar from "../../Components/InnerSideBar/InnerSideBar"
import Layout from "../../Components/Layout/layout"
import Card from "../../Components/Card/Card"
import ButtonDropDown from "../../Components/buttonDropDown"
import MiniChart from "../../Components/MiniChart";
import Table from "../../Components/Table/table";
const Analytics = ({ allClinics, allIssues,meResult }) => {

    if (!meResult.data) {
        return (<>loading...</>)
    }

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
    const tableHeaders = [
        {
            id: 1,
            title: 'Staff Name',
        },
        {
            id: 2,
            title: 'Efficiency Delta',
        },
        {
            id: 3,
            title: 'NPS Delta',
        },
        {
            id: 4,
            title: 'Efficiency',
        },
        {
            id: 5,
            title: 'Reported Issues',
        }
    ]

    return (
        <>
            <Layout meResult={meResult.data.me && meResult.data.me}>
                <div className="container-fluid px-5">
                    <h2 className="py-4">Analytics</h2>
                    <div className="row">
                        <div className="col-12 col-sm-3 col-xl-auto px-sm-2 px-0 bg-light d-flex rounded sticky-top overflow-auto">
                            <InnerSideBar allClinics={allClinics && allClinics} />
                        </div>
                        <div className="col d-flex  px-sm-4 px-0  flex-column h-sm-100">
                            <main className="row  mb-3">
                                <div className="col">
                                    <Card title="issues">
                                        <div className="row overflow-auto flex-row">
                                            {allIssues.data && allIssues.data.issues.map((issue) =>
                                                <ButtonDropDown object={issue} className='w-max-content me-2' />
                                            )}
                                        </div>
                                    </Card>
                                </div>
                            </main>
                            <main className="row  mb-3">
                                <div className="col mb-3 mb-xl-0">
                                    <Card title="Foot fall">
                                        <div className="row">
                                            <MiniChart data={dummydata} label='Patients' />
                                        </div>
                                    </Card>
                                </div>
                                <div className="col mb-3 mb-xl-0">
                                    <Card title="Patient Satisfaction">
                                        <div className="row">
                                            <MiniChart data={dummydata} label='NPS' />
                                        </div>
                                    </Card>
                                </div>
                                <div className="col">
                                    <Card title="Revenue">
                                        <div className="row">
                                            <MiniChart data={dummydata} label='KENYAN SHILLINGS' />
                                        </div>
                                    </Card>
                                </div>
                            </main>
                            <main className="row mb-3">
                                <div className="col">
                                    <Card title="Patients">
                                        <Table tableHeaders={tableHeaders}/>
                                    </Card>
                                </div>
                            </main>
                            <main className="row">
                                <div className="col">
                                    <Card title="Staff">
                                        <Table tableHeaders={tableHeaders}/>
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