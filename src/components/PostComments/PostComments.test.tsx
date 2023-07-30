import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });


    test('deve renderizar dois comentarios', () => {
        const comentarios = [
            {   
                id: '1',
                comment: 'Comentario N° 1',
            },
            {   
                id: '2',
                comment: 'Comentario N° 2',
            },
        ]        
        
        render(<PostComment />)

        comentarios.forEach(el => {
            fireEvent.change(screen.getByTestId('comment-input'), {
                target: {
                    value: el.comment
                },
            })
            
            fireEvent.click(screen.getByTestId('btn-add-coment'))
        });

        const renderElements = screen.getByTestId('comments-list').getElementsByTagName('li');
        expect(renderElements).toHaveLength(2)
    })
});