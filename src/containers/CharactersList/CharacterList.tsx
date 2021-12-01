import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterComponent from "../CharacterComponent/CharacterComponent";
import axios from "axios";
import { removeSelectedCharacters, setCharacters } from "../../redux/actions/characterActions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const CharacterList = () => {
    const [nextClass, setNextClass] = useState("page-item");
    const [prevClass, setPrevClass] = useState("page-item");
    const characters = useSelector((state: any) => state.allCharacters.characters);
    const dispatch = useDispatch();
    var { pageNumber } = useParams();
    const fetchCharacters = async () => {
        const response: any = await axios
            .get(`https://swapi.dev/api/people/?page=${pageNumber}`)
            .catch((err) => {
                console.log("Error:", err);
            });
        dispatch(setCharacters(response.data.results));
    }

    useEffect(() => {
        if (pageNumber && pageNumber !== "" && Number(pageNumber) < 10 && Number(pageNumber) > 0) {
            fetchCharacters();
            if (Number(pageNumber) > 8) {
                setNextClass('page-item disabled');
            }
            else if (Number(pageNumber) <= 1) {
                setPrevClass('page-item disabled');
            }
            else {
                setNextClass('page-item');
                setPrevClass('page-item');
            }
        }
        return () => {
            dispatch(removeSelectedCharacters())
        }
    }, [pageNumber])


    return (
        <div className="character_list_wrapper">
            <div className="character_list_background">
                {Object.keys(characters).length === 0 ? (
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>

                ) : (
                    <div className="container">
                        <div className="row filter_search_row">
                            <div className="col-sm ">search</div>
                            <div className="col-sm ">filter</div>
                        </div>
                        <div className="row characters_row">
                            <CharacterComponent />
                        </div>
                        <div className="row pagination_row">
                            <div className="col-sm pagination_col">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className={prevClass}>

                                            <Link className="page-link" to={`/characters/list/${Number(pageNumber) - 1}`}>
                                                <span aria-hidden="true">&laquo;</span>
                                            </Link>
                                        </li>

                                        <li className={nextClass}>
                                            <Link className="page-link" to={`/characters/list/${Number(pageNumber) + 1}`}>
                                                <span aria-hidden="true">&raquo;</span>
                                            </Link>

                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                )}
                <div id="stars"></div>
                <div id="stars2"></div>
            </div>
        </div>
    )

}
export default CharacterList;