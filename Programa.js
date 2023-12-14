window.addEventListener('load', initScene)

const Ovnis= [
    {x: 0, y: 60, z: -25},
    {x: 10, y: 0, z: 25},
    {x: -20, y: 30, z: -45},
    {x: 30, y: 10, z: 45},
    {x: 15, y: 50, z: -75},
    {x: 50, y: 0, z: 55},
    {x: -15, y: 0, z: -30},
    {x: 90, y: 0, z: 20},
    {x: 80, y: 90, z: 60},
    {x: -70, y: 0, z: 30},
    {x: 60, y: 10, z: 90},
    {x: 75, y: 50, z: -40}
]

let Ovni, score = 0

function initScene(){
    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit => {

        Ovnis.forEach(pos => {

            Ovni = document.createElement('a-obj-model')          
        
            Ovni.setAttribute('src', "#ufo")
            Ovni.setAttribute('material', "src: luigis_mansion_x_resident_evil/textures/metal_tile_baseColor.png; metalness: 0.75" )
            Ovni.setAttribute('scale', "0.5 0.5 0.5")
            Ovni.setAttribute('class', 'Ovni')

            Ovni.setAttribute('shootable', '')

            Ovni.object3D.position.set(pos.x, pos.y, pos.z)

            orbit.appendChild(Ovni)

        })

    })

}

AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () =>{
            console.log('Destruido')
            this.el.parentNode.removeChild(this.el)
            document.querySelector('[text]').setAttribute('value', `${++score} Ovnis destruidos`)
        })
    }
})