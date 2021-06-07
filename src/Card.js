import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    width: '100%'
}
const Card = (props) => {
    return (
        <div className="card my-2" style={styles}>
            <img src={props.imageSource} className="card-img-top" alt={props.imageAlt} />
            <div className="card-body text-center">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
                <a href={props.buttonHref} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    )
};

export default Card;
