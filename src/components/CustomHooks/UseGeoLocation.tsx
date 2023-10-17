import { useEffect, useState } from 'react';

const UseGeoLocation = () => {
    const [location, setLocation] = useState<any | null>({
        loaded: false,
        coordinates: { lat: 'nothing', lng: '' }
    });

    const onSuccess = (location: any) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    };
    const onError = (error: any) => {
        setLocation({
            loaded: true,
            error
        });
    };
    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            });
        }
        handleLocation();
    }, []);
    return location;
};

export default UseGeoLocation;
