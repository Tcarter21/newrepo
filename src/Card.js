
import './App.css';
function Card() {
    return (
        <div className="row">
            <div className="col-4">
                <div className="card bg-primary text-light">
                    <div className="card-body">
                        <h3 className="card-title">Card 01</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

                <div className="col-4">
                    <div className="card bg-danger text-light">
                        <div className="card-body">
                            <h3 className="card-title">Card 02</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card bg-success text-light">
                        <div className="card-body">
                            <h3 className="card-title">Card 03</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Card;
