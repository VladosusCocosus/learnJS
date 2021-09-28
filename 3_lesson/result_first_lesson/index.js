let counter = 0

const innerCounter = () => {
    const counterEl = document.getElementById("counter")
    counterEl.innerText = counter
}


const onPlus = () => {
    counter++
    innerCounter()
}

const onCancel = () => {
    counter = 0
    innerCounter()
}

innerCounter()