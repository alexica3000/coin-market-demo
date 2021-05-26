import AppContainer from "../AppContainer/AppContainer";
import {useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom'
import api from "../../api";

const Edit = () => {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [author, setAuthor] = useState(null);
    const [country, setCountry] = useState(null);
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        api.getOneCoin(id).then(r => {
            if (r.data.data) {
                const coin = r.data.data;
                setName(coin.name);
                setDescription(coin.description);
                setAuthor(coin.author);
                setCountry(coin.country);
            }
        });
    }, [id]);

    const changeCoin = () => {
        const coin = {id, name, description, author, country};

        api.updateCoin(coin).then(r => {
            if (r.data.data) {
                history.push('/');
            }
        });
    };

    return (
        <>
            {name && description &&
                <AppContainer title="Edit the Coin">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                type="text"
                                className="form-control"
                                defaultValue={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Author</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={author}
                                onChange={e => setAuthor(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Country</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={country}
                                onChange={e => setCountry(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={changeCoin}
                            >Save</button>
                        </div>
                    </form>
                </AppContainer>
            }
        </>
    );
}

export default Edit;
