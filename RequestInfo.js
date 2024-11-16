//this page allows the user to send information to the seller

export function requestHeading() {
    return (
        <h1>"Request Information"</h1>
    );
}

export default function requestButton() {
    function handleButton() {
        <requestHeading />
    }

    return (
        <button onClick={handleButton}>Request Information</button>
    );
}