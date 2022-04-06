import React, {useEffect, useState} from "react";
import "./weather-form.styles.scss";
import CustomSelect from "../custom-select/custom-select.component";
import CustomButton from "../custom-button/custom-button.component";
import {getAllCountries} from "../../services/country.service";
import {Country} from "../../model/country.model";
import {getCitiesByCountry} from "../../services/city.service";
import {City} from "../../model/city.model";
import CustomFormField from "../form-field/form-field.component";

const WeatherForm = () => {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    let c: Country;
    let city: City;

    useEffect(() => {
        let mounted = true;

        getAllCountries().then(data => {
            if (mounted) {
                setCountries(data);
                mounted = false;
            }
        });
    }, []);

    const getAllCities = (c: Country) => {
        getCitiesByCountry(c).then(data => {
            if (data) {
                setCities(data);
            }
        });
    }

    const handleCountryChange = (event: any) => {
        c = event.target.value;
        getAllCities(c);
    }

    const handleCityChange = (event: any) => {
        city = event.target.value;
        console.log(city)
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex bg-white py-8 shadow rounded-lg sm:px-10">
            <CustomSelect handleChange={handleCountryChange}>{countries}</CustomSelect>
            <CustomFormField type="text" name="test" id="test" placeholder="search"/>
            <CustomButton name="Search"/>
        </div>
    );
}

export default WeatherForm;
