import Item from "./Item";


const ItemList = ( {data} )=> {
    console.log(data)

    return (
        <div>
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;