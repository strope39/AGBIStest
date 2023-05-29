export const Location = async () => {
    return fetch("https://api.ipify.org/?format=json").then((responce) =>
        responce.json()
    );
};
export const Country = async (ip: string) => {
    const request = "http://ip-api.com/json/" + ip;
    return fetch(request)
        .then((responce) => responce.json())
        .then((data) => data.countryCode);
};
