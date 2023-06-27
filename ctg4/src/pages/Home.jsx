import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className="px-2" style ={{color: "#56a8d0", lineHeight: 2}}>Home</h1>
            <h3 className="px-3">Levels</h3>
                <div className="fluid-container">
                    <div className="row px-3">
                        <div className="col-sm-6">
                            <div className="card px-3">
                                <div className="card-body">
                                    <Link to="/level1" className="btn btn-outline-success ">Level 1</Link>
                                    <Link to="/level2" className="btn btn-outline-success ">Level 2</Link>
                                    <Link to="/level3" className="btn btn-outline-success ">Level 3</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;