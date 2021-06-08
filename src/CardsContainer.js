import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Card from './Card'

const CardsContainer = () => {
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 col-sm-6 col-xd-12">
                    <Card imageSource="https://picsum.photos/200/200?random=1" imageAlt="A nice picture" cardTitle="Card Title" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta nisl at ligula mattis, a." buttonLabel="Find Out More!" buttonHref="#"/>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <Card imageSource="https://picsum.photos/200/200?random=2" imageAlt="A nice picture" cardTitle="Card Title" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta nisl at ligula mattis, a." buttonLabel="Find Out More!" buttonHref="#"/>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <Card imageSource="https://picsum.photos/200/200?random=3" imageAlt="A nice picture" cardTitle="Card Title" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta nisl at ligula mattis, a." buttonLabel="Find Out More!" buttonHref="#"/>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <Card imageSource="https://picsum.photos/200/200?random=4" imageAlt="A nice picture" cardTitle="Card Title" cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta nisl at ligula mattis, a." buttonLabel="Find Out More!" buttonHref="#"/>
                </div>
            </div>
        </div>
        </>
    )
}

Card.propTypes = {
    imageSource: PropTypes.string,
    imageAlt: PropTypes.string,
    cardTitle: PropTypes.string,
    cardDescription: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonHref: PropTypes.string
}

export default CardsContainer;