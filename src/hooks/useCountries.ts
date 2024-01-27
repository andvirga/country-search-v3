import React, { useEffect } from 'react';

export function useCountries (name: string) {
  const [countries, setCountries] = React.useState<string[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
        if (!name) return [];
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const countries = await response.json();
        console.log(countries)
        setCountries(countries);
    }
    fetchCountries();
  }, [name]);

  return countries;
}
