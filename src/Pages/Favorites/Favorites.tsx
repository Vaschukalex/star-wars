import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavoriteCharacters } from "../../redux/actions/characterActions";
import { useDispatch } from "react-redux";
const Favorites = () => {
    const favorite_characters = useSelector((state: any) => state.favoriteCharacters);
    const dispatch = useDispatch();
    const renderList = favorite_characters.favotite_characters.map((character: any, index: number) => {
        const { name, id } = character;
        const image = require(`../../img/characters/${id}.jpg`);

        return (

            <div className="favorite_item">
                {Object.keys(character).length === 0 ? (
                    <li className="list-group-item" key={index}>The favorite list is empty. Add some of your favorite characters</li>
                ) : (
                    <li className="list-group-item" key={index}>
                        <div className="row">
                            <div className="col-2"><img className="favorite_character_img" src={image.default} alt="Character" /></div>
                            <div className="col-6"><h2 className="favorite_character_title">{name}</h2></div>
                            <div className="col-4 favorite_button_block">
                                <Link to={`/characters/${id}`} key={index}>
                                    <button type="button" className="btn btn-warning">More info</button>
                                </Link>
                                <button onClick={(e) => { dispatch(removeFromFavoriteCharacters({ name: name, id: id })) }} type="button" className="btn btn-outline-danger">Delete</button>

                            </div>
                        </div>



                    </li>

                )}



            </div>
        )
    });
    return (
        <div className="favorites_wrapper">
            <div className="favorites_background">
                <div className="list_group_wrapper" >
                    <ul className="list-group">
                        {Object.keys(favorite_characters.favotite_characters).length === 0 ? (
                            <li className="list-group-item alert_add" >The favorite list is empty. Add some of your favorite characters</li>

                        ) : (

                            <>{renderList}</>
                        )}

                    </ul>
                </div>
                <div id="stars"></div>
                <div id="stars2"></div>
            </div>
        </div>
    )


}
export default Favorites;