const deg2rad = degrees => degrees * Math.PI / 180;
const rad2deg = radians => radians * 180 / Math.PI;
const sin = n => Math.sin(n);
const cos = n => Math.cos(n);
const clamp = (n) => Math.min(Math.max(n, -1), 1);

const getDistance = (latA, lonA, latB, lonB) => {
    const theta = lonA - lonB;
    let dist =
        sin(deg2rad(latA)) * sin(deg2rad(latB)) +
        cos(deg2rad(latA)) * cos(deg2rad(latB)) * cos(deg2rad(theta));
    dist = Math.acos(clamp(dist));
    dist = rad2deg(dist);
    let miles = dist * 60 * 1.1515;

    if (miles > 12450) {
        miles = 24900 - miles;
    }

    let km = Math.round(miles) * 1.609344;

    return Math.round(km);
};

const getTime = distance => (distance / 1000) * 60;

const getTimeBetween = (countryA, countryB) => {
    const [ latA, lonA ] = getLatLng(countryA);
    const [ latB, lonB ] = getLatLng(countryB);

    return getTime(getDistance(latA, lonA, latB, lonB));
}

