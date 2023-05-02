class Polygon {
    constructor(integers) {
        this.sideLengths = integers
    }
    get countSides() {
        return this.sideLengths.length
    }
    get perimeter() {
        let p = 0
        for (const side of this.sideLengths) {
            p += side
        }
        return p
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            for (const side of this.sideLengths) {
                if (this.perimeter - side <= side) {
                    return false
                }
            }
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4 && this.perimeter > 0) {
            for (const side of this.sideLengths) {
                if (this.perimeter / 4 != side) {
                    return false
                }
                return true
            }
            return true
        } else {
            return false
        }
    }
    get area() {
        return (this.perimeter / 4) ** 2
    }
}