import AppContainer from "../AppContainer/AppContainer";

const Add = () => {
    return (
        <AppContainer title="Add new Coin">
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" className="form-control"></textarea>
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <button type="button" className="btn btn-success">Add</button>
                </div>
            </form>
        </AppContainer>
    );
}

export default Add;
