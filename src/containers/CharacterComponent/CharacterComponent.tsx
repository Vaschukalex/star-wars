import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import ldsa from '../../img/characters/1.jpg'
import { addToFavoriteCharacters } from "../../redux/actions/characterActions";
import { useDispatch } from "react-redux";

const CharacterComponent = () => {
    const characters = useSelector((state: any) => state.allCharacters.characters);
    const favoriteCharacters = useSelector((state: any) => state.favoriteCharacters);
    const dispatch = useDispatch();
    const renderList = characters.map((character: any, index: number) => {
        const { name, url } = character;
        var characterId = url.match(/\d+/);
        const image = require(`../../img/characters/${characterId}.jpg`);
        return (
           
                <div className="col-sm characters_card">
                    <div className="card">
                    
                        <div className="card-body card_body_character">
                        <img className="card_img_top" src={image.default} alt="Character"/>
                           
                           
                            <div className="card_header_block"><h5 className="card-title">{name}</h5></div> 
                            <div className="btn_character_wrapp">
                            <Link to={`/characters/${characterId}`} key={index}>
                            <button type="button" className="btn btn-warning">View More</button>
                            </Link>
                            {favoriteCharacters.favotite_characters.find(element => element.id[0] == characterId) ? (
                                <button type="button" className="btn btn-success">SELECTED ✓</button>
                            
                            ):(
<button onClick={(e) => {dispatch(addToFavoriteCharacters({name:name,id: characterId}))}} type="button" className="btn btn-outline-danger">Add to favorite</button>

                            )}
                            </div>

                            {/* <div className="card-text">
                                <p>{name}</p>
                                <p>{height}</p>
                                <p>{mass}</p>
                                <p>{hair_color}</p>
                                <p>{skin_color}</p>
                                <p>{eye_color}</p>
                                <p>{birth_year}</p>
                                <Link to={`/characters/${characterId}`} key={index}>
                                <p>{gender}</p>
                                </Link>
                            </div> */}
                            {/* <a href=" " className="card-link">Card link</a>
        <a href=" " className="card-link">Another link</a> */}
                        </div>
                        
                    </div>
              
                </div>

            
        )
    });
    return <>{renderList}</>

}
export default CharacterComponent;