import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './HistoryPage.scss'

function HistoryPage(props) {

    return (
        <div className="historyPage">
            <Header />
            <div className="historyTitle">
                <h1>HISTORY</h1>
            </div>
            <div className="historyTableInner">
                <table className="historyTable">
                    <thead>
                        <tr>
                            <th>결제 아이디</th>
                            <th>제목</th>
                            <th>가격</th>

                        </tr>
                    </thead>
                    <tbody>
                        {props.user.userData && props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>$ {item.price}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    )
}

export default HistoryPage
