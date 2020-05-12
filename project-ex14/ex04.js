import fs from 'fs';
import update from 'react-addons-update';

let state;

state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateOrder = update(state.order, {
    receive: {  // 해당 패스 값을 변경
        $set: '서울시 강남구 논현동'
    },
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    products: { //배열 인덱스로 찾아서 변경 가능
        0: {
            amount: {
                $set: 5
            }
        },
        $push: [{ //배열요소 새로추가
            "no": "s001-001",
            "name": "블루양말",
            "price": 1000,
            "amount": 2
        }]
    },

})
// this.setState({
//     order: updateOrder
// })
console.log(state.order, updateOrder, state.order === updateOrder);
//======================================================================
