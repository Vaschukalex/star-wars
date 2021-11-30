import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedCharacter, selectedCharacters } from "../../redux/actions/characterActions";

const CharacterDetails = () => {
    const character = useSelector((state:any) => state.character);
    const {name, skin_color, mass, height, hair_color, gender, eye_color, birth_year } = character;
    const {characterId} = useParams();
    const  dispatch = useDispatch();
    console.log(character);

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
 return(

<div className="container">
    {Object.keys(character).length === 0 ? (
        <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
    ) : (
        <div className="row">
        <div className="col">
          Column
        </div>
        <div className="col">
          <p>{name}</p>
          <p>{skin_color}</p>
          <p>{mass}</p>
          <p>{height}</p>
          <p>{hair_color}</p>
          <p>{gender}</p>
          <p>{eye_color}</p>
          <p>{birth_year}</p>
        </div>
      </div>
    )}

</div>
 )
}
export default CharacterDetails;