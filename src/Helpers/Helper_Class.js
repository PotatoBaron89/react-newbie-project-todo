class Helper {
    generateNumber(lowerVal, upperVal, isFloor) {
        let seed = Math.random() * upperVal + lowerVal
        if (!isFloor) return seed
        return Math.floor(seed)
    }
    loremPictum() {
        return <img src={`https://picsum.photos/seed/{this.generateNumber}/200/300`} alt="lorem pictum" />
    }

}


export { Helper }
