import AppContainer from "../AppContainer/AppContainer";
import {useState} from "react";
import {useHistory} from 'react-router-dom';
import api from "../../api";

const Add = () => {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [author, setAuthor] = useState(null);
    const [country, setCountry] = useState(null);
    const history = useHistory();

    const addCoin = () => {
        const coin = {name, description, author, country};

        api.addCoin(coin).then(r => {
            if (r.data.data) {
                history.push('/');
            }
        });
    };

    return (
        <AppContainer title="Add new Coin">
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={addCoin}>Add</button>
                </div>
            </form>
        </AppContainer>
    );
}

export default Add;
