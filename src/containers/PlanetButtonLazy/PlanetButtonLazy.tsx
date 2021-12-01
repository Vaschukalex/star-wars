import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlanets } from "../../redux/actions/characterActions";
import axios from "axios";
import Popup from 'reactjs-popup';
const PlanetButtonLazy = (props: any) => {
    const planets = useSelector((state: any) => state.planets);
    const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, population } = planets.planets;
    console.log(name);
    const dispatch = useDispatch();
    const fetchCharacters = async () => {
        const response: any = await axios
            .get(props.planetUrl)
            .catch((err) => {
                console.log("Error:", err);
            });
        console.log(response.data);
        dispatch(setPlanets(response.data));
    }
    useEffect(() => {
        fetchCharacters();

    }, [props.planetUrl])
    var palanetId = props.planetUrl.match(/\d+/);
    var image: any;

    try {
        image = require(`../../img/planets/${palanetId}.jpg`);
    } catch (error) {
        image = require(`../../img/planets/2.jpg`);
    }

    return (
        <div className="character_detail_planet_wrapp">
            <h2>Planet: {name}</h2>
            <Popup trigger={<button type="button" className="btn btn-warning">Show Planet info</button>} modal>
                <div className="row">
                    <div className="col-sm character_detail_planet_popup_img">
                        <img src={image.default} alt="planet" />
                    </div>
                    <div className="col-sm character_detail_planet_desc">
                        <h4><span>Name:</span> {name}</h4>
                        <h4><span>Population: </span>{population}</h4>
                        <h4><span>Rotation Period:</span> {rotation_period} days</h4>
                        <h4><span>Orbital Period:</span> {orbital_period} days</h4>
                        <h4><span>Diameter:</span> {diameter} km</h4>
                        <h4><span>Climate:</span> {climate}</h4>
                        <h4><span>Gravity:</span> {gravity}</h4>
                        <h4><span>Terrain:</span> {terrain}</h4>

                    </div>
                </div>

            </Popup>

        </div>
    )

}
export default PlanetButtonLazy;