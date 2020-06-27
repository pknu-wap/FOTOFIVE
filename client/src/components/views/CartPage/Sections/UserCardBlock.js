import React from 'react'
import './UserCardBlock.scss'

function UserCardBlock(props) {
    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }
    console.log(props.photos)
    const renderItems = () => (

        props.photos && props.photos.map((photo, index) => (
            <tr key={index}>
                <td className="cartPhoto">

                    <img src={renderCartImage(photo.images)} />
                </td>
                <td>{photo.quantity} EA</td>
                <td>
                    {photo.price}
                </td>
                <td>
                    <button onClick={() => props.removeItem(photo._id)}>
                        Remove
                    </button>
                </td>
            </tr >
        ))
    )

    return (
        <div className="userCardBlock">
            <table>
                <thead>
                    <tr>
                        <th>사진 이미지</th>
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
