import { Link } from "react-router-dom";

import "./Header.css";



const Header = () => {
  return (
        <div class="container">
            <div class="form">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fflor-de-lotus_1891657&psig=AOvVaw07SjN34KevPQMf_St1GCmA&ust=1678233553579000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCdsqnByP0CFQAAAAAdAAAAABAH"/>
                <h3>Confira o clima de uma cidade:</h3>
                <div class="form-input-container">
                    <input
                        type="text"
                        placeholder="Digite o nome da cidade"
                        id="city-input"
                    />
                    <button id="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>
  );
};

export default Header;