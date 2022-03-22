import { ReactNode } from 'react';
import './Card.css';
// type myProps ={className:string};

// import 없이 React.ReactNode 로 써도 됨. import 하는 방식의 차이.
const Card = (props: { className: string; children: ReactNode }) => {
// 아래 경우엔 children type 지정 안해도 됨. 컴포넌트 자체 타입이 React.FC 이기 때문에.
// const Card: React.FC<myProps> = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;