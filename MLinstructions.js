/* Machine Language Instructions */

const d = {

    '156C':
        'LOAD register 5 from memory cell 6C.',

    '166D':
        'LOAD register 6 from memory cell 6D.',

    '5056':
        'ADD registers 0 and 6 and store the result in register 5.',

    '306E':
        'STORE register 0 at memory cell 6E.',

    'C000':
        'HALT — stop the machine.'

};


/* Images for each instruction */

const images = {

    '156C': '156C.png',

    '166D': '166D.png',

    '5056': '5056.png',

    '306E': '306E.png',

    'C000': 'C000.png'

};


/* Change the image and explanation */

function show(x) {

    document.getElementById('machineImage').src = images[x];

    document.getElementById('r').textContent =
        x + ' → ' + d[x];

}