function calculate(input) {
    let typeOfCar = String(input[0]);
    let engineVolume = String(input[1]);
    let kw = String(input[2]);
    let years = Number(input[3]);
    let result = 0;

    if (typeOfCar === "car") {
        if (engineVolume === "volume1600") {
            if (kw === "kw66") {
                if (years === 35) {
                    result = 180;
                }
            }
        }

        if (typeOfCar === "bus")
            if (engineVolume === "volume1600") {
                if (kw === "kw66") {
                    if (years === "35") {
                        result = 200;
                    }
                }
            }
    }
    console.log(result);
} calculate(["car", "volume1600", "kw66", "35"]);