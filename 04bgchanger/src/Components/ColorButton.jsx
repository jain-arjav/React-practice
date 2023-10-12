
function ColorButton({color, onClick }) {
    function colName(colors){
        return colors.charAt(0).toUpperCase() + colors.slice(1);
    }
    return (
        
           
        <button
            onClick={onClick}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: color }}
        >
            {colName(color)}
        </button>
    )
}


export default ColorButton