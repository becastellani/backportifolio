export default{
    name: 'card',
    type: 'document',
    title: 'Card',
    fields: [
        {
            name: 'titulo',
            type: 'string',
            title: 'Titulo'
        },
        {
            name: 'caracteristicas',
            type: 'array',
            title: 'Caracteristicas',
            of: [{type: 'string'}]
        },
        {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
        },
        {
            name: 'botao',
            type: 'array',
            title: 'Botoes',
            of: [{type: 'botao'}]
        },
        
    ]
}