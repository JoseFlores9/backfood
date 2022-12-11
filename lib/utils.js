addQuantity = (prods, quantities) => {
    let ids = {}
    quantities.map((prod, index) => ids[prod.id] = prod.quantity)
    let p = []
    prods.map((prod, index) => {
        p.push({
            _id: prod._id,
            title: prod.title,
            image: prod.image,
            quantity: ids[prod._id],
            price: prod.price
        })
    })
    return p
}

module.exports = {
    addQuantity
}