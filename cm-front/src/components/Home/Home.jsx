import {Link} from "react-router-dom";
import AppContainer from "../AppContainer/AppContainer";
import api from "../../api";
import {useEffect, useState} from "react";

const Home = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        api.getAllCoins().then((r) => {
            setCoins(r.data.data);
        });
    }, []);

    const renderCoins = () => {
        if (!coins) {
            return (<tr><td colSpan="5">Loading...</td></tr>);
        }

        if (coins.length === 0) {
            return (<tr><td colSpan="5">No coins available.</td></tr>);
        }

        return coins.map((coin) => (
            <tr key={coin.id}>
                <td>{coin.id}</td>
                <td>{coin.name}</td>
                <td>{coin.description}</td>
                <td>{coin.author}</td>
                <td>{coin.country}</td>
                <td>
                    <Link to={`/edit/${coin.id}`} className="btn btn-warning mx-2">Edit</Link>
                    <button className="btn btn-danger mx-2">Delete</button>
                </td>
            </tr>
        ))
    };

    return (
        <AppContainer title="Virtual Coins Marketplace">
            <Link to='/add' className="btn btn-primary">Add New Coin</Link>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td className="w-50">Description</td>
                            <td>Author/Company</td>
                            <td>Country</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCoins()}
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
}

export default Home;
