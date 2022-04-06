import React, {useEffect, useState} from "react";
import "./weather-form.styles.scss";
import CustomSelect from "../custom-select/custom-select.component";
import {getAllCountries} from "../../services/country.service";
import {Country} from "../../model/country.model";
import CustomFormField from "../form-field/form-field.component";
import {City} from "../../model/city.model";

type WeatherFormProps = {
    addWeather: (country: Country, city: City) => void;
}

const WeatherForm = ({addWeather}: WeatherFormProps) => {
    const [countries, setCountries] = useState([]);
    const [city, setCity] = useState({cityName: ""});
    let country: Country;

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
        country = event.target.value;
    }

    const handleCityChange = (event: any) => {
        setCity({cityName: event.target.value});
    }

    const handleClick = () => {
        if (country && city) {
            addWeather(country, city);
        }
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex bg-white py-8 shadow rounded-lg sm:px-10">
            <CustomSelect handleChange={handleCountryChange}>{countries}</CustomSelect>
            <CustomFormField type="text" name="test" id="test" placeholder="Please enter your city"
                             handleChange={handleCityChange}/>
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
