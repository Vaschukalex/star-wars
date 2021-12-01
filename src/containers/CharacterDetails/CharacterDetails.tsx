import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedCharacter, selectedCharacters, addToFavoriteCharacters } from "../../redux/actions/characterActions";

const CharacterDetails = () => {
    const character = useSelector((state:any) => state.character);
    const favoriteCharacters = useSelector((state: any) => state.favoriteCharacters);
    const {name, skin_color, mass, height, hair_color, gender, eye_color, birth_year, homeworld } = character;
    const {characterId} = useParams();
    const  dispatch = useDispatch();
  

    const fetchCharacterDetail = async () =>{
        const response:any = await axios.get(`https://swapi.dev/api/people/${characterId}`)
        .catch(err => console.log("Error", err));

        dispatch(selectedCharacters(response.data))
    }
    useEffect(() =>{
      if(characterId && characterId !== "") fetchCharacterDetail();
      return () =>{
          dispatch(removeSelectedCharacter())
      }
    }, [characterId]);
    const image = require(`../../img/characters/${characterId}.jpg`);
 return(
<div className="character_detail_wrapper">
<div className="card character_details_card">
  <div className="card-body">

<div className="container">
    {Object.keys(character).length === 0 ? (
        <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
    ) : (
        <div className="row">
        <div className="col-4">
          <img className="character_details_img" src={image.default} alt="Character"/>
        </div>
        <div className="col-5">
          <p className="character_details_name">{name}</p>
          <p>Height: <span>{height}</span></p>
          <p>Mass: <span>{mass}</span></p>
          <p>Hair: <span>{hair_color}</span></p>
          <p>Eye Color: <span>{eye_color}</span></p>
          <p>Gender: <span>{gender}</span></p>
          <p>Birth Year: <span>{birth_year}</span></p>
        </div>
        <div className="col-3 character_details_button_wrapp">
        {favoriteCharacters.favotite_characters.find(element => element.id[0] == characterId) ? (
           <button type="button" className="btn btn-success">SELECTED ✓</button>
        
        ):(
<button onClick={(e) => {dispatch(addToFavoriteCharacters({name:name,id: characterId}))}} type="button" className="btn btn-outline-danger">Add to Favorite</button>
        )}
                                <button type="button" className="btn btn-warning">Show Planet info</button>
                                
        </div>
      </div>
    )}
  </div>
</div>
</div>
<div id="stars"></div>
                <div id="stars2"></div>
</div>
 )
}
export default CharacterDetails;