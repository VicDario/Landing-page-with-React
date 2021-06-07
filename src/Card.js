import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    width: '18rem'
}
const Card = (props) => {
    return (
        <div className="card" style={styles}>
            <img src={props.imageSource} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default Card;