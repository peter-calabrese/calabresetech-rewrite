import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

var num = 0
const Cloud = ({ count = 4, radius = 14 }) => {

    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), getSkill()])
        return temp
    }, [count, radius])

    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

function getSkill() {
    const skills = [
        'Python',
        'Linux',
        'Unix',
        'React.JS',
        'React Native',
        'Java',
        'Kotlin',
        'Android Studios',
        'XML',
        'Git',
        'GitHub',
        'DevOps',
        'DevSecOps',
        'Agile']


    return skills[num++ % skills.length]

}

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const wordRef = useRef()

    const [hovered, setHovered] = useState(false)
    const hoverOver = (e) => (e.stopPropagation(), setHovered(true))
    const hoverOut = () => setHovered(false)

    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    useFrame(({ camera }) => {
        wordRef.current.quaternion.copy(camera.quaternion)
        wordRef.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)

    })
    return <Text ref={wordRef} onPointerOver={hoverOver} onPointerOut={hoverOut} {...props} {...fontProps} children={children} />
}



export default Cloud;