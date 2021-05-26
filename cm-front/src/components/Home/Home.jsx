import {Link} from "react-router-dom";
import AppContainer from "../AppContainer/AppContainer";

const Home = () => {
    return (
        <AppContainer title="Virtual Coins Marketplace">
            <Link to='/add' className="btn btn-primary">Add New Coin</Link>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Author/Company</td>
                        <td>Country</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>
                            <Link to='/edit/1' className="btn btn-warning mx-2">Edit</Link>
                            <a href="#" className="btn btn-danger">Delete</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
}

export default Home;
