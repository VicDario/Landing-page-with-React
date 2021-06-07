import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Card from './Card'

const CardsContainer = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6 col-xd-12">
                    <Card imageSource="https://picsum.photos/200/200?random=1"/>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <Card imageSource="https://picsum.photos/200/200?random=2"/>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <Card imageSource="https://picsum.photos/200/200?random=3"/>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <Card imageSource="https://picsum.photos/200/200?random=4"/>
                </div>
            </div>
        </div>
        </>
    )
}

//Card.PropTypes = {
//    imageSource: propTypes.string
//}

export default CardsContainer;