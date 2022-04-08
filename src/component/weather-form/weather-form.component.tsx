import React, {useEffect, useState} from "react";
import "./weather-form.styles.scss";
import CustomSelect from "../custom-select/custom-select.component";
import {getAllCountries} from "../../services/country.service";
import CustomFormField from "../form-field/form-field.component";
import {getCityAutocomplete} from "../../services/city.service";
import cloudy from "../../assets/icons/cloudy.png";

type WeatherFormProps = {
    addWeather: (country: string, city: string) => void;
}

const WeatherForm = ({addWeather}: WeatherFormProps) => {
    const [countries, setCountries] = useState([]);
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        let mounted = true;

        getAllCountries().then(data => {
            if (mounted) {
                setCountries(data);
                mounted = false;
            }
        });
    }, []);

    const handleCountryChange = (event: any) => {
        setCountry(event.target.value);
    }

    const handleCityChange = (event: any) => {
        setCity(event.target.value);
        changeCityList(event.target.value);
    }

    const changeCityList = (value: string) => {
        if (country && value) {
            getCityAutocomplete(country, value).then(r => {
                setSuggestions(r);
            });
        }
    }

    const handleClick = () => {
        if (country && city) {
            addWeather(country, city);
        }
    }

    const onSuggestionHandler = (text: string) => {
        setCity(text);
    }

    return (
        <div className="mt-14 sm:mx-auto sm:w-full sm:max-w-md flex bg-white py-8 shadow rounded-lg sm:px-10">
            <img src={cloudy} alt="cloudy" className="w-11 h-9 mr-5"/>
            <CustomSelect
                handleChange={handleCountryChange}
            >
                {countries}
            </CustomSelect>
            <CustomFormField
                type="text"
                name="test"
                id="test"
                placeholder="Please enter your city"
                handleChange={handleCityChange}
                suggestions={suggestions}
                onSuggestHandler={onSuggestionHandler}
                value={city}
            />
            <button className="ml-5" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </button>
        </div>
    );
}

export default WeatherForm;
