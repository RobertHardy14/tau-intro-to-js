const cookie = {
    name: "chocolate chip",
    isGlutenFee: false,
    eatCookie: function () {
        console.log("I'm eating " + this.name)
    }
}

cookie.eatCookie()

class Cookie {
    constructor(name, isGlutenFee) {
        this.name = name
        this.isGlutenFee = isGlutenFee
    }

    eatCookie() {
        console.log("I'm eating " + this.name)
    }
}

const myCookie = new Cookie("Iced Oatmeal", false)
myCookie.eatCookie()