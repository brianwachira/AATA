import { Link } from 'react-router-dom';
import InnerSideBar from "../../Components/InnerSideBar/InnerSideBar"
import Layout from "../../Components/Layout/layout"
import Card from "../../Components/Card/Card"
import ButtonDropDown from "../../Components/buttonDropDown"
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
                            <main className="row overflow-auto">

                                <div className="col">
                                    <Card title="issues">
                                        <div className="row overflow-auto flex-row">
                                            {issues.map((issue) =>
                                                <ButtonDropDown object={issue} className='w-max-content me-2'/>
                                            )}
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