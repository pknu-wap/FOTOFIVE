import React from 'react'
import './UserCardBlock.scss'

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(photo => (

            <tr>
                <td>
                    <img src={renderCartImage(photo.images)}/>
                </td>
                <td>
                    {photo.quantity} 개 
                </td>
                <td>
                    {photo.price}
                </td>
                <td>
                    <button>
                        Remove
                    </button>
                </td>
            </tr>
        ))
    )

    return (
        <div className="userCardBlock">
            <table>
                <thead>
                    <tr>
                        <th>사진 이미지</th>
                        <th>사진 갯수</th>
                        <th>가격</th>
                        <th>장바구니에서 삭제</th>
                    </tr>
                </thead>

                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
