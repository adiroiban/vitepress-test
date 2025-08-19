// import AbstractBlueStack from '@/images/abstract-blue-stack.avif?w=900;400'
// import BirdOnTree from '@/images/bird-on-tree.jpg?w=900;400'
// import RoadInTheForest from '@/images/road-in-the-forest.avif?w=900;400'
// import ForestSprout from '@/images/forest-sprout.avif?w=900;400'

// To test the build without vite-imagetools comment the above imports and
// remove the comments for the following lines.
//
const AbstractBlueStack = ['', '']
const BirdOnTree = ['', '']
const RoadInTheForest = ['', '']
const ForestSprout = ['', '']

export const images = {
    'abstract-blue-stack': {
        'alt': 'Abstract stack of blue rectangles',
        'main': AbstractBlueStack[0],
        'thumb': AbstractBlueStack[1],
    },
    'bird-on-tree': {
        'alt': 'Bird on a tree branch with a blurred background',
        'main': BirdOnTree[0],
        'thumb': BirdOnTree[1],
        'source': 'https://www.pexels.com/photo/new-holland-honeyeater-in-australian-banksia-33463291'
    },
    'forest-sprout': {
        'alt': 'Sprout in a forest with a blurred background',
        'main': ForestSprout[0],
        'thumb': ForestSprout[1],
    },
    'road-in-the-forest': {
        'alt': 'Straight road in the forest on a sunny day',
        'main': RoadInTheForest[0],
        'thumb': RoadInTheForest[1],
    },
}