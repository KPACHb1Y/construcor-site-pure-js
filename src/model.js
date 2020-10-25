import image from './assets/image.png';
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/Blocks';

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),

    new TextBlock('Here we go with some text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),

    new ColumnsBlock([
        '111111111111111',
        '222222222222222',
        '333333333333333',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: "#fff",
            'font-weight': 'bold'
        }
    }),

    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Картинка'
    })



    /* Реализация без классов
    {
        type: 'title',
        value: 'Конструктор сайтов на чистом JS',
        options: {
            tag: 'h2',
            // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem`
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    },
    {
        type: 'text',
        value: 'Here we go with some text',
        options: {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    },
    {
        type: 'columns',
        value: [
            '111111111111111',
            '222222222222222',
            '333333333333333',
        ],
        options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: "#fff",
                'font-weight': 'bold'
            }
        }
    },
    {
        type: 'image',
        value: image,
        options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Картинка'
        }
    } */
];