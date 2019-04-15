function displayPrice(event: Event) {
    event.preventDefault();

    let price: Number = 0;

    const priceMap = new Map();
    priceMap.set("kind-1", new Map([["length-1", "4500"], ["length-2", "6500"], ["length-3", "7000"], ["length-4", "7000"]]));
    priceMap.set("kind-2", new Map([["length-1", "3500"], ["length-2", "3500"], ["length-3", "3500"], ["length-4", "3500"]]));
    priceMap.set("kind-3", new Map([["length-1", "6500"], ["length-2", "7000"], ["length-3", "7000"], ["length-4", "7500"]]));
    
    const priceDOM = document.getElementById("calc__display")!;
    const checkedLength = <HTMLInputElement>document.querySelector('input[name="length"]:checked')!;
    const checkedKind = <HTMLInputElement>document.querySelector('input[name="kind"]:checked')!;
    
    if (checkedLength && !checkedKind) {
        priceDOM.innerText = "Пожалуйста, выберите вид косичек!"
    }
    if (checkedKind && !checkedLength) {
        priceDOM.innerText = "Пожалуйста, выберите длину волос!"
    }
    if (!checkedKind && !checkedLength) {
        priceDOM.innerText = "Пожалуйста, выберите длину волос и вид косичек!"
    }
    if (checkedLength && checkedKind) {
        switch (checkedKind.id) {
            case "kind-1":
                const classic = priceMap.get("kind-1");
                price = classic.get(checkedLength.id);
                break;
            case "kind-2":
                const ghana = priceMap.get("kind-2");
                price = ghana.get(checkedLength.id);
                break;
            case "kind-3":
                const zizi = priceMap.get("kind-3");
                price = zizi.get(checkedLength.id);
                break;
            default:
        }
        
        priceDOM.innerText = `${price} руб.*
        *Цена может незначительно отличаться при реальном обращении.`;
    }
    return;
}

document.querySelector('.calc__submit')!.addEventListener("click", displayPrice);

