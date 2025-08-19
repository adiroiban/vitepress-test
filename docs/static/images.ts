import AbstractBlueStack from '@/images/abstract-blue-stack.avif?responsive'
import BirdOnTree from '@/images/bird-on-tree.jpg?responsive'
import RoadInTheForest from '@/images/road-in-the-forest.avif?responsive'
import ForestSprout from '@/images/forest-sprout.avif?responsive'

export const images = {
    'abstract-blue-stack': {
        'alt': 'Abstract stack of blue rectangles',
        'main': AbstractBlueStack.imageUrlFor(900),
        'thumb': AbstractBlueStack.imageUrlFor(400),
    },
    'bird-on-tree': {
        'alt': 'Bird on a tree branch with a blurred background',
        'main': BirdOnTree.imageUrlFor(900),
        'thumb': BirdOnTree.imageUrlFor(400),
        'source': 'https://www.pexels.com/photo/new-holland-honeyeater-in-australian-banksia-33463291'
    },
    'forest-sprout': {
        'alt': 'Sprout in a forest with a blurred background',
        'main': ForestSprout.imageUrlFor(900),
        'thumb': ForestSprout.imageUrlFor(400),
    },
    'road-in-the-forest': {
        'alt': 'Straight road in the forest on a sunny day',
        'main': RoadInTheForest.imageUrlFor(900),
        'thumb': RoadInTheForest.imageUrlFor(400),
    },
}
