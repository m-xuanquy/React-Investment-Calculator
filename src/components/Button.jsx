export default function Button({children, id, onSelect}) {
    return (
        <button onClick={onSelect} id={id}>{children}</button>
    );
}