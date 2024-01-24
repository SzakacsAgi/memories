export default function Tab({title, onClick, isSelected}){
    return(
        <button onClick={onClick} className={isSelected ? "active" : ''}>{title}</button>
    )
}